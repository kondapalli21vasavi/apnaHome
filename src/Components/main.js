import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Display from './Display';
// import { search } from '../../../Backend/controller/userRouter';

function Main(props) {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        Axios.get("https://apnahome-server.onrender.com/Route/getproperties")
            .then((res) => {
                let count = 0;
                let temp = [];
                if (res.status === 200) {
                    res.data.map((val, index) => {
                        temp[count] = val
                        count += 1;
                    })
                    setData(temp)
                }
            })
    }, [props])

    useEffect(() => {
        setFilteredData(data.filter((val) =>
            typeof val.Address === 'string' && val.Address.includes(searchTerm)
        ));
    }, [data, searchTerm]);

    const [edit, setEdit] = useState(false);
    const [searchHouse, setSearchHouse] = useState();

    const handleSearch = () => {
        var filtereddata = [];
        var count = 0;
        data.map((val, index) => {
            if (val.Address === searchTerm) {
                console.log(val)
                setEdit(true);
                filtereddata[count] = val;
                count += 1
            }
        })
        setSearchHouse(filteredData)
    };

    const searchDisplay = function () {
        return searchHouse.map((val, index) => {
            console.log("asjhbfsjfbas", val)
            return <Display key={index} data={val} guru={true} dum="dummy" />
        })

    }

    const display = function () {
        return data.map((val, index) => {
            console.log(val, "display")
            return <Display key={index} data={val} guru={true} />
        })
    }
    return (
        <div>
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
                                        <form className="d-flex">
                                            <input
                                                type="text"
                                                className="form-control me-2"
                                                placeholder="Search by City"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-outline-success"
                                                id="Searchbtn"
                                                onClick={handleSearch}
                                            >
                                                Search By City
                                            </button>
                                        </form>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                </div>
            </div>
            {/* <div className='container mt-5'>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div> */}
            {edit ? (<div className='container mt-3'>
                <div className='row'>
                    {searchDisplay()}
                </div>

            </div>) : (
                null
            )}
            <div className='container mt-3'>
                <div className='row'>
                    {display()}
                </div>
            </div>
        </div>
    )
}

export default Main;