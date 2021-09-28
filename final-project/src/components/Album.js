import "../css/Album.css";
import Radium, { StyleRoot } from "radium";
import { useState, useEffect } from "react";
import { projectFirestore } from "../config/Config";

const Album12 = (props) => {
  const a1 = {
    "@media(max-width:900px)": {
      width: "90%",
    },
  };
  const album = props.match.params.id;
  // console.log(album);
  const [albums1, setAlbums] = useState([]);

  useEffect(() => {
    projectFirestore.collection("albums").onSnapshot((snapshot) => {
      let tempAlbum = [];

      snapshot.forEach((albums) => {
        if (albums.id === album) {
          tempAlbum.push(albums.data());
        }
        // } else {
        //   alert("no");
        // }
      });
      setAlbums(tempAlbum);
    });
  }, [album]);

  return (
    <>
      <div className="album_11">
        <StyleRoot>
          <div className="album_main">
            {albums1.map((albums1) => (
              <div className="cont2" key={album}>
                {/* <li>{albums1.name}</li>
                <li>{albums1.price}</li> */}
                <div className="photo_details" style={a1}>
                  <img src={albums1.url} alt="image1" />
                </div>
                <div className="details_data" style={a1}>
                  <h2>{albums1.name}</h2>
                  <p>
                    {" "}
                    Price: &#8377; <b>{albums1.price}</b>
                  </p>
                  <h4>Product description-</h4>
                  <p>{albums1.description}</p>
                </div>
              </div>
            ))}
          </div>
        </StyleRoot>
      </div>
    </>
  );
};

export default Radium(Album12);
