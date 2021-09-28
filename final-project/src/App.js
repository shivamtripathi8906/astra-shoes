import "../src/css/App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import AllProducts from "./components/AllProducts";
import Radium, { StyleRoot } from "radium";
import Addproduct from "./components/Addproduct";

// import { projectFirestore } from "./config/Config";
// import { useState, useEffect } from "react";
import Album12 from "./components/Album";
import Whoweare from "./components/Whoweare";
import Footer from "./components/Footer";
function App() {
  // const [albums, setAlbums] = useState([]);

  // useEffect(() => {
  //   projectFirestore.collection("albums").onSnapshot((snapshot) => {
  //     let tempAlbum = [];
  //     snapshot.forEach((doc) => {
  //       tempAlbum.push({ ...doc.data(), id: doc.id });
  //     });
  //     setAlbums(tempAlbum);
  //   });
  // }, []);
  return (
    <StyleRoot>
      <BrowserRouter>
        <div className="App">
          <Navbar fixed="top" />

          <Switch>
            <Route exact path="/" component={Homepage} />

            <Route exact path="/all-products" component={AllProducts} />
            <Route exact path="/add-product" component={Addproduct} />
            <Route
              exact
              path="/all-products/:id"
              component={Album12}
              // albums={albums.id}
            />
            <Route exact path="/whoweare" component={Whoweare}></Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </StyleRoot>
  );
}

export default Radium(App);
