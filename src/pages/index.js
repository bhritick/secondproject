import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Home = () => {
	return (
		<>
			<Navbar />
			<header className="bg-primary text-light">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1 className="lead text-center fs-1 py-5 my-5">Welcome Home</h1>
						</div>
					</div>
				</div>
			</header>
			<section className="py-5">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-12">
							<div className="card my-4">
								<img src="https://images.pexels.com/photos/2189696/pexels-photo-2189696.jpeg" 
								className="card-img-top" alt="..." />
								<div className="card-body">
									<p className="text-center h5">
										<Link className="nav-link text-uppercase stretched-link" to="#">About us</Link>
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-12">
							<div className="card my-4">
								<img src="https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg" 
								className="card-img-top" alt="..." />
								<div className="card-body">
									<p className="text-center h5">
										<Link className="nav-link text-uppercase stretched-link" to="#">Homepage</Link>
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-12">
							<div className="card my-4">
								<img src="https://images.pexels.com/photos/2105416/pexels-photo-2105416.jpeg" 
								className="card-img-top" alt="..." />
								<div className="card-body">
									<p className="text-center h5">
										<Link className="nav-link text-uppercase stretched-link" to="#">Contact us</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Home;