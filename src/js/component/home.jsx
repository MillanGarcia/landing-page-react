import React from "react";
import "../../styles/index.css";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="">
			<div className="d-none d-sm-block">
				<ul class="nav justify-content-end bg-black mb-3">
					<li className="nav-item nomargin">
						<a className="navbar-brand  text-white  " aria-current="page" href="#">Start Bootstrap</a>
					</li>
					<li className="nav-item ">
						<a className="nav-link active text-white" aria-current="page" href="#">Home</a>
					</li>
					<li className="nav-item ">
						<a className="nav-link text-secondary" href="#">About</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">Services</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary">Contact</a>
					</li>
				</ul>
		  	</div>
			<div class="d-sm-none p-2 bg-light 
            text-black">
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
					<div class="container-fluid">
						<a class="navbar-brand" href="#">Start Bootstrap</a>
						<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
							<ul class="navbar-nav">
								<li><a class="dropdown-item text-white" href="#">Home</a></li>
								<li><a class="dropdown-item text-secondary" href="#">About</a></li>
								<li><a class="dropdown-item text-secondary" href="#">Services</a></li>
								<li><a class="dropdown-item text-secondary" href="#">Contact</a></li>
							</ul>
						</div>
					</div>
				</nav>
        	</div>
			
			<div className="w-100 container">
				<div className="jumbotron bg-secondary bg-opacity-25 w-100 pt-5 widthMax" >
						<h1 className="fs-1 my-text ms-3 "><h1>A Warm Welcome!</h1></h1>
						<p className="my-text ms-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum sequi, quibusdam eveniet cumque nihil accusantium consequuntur perspiciatis quia debitis sint modi vero a incidunt hic soluta aliquam reprehenderit laudantium magnam. </p>
						<div>
							<a href="#" className="btn btn-primary justify-content-start mb-5 ms-3"><b>Call to action!</b></a>
						</div>
				</div>
			</div>

			<div className="d-block text-center p-3  d-sm-flex container ">
				<div className="row">
					<div className="col-12 col-sm-3 mt-3 mt-sm-0"> 
						<div className="card w-100 me-3" >
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Bill_Murray-8882.jpg/800px-Bill_Murray-8882.jpg" className="card-img-top my-img" alt="..."/>
							<div classNameass="card-body">
								<h5 className="card-title fs-4 pt-2"><b>Card title</b></h5>
								<p className="card-text p-3 border-bottom overflow-auto scrollbar">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum sequi, quibusdam eveniet cumque nihil accusantium consequuntur perspiciatis quia debitis sint modi vero a incidunt hic soluta aliquam reprehenderit laudantium magnam. </p>
								<a href="#" className="btn btn-primary mb-2"><b>Find out more!</b></a>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-3 mt-3 mt-sm-0"> 
						<div className="card w-100  me-3" >
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Bill_Murray-8882.jpg/800px-Bill_Murray-8882.jpg" className="card-img-top" alt="..."/>
							<div classNameass="card-body ">
								<h5 className="card-title fs-4 pt-2"><b>Card title</b></h5>
								<p className="card-text p-3 border-bottom overflow-auto scrollbar">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum sequi, quibusdam eveniet cumque nihil accusantium consequuntur perspiciatis quia debitis sint modi vero a incidunt hic soluta aliquam reprehenderit laudantium magnam. </p>
								<a href="#" className="btn btn-primary mb-2"><b>Find out more!</b></a>
							</div>
						</div> 
					</div>
					<div className="col-12 col-sm-3 mt-3 mt-sm-0"> 
						<div className="card w-100 me-3 " >
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Bill_Murray-8882.jpg/800px-Bill_Murray-8882.jpg" className="card-img-top" alt="..."/>
							<div classNameass="card-body">
								<h5 className="card-title fs-4 pt-2"><b>Card title</b></h5>
								<p className="card-text p-3 border-bottom overflow-auto scrollbar ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum sequi, quibusdam eveniet cumque nihil accusantium consequuntur perspiciatis quia debitis sint modi vero a incidunt hic soluta aliquam reprehenderit laudantium magnam. </p>
								<a href="#" className="btn btn-primary mb-2"><b>Find out more!</b></a>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-3 mt-3 mt-sm-0"> 
						<div className="card w-100 " >
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Bill_Murray-8882.jpg/800px-Bill_Murray-8882.jpg" className="card-img-top" alt="..."/>
							<div classNameass="card-body ">
								<h5 className="card-title fs-4 pt-2"><b>Card title</b></h5>
								<p className="card-text p-3 border-bottom overflow-auto scrollbar">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum sequi, quibusdam eveniet cumque nihil accusantium consequuntur perspiciatis quia debitis sint modi vero a incidunt hic soluta aliquam reprehenderit laudantium magnam. </p>
								<a href="#" className="btn btn-primary mb-2"><b>Find out more!</b></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=" w-100 p-5 bg-black text-white" >
				<p className="text-center">Copyright @ Your Website 2018</p>
			</div>
		</div>
	);
};

export default Home;
