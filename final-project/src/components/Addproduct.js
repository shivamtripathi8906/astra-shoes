import { useState } from "react";
import { projectFirestore, projectStorage } from "../config/Config";
import "../css/Navbar.css";
// import Progressbar from "./Progressbar";
// import useStorage from "../hooks/useStorage";

const Addproduct = () => {
  const [pname, pSetname] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  return (
    <>
      <div className="height1">
        <input
          value={pname}
          type="text"
          onChange={(e) => pSetname(e.target.value)}
        />
        <br />
        <input
          value={price}
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <textarea
          className="inputd"
          value={description}
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <br />
        <button
          onClick={async () => {
            const storageRef = projectStorage.ref();
            const fileRef = storageRef.child(file.name);
            await fileRef.put(file);
            if (!pname) {
              return;
            }
            projectFirestore
              .collection("albums")
              .doc()
              .set({
                name: pname,
                price: price,
                description: description,
                url: await fileRef.getDownloadURL(),
              });
            pSetname("");
            setPrice("");
            setFile(null);
            setDescription("");
          }}
        >
          Add Products
        </button>
      </div>
    </>
  );
};

export default Addproduct;
