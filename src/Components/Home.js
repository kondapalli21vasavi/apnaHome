import { Component } from 'react';
import './Home.css';
import exampleImage from './photo-1564767609342-620cb19b2357.jpg'; // Replace with the actual path to your image
import SectionImage1 from './ronnie-george-9gGvNWBeOq4-unsplash.jpg'; // Replace with the actual path to your image
import SectionImage2 from './EIcuB1BaaCgyysQkgxzCoeejxvt2-f293pt9.jpeg'; // Replace with the actual path to your image
import TestimonilasImage2 from './BX9y6pYrFpx1igEvFwSa9QqQCYIxN62PphtB1wSp.jpg'; // Replace with the actual path to your image
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <>
                <div className='container-fluid Home'>
                    <div className="row Header">
                        <div className="col mt-3">
                            <p>Find your dream Home with ApnaHome</p>
                        </div>
                    </div>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="/"><b>ApnaHome</b></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link text-dark" href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="/"><Link to='/Listings' className='Link text-dark'>Listings</Link></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href='/'><Link to='/contact' className='Link text-dark'>Contact Us</Link></a>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <form className="d-flex" role="search">
                                            <button type="button" className="btn" id="Searchbtn"><Link to='/Login' className="Link">Start Your Search</Link></button>
                                        </form>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="Hero container mt-5">
                        <div className="row">
                            <div className='col-md-6'>
                                <h1 className='Hero-content mt-5 mb-3'><b>Find Your Dream Home</b></h1>
                                <p className='Hero-content-1'>Search and list real estate properties including homes and apartments </p>
                                {/* <form className="form-inline">
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="emailInput" placeholder="Enter Your email Address" />
                                    </div>
                                    <button type="submit" className="btn mt-3" id='Hero-search'><Link to='/Login' className="Link">Search Now</Link></button>
                                </form> */}
                            </div>
                            <div className='col-md-6 mb-3'>
                                <img src={exampleImage} alt="Example" id='Hero-image' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid Section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <h2 className='text-light'>Our mission is to make the process of finding and owning a home as seamless and enjoyable as possible. </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid Features">
                    <div className='container mt-5'>
                        <div className='row'>
                            <div className='col-md-5'>
                                <h1 className='Section-content'><b>Wide Range of Properties</b></h1>
                                <p className='Section-content-1'>Browse through our extensive collection of homes and apartments for sale or rent in your desired location. </p>
                                {/* <form className="form-inline">
                                    <button type="submit" className="btn mt-3" id='Hero-search'>Visit Listings</button>
                                </form> */}
                            </div>
                            <div className='col-md-7 d-flex justify-content-end mb-3'>
                                <img src={SectionImage1} alt="Example" id='Section-1-image' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid Features">
                    <div className='container mt-5'>
                        <div className='row'>
                            <div className='col-md-7 mb-3'>
                                <img src={SectionImage2} alt="Example" id='Section-2-image' />
                            </div>
                            <div className='col-md-5'>
                                <h1 className='Section-2-content'><b>Expert Agents</b></h1>
                                <p className='Section-content-1'>Our team of experienced agents are here to guide you through the process of buying or selling a property.  </p>
                                {/* <form className="form-inline">
                                    <button type="submit" className="btn mt-3" id='Hero-search'>Get in Touch</button>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid mt-5'>
                    <div className='container'>
                        <div className='row Testimonials'>
                            <div className='col-md-4 Testimonials-content'>
                                <h2>Testimonials</h2>
                                <p>Read what our satisfied clients have to say about their experience with HomeList. </p>
                            </div>
                            <div className='col-md-6 Testimonials-card'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <img src={TestimonilasImage2} alt="Example" id='Testimonials-image' className='mt-4' />
                                    </div>
                                    <div className='col-md-6 mt-4 card-content'>
                                        <h2>Home Deals</h2>
                                        <p>HomeList has made the process of finding my dream home so much easier. Highly recommended!</p>
                                        <p>--John Doe</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='container'>
                        <div className='row Informed-container'>
                            <div className='col-md-6'>
                                <h2 className='text-light Informed-content'>Stay Informed</h2>
                            </div>
                            <div className='col-md-6'>
                                <p className='text-light mx-5 mt-5 Informed-content-1'>Subscribe to our newsletter to get updates on the latest listings, market trends, and more.</p>
                                <form className="form-inline mx-5 mb-5">
                                    <button type="submit" className="btn mt-3" id='subscribe'><Link to='/contact' className='Link text-Light'>Contact Us</Link></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Home;