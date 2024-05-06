import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Images from "../components/images";
import { Carousel } from "bootstrap";

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
			<section>
				<div className="container">
					<div className="row">
						<div className="col-md-6  col-12">
						<div className="card bg-transparent border-0">
                        <div className="card-body p-5">
                            <h1 className="lead fw-bold fs-2 my-5">Welcome to Wheelguru</h1>
                            <p className="lead fs-6 my-4">We genuinely appreciate your interest in Wheelguru,
                                and we're committed to providing you with the best possible experience. Your inquiries,
                                feedback, and support drive us to continually improve and deliver top-notch content,
                                products, and services. We look forward to hearing from you and hope to be a valuable
                                resource on your biking journey. So, whether you're a seasoned cyclist looking for the
                                latest gear or a newcomer seeking advice on starting your biking adventure, we're here
                                to help. Contact us today and let's embark on this exciting journey together.</p>
                            <div className="my-5">
                                <a className="btn btn-danger rounded px-5 me-3 mb-3" href="#super-bikes" role="button">Super
                                    Bikes</a>
                                <a className="btn btn-outline-dark rounded px-5 me-3 mb-3" href="#normal-bikes"
                                    role="button">Normal Bikes</a>
                            </div>
                        </div>
                    </div>
						</div>
						<div className="col-md-6  col-12">
						<div className="card-body py-5 my-5">
                            <h2 className="text-center">
                                <span className="text-danger fw-bold display-6">Wheelguru </span>
                                <span>Dream until </span>
                                <span className="text-danger">your Dream </span>
                                <span>Come True</span>
                            </h2>
                            <div className="text-center mt-5">
                                <a href="contact-us" className="btn btn-danger rounded px-5 me-3 mb-3">Get
                                    in touch with us</a>
                            </div>
                        </div>
						</div>
					</div>
				</div>
			</section>
			<section id="brands">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-start text-center lead fs-1 fw-bold my-5">Brands In India</h2>
                </div>
            </div>
        </div>
        <div className="container card rounded mb-5">
            <div className="row">
                <div className="col-lg-2 col-md-3 col-6">
                    <a className="streched-link" href="tvs-bikes">
                        <div className="card card-hover rounded-0 border-0">
                            <div className="card-body">
                                <img className="img-fluid" src="https://wheelguru.in/res/brand-logo/tvs-logo.jpg" alt="TVS Two Wheeler Bikes"
                                    title="TVS Two Wheeler Bikes" loading="lazy" width="132" height="74" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                    <a className="streched-link" href="bajaj-auto">
                        <div className="card card-hover rounded-0 border-0">
                            <div className="card-body">
                                <img className="img-fluid" src="https://wheelguru.in/res/brand-logo/bajaj-logo.jpg" alt="BAJAJ Two Wheeler Bikes"
                                    title="BAJAJ Two Wheeler Bikes" loading="lazy" width="132" height="74" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                    <a className="streched-link" href="hero-bikes">
                        <div className="card card-hover rounded-0 border-0">
                            <div className="card-body">
                                <img className="img-fluid" src="https://wheelguru.in/res/brand-logo/hero-logo.jpg" alt="HERO Two Wheeler Bikes"
                                    title="HERO Two Wheeler Bikes" loading="lazy" width="132" height="74" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                    <a className="streched-link" href="ktm-bikes">
                        <div className="card card-hover rounded-0 border-0">
                            <div className="card-body">
                                <img className="img-fluid" src="https://wheelguru.in/res/brand-logo/ktm-logo.jpg" alt="KTM Two Wheeler Bikes"
                                    title="KTM Two Wheeler Bikes" loading="lazy" width="132" height="74" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                    <a className="streched-link" href="royal-enfield">
                        <div className="card card-hover rounded-0 border-0">
                            <div className="card-body">
                                <img className="img-fluid" src="https://wheelguru.in/res/brand-logo/royal-enfield-logo.jpg"
                                    alt="Royal Enfield Two Wheeler Bikes" title="Royal Enfield Two Wheeler Bikes"
                                    loading="lazy" width="132" height="74" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                    <a className="streched-link" href="yamaha-bikes">
                        <div className="card card-hover rounded-0 border-0">
                            <div className="card-body">
                                <img className="img-fluid" src="https://wheelguru.in/res/brand-logo/yamaha-logo.jpg"
                                    alt="Yamaha Two Wheeler Bikes" title="Yamaha Two Wheeler Bikes" loading="lazy"
                                    width="132" height="74" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                    <a className="streched-link" href="jawa-bikes">
                        <div className="card card-hover rounded-0 border-0">
                            <div className="card-body">
                                <img className="img-fluid" src="https://wheelguru.in/res/brand-logo/jawa-logo.jpg" alt="JAWA Two Wheeler Bikes"
                                    title="JAWA Two Wheeler Bikes" loading="lazy" width="132" height="74" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                    <a className="streched-link" href="ather-scooter">
                        <div className="card card-hover rounded-0 border-0">
                            <div className="card-body">
                                <img className="img-fluid" src="https://wheelguru.in/res/brand-logo/ather-logo.jpg" alt="ATHER Two Wheeler Bikes"
                                    title="ATHER Two Wheeler Bikes" loading="lazy" width="132" height="74" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                    <a className="streched-link" href="suzuki-bikes">
                        <div className="card card-hover rounded-0 border-0">
                            <div className="card-body">
                                <img className="img-fluid" src="https://wheelguru.in/res/brand-logo/suzuki-logo.jpg"
                                    alt="SUZUKI Two Wheeler Bikes" title="SUZUKI Two Wheeler Bikes" loading="lazy"
                                    width="132" height="74" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                    <a className="streched-link" href="ola-scooter">
                        <div className="card card-hover rounded-0 border-0">
                            <div className="card-body">
                                <img className="img-fluid" src="https://wheelguru.in/res/brand-logo/ola-logo.jpg" alt="OLA Two Wheeler Bikes"
                                    title="OLA Two Wheeler Bikes" loading="lazy" width="132" height="74" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                    <a className="streched-link" href="honda-bikes">
                        <div className="card card-hover rounded-0 border-0">
                            <div className="card-body">
                                <img className="img-fluid" src="https://wheelguru.in/res/brand-logo/honda-logo.jpg" alt="Honda Two Wheeler Bikes"
                                    title="Honda Two Wheeler Bikes" loading="lazy" width="132" height="74" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                    <a className="streched-link" href="yezdi-bikes">
                        <div className="card card-hover rounded-0 border-0">
                            <div className="card-body">
                                <img className="img-fluid" src="https://wheelguru.in/res/brand-logo/Yezdi-Logo.jpg" alt="yezdi Two Wheeler Bikes"
                                    title="yezdi Two Wheeler Bikes" loading="lazy" width="132" height="74" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="text-center mb-5">
                        <a className="btn btn-danger rounded px-5 me-3 mb-3" href="#super-bikes" role="button">Super
                            Bikes</a>
                        <a className="btn btn-outline-dark rounded px-5 me-3 mb-3" href="#normal-bikes" role="button">Normal
                            Bikes</a>
                    </div>
                </div>
            </div>
        </div>
			</section>
			
			<section>
			<div className="container">
            <div className="row">
                <div className="col-md-8 col-12"></div>
                <div className="col-lg-4 col-md-6 col-12">
				<div className="card-body py-5">
                            <h2 className="text-center">
                                <span className="text-danger fw-bold display-6">Wheelguru </span>
                                <span>Dream until </span>
                                <span className="text-danger">your Dream </span>
                                <span>Come True</span>
                            </h2>
                            <div className="text-center mt-5">
                                <a href="contact-us" className="btn btn-danger rounded px-5 me-3 mb-3">Get
                                    in touch with us</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
			</section>
			<section id="super-bikes">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-start text-center lead fs-1 fw-bold my-5">Super Bikes</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="card border-0 mb-3">
                        <div className="card-body">
                            <div className="flip-card mx-auto">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front bg-light rounded">
                                        <img width="320" height="180" src="https://wheelguru.in/res/bike-image/sm/sports-bike-wheelguru.webp"
                                            alt="Cruser Bike | Super Bikes" title="Cruser Bike | Super Bikes" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="card">
                                            <div className="card-body rounded">
                                                <h3 className="text-start lead fs-2">Sports Bike</h3>
                                                <hr className="w-50" />
                                                <p className="text-start lead fs-6">Explore & compare sports bikes, it's
                                                    specifiactions, features, price, mileage and more ..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="card border-0 mb-3">
                        <div className="card-body">
                            <div className="flip-card mx-auto">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front bg-light rounded">
                                        <img width="320" height="180" src="https://wheelguru.in/res/bike-image/sm/cruser-bike-wheelguru.webp"
                                            alt="Cruser Bike | Super Bikes" title="Cruser Bike | Super Bikes" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="card">
                                            <div className="card-body rounded">
                                                <h3 className="text-start lead fs-2">Cruser Bike</h3>
                                                <hr className="w-50" />
                                                <p className="text-start lead fs-6">Explore & compare sports bikes, it's
                                                    specifiactions, features, price, mileage and more ..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="card border-0 mb-3">
                        <div className="card-body">
                            <div className="flip-card mx-auto">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front bg-light rounded">
                                        <img width="320" height="180"
                                            src="https://wheelguru.in/res/bike-image/sm/adventure-bike-super-bike.webp"
                                            alt="Adventure Bike | Super Bikes" title="Adventure Bike | Super Bikes" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="card">
                                            <div className="card-body rounded">
                                                <h3 className="text-start lead fs-2">Adventure Bike</h3>
                                                <hr className="w-50" />
                                                <p className="text-start lead fs-6">Explore & compare sports bikes, it's
                                                    specifiactions, features, price, mileage and more ..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="card border-0 mb-3">
                        <div className="card-body">
                            <div className="flip-card mx-auto">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front bg-light rounded">
                                        <img width="320" height="180"
                                            src="https://wheelguru.in/res/bike-image/sm/scramlerb-bike-super-bike.webp"
                                            alt="Scramler Bike | Super Bikes" title="Scramler Bike | Super Bikes" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="card">
                                            <div className="card-body rounded">
                                                <h3 className="text-start lead fs-2">Scramler Bike</h3>
                                                <hr className="w-50" />
                                                <p className="text-start lead fs-6">Explore & compare sports bikes, it's
                                                    specifiactions, features, price, mileage and more ..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="card border-0 mb-3">
                        <div className="card-body">
                            <div className="flip-card mx-auto">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front bg-light rounded">
                                        <img width="320" height="180" src="https://wheelguru.in/res/bike-image/sm/adventure-super-bike.webp"
                                            alt="Adventure Bike | Super Bike" title="Adventure Bike | Super Bike" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="card">
                                            <div className="card-body rounded">
                                                <h3 className="text-start lead fs-2">Adventure Bike</h3>
                                                <hr className="w-50" />
                                                <p className="text-start lead fs-6">Explore & compare sports bikes, it's
                                                    specifiactions, features, price, mileage and more ..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="card border-0 mb-3">
                        <div className="card-body">
                            <div className="flip-card mx-auto">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front bg-light rounded">
                                        <img width="320" height="180"
                                            src="https://wheelguru.in/res/bike-image/sm/sports-bike-super-bike.webp"
                                            alt="Cruser Bike | Super Bikes" title="Cruser Bike | Super Bikes" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="card">
                                            <div className="card-body rounded">
                                                <h3 className="text-start lead fs-2">Sports Bike</h3>
                                                <hr className="w-50" />
                                                <p className="text-start lead fs-6">Explore & compare sports bikes, it's
                                                    specifiactions, features, price, mileage and more ..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="text-center mb-5">
                        <a className="btn btn-danger rounded px-5 me-3 mb-3" href="#brands" role="button">Bike
                            Brands</a>
                        <a className="btn btn-outline-dark rounded px-5 me-3 mb-3" href="#normal-bikes" role="button">Normal
                            Bikes</a>
                    </div>
                </div>
            </div>
        </div>
			</section>
			<section id="normal-bikes">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-start text-center lead fs-1 fw-bold my-5">Normal Bikes</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="card border-0 mb-3">
                        <div className="card-body">
                            <div className="flip-card mx-auto">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front bg-light rounded">
                                        <img src="https://wheelguru.in/res/bike-image/sm/sports-bike.webp" width="320" height="180"
                                            alt="Sports Bike at Wheelguru" title="Sports Bike at Wheelguru"
                                            className="my-2" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="card">
                                            <div className="card-body rounded">
                                                <h3 className="text-start lead fs-2">Sports Bike</h3>
                                                <hr className="w-50" />
                                                <p className="text-start lead fs-6">Explore & compare sports bikes, it's
                                                    specifiactions, features, price, mileage and more ..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="card border-0 mb-3">
                        <div className="card-body">
                            <div className="flip-card mx-auto">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front bg-light rounded">
                                        <img src="https://wheelguru.in/res/bike-image/sm/cruser-bike.webp" width="320" height="180"
                                            alt="Cruser Bike at Wheelguru" title="Cruser Bike at Wheelguru" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="card">
                                            <div className="card-body rounded">
                                                <h3 className="text-start lead fs-2">Cruser Bike</h3>
                                                <hr className="w-50" />
                                                <p className="text-start lead fs-6">Explore & compare sports bikes, it's
                                                    specifiactions, features, price, mileage and more ..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="card border-0 mb-3">
                        <div className="card-body">
                            <div className="flip-card mx-auto">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front bg-light rounded">
                                        <img className="img-fluid" src="https://wheelguru.in/res/bike-image/sm/touring-bike.webp" width="320"
                                            height="120" alt="Touring Bikes" title="Touring Bikes" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="card">
                                            <div className="card-body rounded">
                                                <h3 className="text-start lead fs-2">Touring Bike</h3>
                                                <hr className="w-50" />
                                                <p className="text-start lead fs-6">Explore & compare sports bikes, it's
                                                    specifiactions, features, price, mileage and more ..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="card border-0 mb-3">
                        <div className="card-body">
                            <div className="flip-card mx-auto">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front bg-light rounded">
                                        <img src="https://wheelguru.in/res/bike-image/sm/scrambler-yezdi.webp" width="320" height="180"
                                            alt="Scrambler Bike - Yezdi" title="Scrambler Bike - Yezdi" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="card">
                                            <div className="card-body rounded">
                                                <h3 className="text-start lead fs-2">Scrambler Bike</h3>
                                                <hr className="w-50" />
                                                <p className="text-start lead fs-6">Explore & compare sports bikes, it's
                                                    specifiactions, features, price, mileage and more ..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="card border-0 mb-3">
                        <div className="card-body">
                            <div className="flip-card mx-auto">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front bg-light rounded">
                                        <img src="https://wheelguru.in/res/bike-image/sm/tvs-jupiter-125-scooter.webp" width="320"
                                            height="180" alt="Scooter- Non Electric" title="Scooter- Non Electric" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="card">
                                            <div className="card-body rounded">
                                                <h3 className="text-start lead fs-2">Scooter</h3>
                                                <hr className="w-50" />
                                                <p className="text-start lead fs-6">Explore & compare sports bikes, it's
                                                    specifiactions, features, price, mileage and more ..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="card border-0 mb-3">
                        <div className="card-body">
                            <div className="flip-card mx-auto">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front bg-light rounded">
                                        <img src="https://wheelguru.in/res/bike-image/sm/450x-cosmic-black-electric-scooter.webp" width="320"
                                            height="180" alt="Electric Scooter" title="Electric Scooter" />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="card">
                                            <div className="card-body rounded">
                                                <h3 className="text-start lead fs-2">Electric Scooter</h3>
                                                <hr className="w-50" />
                                                <p className="text-start lead fs-6">Explore & compare sports bikes, it's
                                                    specifiactions, features, price, mileage and more ..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="text-center mb-5">
                        <a className="btn btn-danger rounded px-5 me-3 mb-3" href="#super-bikes" role="button">Super
                            Brands</a>
                        <a className="btn btn-outline-dark rounded px-5 me-3 mb-3" href="#brands" role="button">Bike
                            Brands</a>
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