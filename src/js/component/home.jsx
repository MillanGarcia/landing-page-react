import React from "react";
import "../../styles/index.css";

import Navbar from "./Navbar.jsx"
import Firstheader from "./Firstheader.jsx"
import PhotoBlock from "./PhotoBlock.jsx";
import Footer from "./Footer.jsx";
import { element } from "prop-types";

//create your first component
const Home = () => {

	return (
		<div className="">
			
			<Navbar navTitle="Start Bootstrap" Home="Home" About="About" Services="Services" Contact="Contact" />
			
			<Firstheader/>
				
			<PhotoBlock prueba="esto es una prueba"/>

			<Footer/>
		</div>
	);
};

export default Home;
