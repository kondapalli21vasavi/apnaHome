import { Link } from 'react-router-dom';
import './dashboard.css';
import Display from './Display';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function Dashboard(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        Axios.get("https://apnahome-server.onrender.com/Route/getproperties")
            .then((res) => {
                if (res.status === 200) {
                    res.data.map((val, index) => {
                        console.log(val, props.id)
                        if (val.id === props.id) {
                            console.log(props.id, val, "here")
                            const filteredData = res.data.filter((val) => val.id === props.id);
                            setData(filteredData);
                        }
                    })
                }
            })
    }, [props])
    const display = function () {
        return data.map((val, index) => {
            console.log(val, "display")
            return <Display data={val} />
        })
    }
    return (
        <div className="container-fluid">
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
                                    <Link to='/Dashboard' className='Link text-dark mx-3'>Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/main" className='Link text-dark mx-3'>Listings</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className='Link text-dark mx-3'>Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Login' className='Link text-dark mx-3'>Logout</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <form className="d-flex" role="search">
                                    <button type="button" className="btn" id="Searchbtn">Search by City</button>
                                </form>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='container'>
                <button type="button" class="btn"><Link to='/input' className='Link'> Create+ </Link></button>
            </div>
            {/* <div className='container mt-5'>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn ">Go somewhere</a>
                    </div>
                </div>
            </div> */}
            <div className='container mt-3'>
                <div className='row'>
                    {display()}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;