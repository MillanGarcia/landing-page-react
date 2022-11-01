import propTypes from "prop-types";
import React from "react";
import Card from "./Card.jsx";
const PhotoBlock=(props)=>{
    const text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum sequi, quibusdam eveniet cumque nihil accusantium consequuntur perspiciatis quia debitis sint modi vero a incidunt hic soluta aliquam reprehenderit laudantium magnam. ";
	const photo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Bill_Murray-8882.jpg/800px-Bill_Murray-8882.jpg";
    return (
    <div className="d-block text-center p-3  d-sm-flex container ">
        <div className="row">
            <Card photo={photo} cardtitle="Card title" cardtext={text} num="1"/>
            <Card photo={photo} cardtitle="Card title" cardtext={text} num="2"/>
            <Card photo={photo} cardtitle="Card title" cardtext={text} num="3"/>
            <Card photo={photo} cardtitle="Card title" cardtext={text} num="4"/>	
        </div>
	</div>
    )
}
export default PhotoBlock;