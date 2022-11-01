import React from "react";
const Firstheader=(props)=>{
    return(
    <div className="w-100 container">
        <div className="jumbotron bg-secondary bg-opacity-25 w-100 pt-5 widthMax" >
            <h1 className="fs-1 my-text ms-3 "><h1>A Warm Welcome!</h1></h1>
            <p className="my-text ms-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum sequi, quibusdam eveniet cumque nihil accusantium consequuntur perspiciatis quia debitis sint modi vero a incidunt hic soluta aliquam reprehenderit laudantium magnam. </p>
            <div>
                <a href="#" className="btn btn-primary justify-content-start mb-5 ms-3"><b>Call to action!</b></a>
            </div>
        </div>
    </div>
    )
};
export default Firstheader;