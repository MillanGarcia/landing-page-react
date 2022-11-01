import React from "react";
const Card=(props)=>{
    return (
        <div className="col-12 col-sm-3 mt-3 mt-sm-0"> 
            <div className="card w-100 me-3" >
                <img src={props.photo} className="card-img-top my-img" alt={props.num}/>
                <div classNameass="card-body">
                    <h5 className="card-title fs-4 pt-2"><b>{props.cardtitle}</b></h5>
                    <p className="card-text p-3 border-bottom overflow-auto scrollbar">{props.cardtext}</p>
                    <a href="#" className="btn btn-primary mb-2"><b>Find out more!</b></a>
                </div>
            </div>
        </div>
    )
}
export default Card;