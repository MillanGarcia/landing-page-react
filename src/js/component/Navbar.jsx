import React from "react";
const Navbar=(props)=>{
    return (
        <>
            <div className="d-none d-sm-block">
                <ul class="nav justify-content-end bg-black mb-3">
                    <li className="nav-item nomargin"><a className="navbar-brand  text-white  " aria-current="page" href="#">{props.navTitle}</a></li>
                    <li className="nav-item "><a className="nav-link active text-white" aria-current="page" href="#">{props.Home}</a></li>
                    <li className="nav-item "><a className="nav-link text-secondary" href="#">{props.About}</a></li>
                    <li className="nav-item"><a className="nav-link text-secondary" href="#">{props.Services}</a></li>
                    <li className="nav-item"><a className="nav-link text-secondary">{props.Contact}</a></li>
                </ul>
            </div>
            
            <div class="d-sm-none p-2 bg-light text-black">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">{props.navTitle}</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                            <ul class="navbar-nav">
                                <li><a class="dropdown-item text-white" href="#">{props.Home}</a></li>
                                <li><a class="dropdown-item text-secondary" href="#">{props.About}</a></li>
                                <li><a class="dropdown-item text-secondary" href="#">{props.Services}</a></li>
                                <li><a class="dropdown-item text-secondary" href="#">{props.Contact}</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Navbar;