import "../css/Allproducts.css";
import { useState } from "react";
import { projectFirestore } from "../config/Config";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Radium, { StyleRoot } from "radium";
const AllProducts = () => {
	const c1 = {
		"@media(max-width:600px)": {
			width: "45%"
		}
	};
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		projectFirestore.collection("albums").onSnapshot((snapshot) => {
			let tempAlbum = [];

			snapshot.forEach((doc) => {
				tempAlbum.push({ ...doc.data(), id: doc.id });
			});
			setAlbums(tempAlbum);
		});
	}, []);

	return (
		<>
			<StyleRoot>
				<div className="Allproduct">
					<p>Our products...</p>
					<div className="main">
						{albums.map((albums) => (
							<div className="cont" style={c1} key={albums.id}>
								<Link to={"/all-products/" + albums.id} album={albums} key={albums.id}>
									<img src={albums.url} alt="img" />
									<p>{albums.name}</p>
									<p>&#8377; {albums.price}</p>
								</Link>
							</div>
						))}
					</div>
				</div>
			</StyleRoot>
		</>
	);
};
export default Radium(AllProducts);
