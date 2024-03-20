import { useEffect, useState } from 'react';
import './input.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function converttobase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}

function Input(props) {
    const [address, setAddress] = useState("");
    const [price, setPrice] = useState("");
    const [built_up, setBuilt_up] = useState("");
    const [carpet, setCarpet] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [parking, setParking] = useState("");
    const [furnishing, setFurnishing] = useState("");
    const [direction, setDirection] = useState("");
    const [property, setProperty] = useState("");
    const [image, setImage] = useState("");

    const handleDash = (event) => {
        setBedrooms(event.target.value)
    }

    const handlePark = (event) => {
        setParking(event.target.value)
    }

    const handlefileupload = async (e) => {
        const file = e.target.files[0];
        const base64 = await converttobase64(file);
        setImage(base64);

    }
    const handleSubmit=()=>{
        const data={id:props.id,Address:address,Price:price,Square_build_up_area:built_up,Carpet_area:carpet,Bedrooms:bedrooms,Parking:parking,Furnishing_State:furnishing,Direction_facing:direction,Property_on:property,Image:image}
        Axios.post("https://apnahome-server.onrender.com/Route/createproperties",data)
        .then((res)=>{
            if(res.status===200){
                alert("House Added Successfully");
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }
    const handleUpdate=()=>{
        const data={id:props.id,Address:address,Price:price,Square_build_up_area:built_up,Carpet_area:carpet,Bedrooms:bedrooms,Parking:parking,Furnishing_State:furnishing,Direction_facing:direction,Property_on:property,Image:image}
        Axios.put("https://apnahome-server.onrender.com/Route/updateproperties/"+props.data._id,data)
        .then((res)=>{
            if(res.status===200){
                alert("House Updated Successfully");
                window.location.reload();
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }
    const [ver,setVer]=useState(true);
    useEffect(()=>{
        try{
            setAddress(props.data.Address)
            setPrice(props.data.Price)
            setBuilt_up(props.data.Square_build_up_area)
            setCarpet(props.data.Carpet_area)
            setBedrooms(props.data.Bedrooms)
            setParking(props.data.Parking)
            setFurnishing(props.data.Furnishing_State)
            setDirection(props.data.Direction_facing)
            setProperty(props.data.Property_on)
            setVer(false)
            setImage(props.data.Image)
        }
        catch{}
    },[props.data])

    return (
        <div>
            <div className="container-fluid">
                <div className="row Header">
                    <div className="col mt-3">
                        <p>Find your dream Home with HomeList</p>
                    </div>
                </div>
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/"><b>HomeList</b></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className='Link text-dark mx-3'>Myinfo</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/Dashboard' className='Link text-dark mx-3'>Dashboard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/main" className='Link text-dark mx-3'>Listings</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='Link text-dark mx-3'>Contact</Link>
                                    </li>
                                </ul>
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <form className="d-flex" role="search">
                                        <button type="button" className="btn" id="Searchbtn">Start Your Search</button>
                                    </form>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="container-fluid">
                    <form className="mx-auto" id="create_form">
                        <h4 className='text-center'>Enter details here</h4>
                        <div className="col-md-12 mt-3">
                            <label htmlFor="Dashboard_address" className="form-label">Address</label>
                            <input defaultValue={address} type='text' onChange={(event) => setAddress(event.target.value)} className="form-control" id="Dashboard_address" placeholder="Enter Address" required></input>
                        </div>
                        <div className="col-md-12 mt-3">
                            <label htmlFor="Dashboard_Price" className="form-label">Price</label>
                            <input defaultValue={price} type='text' onChange={(event) => setPrice(event.target.value)} className="form-control" id="Dashboard_price" placeholder="Enter Price" required></input>
                        </div>
                        <div className="col-md-12 mt-3">
                            <label htmlFor="Dashboard_builtuparea" className="form-label">Super Built-Up Area</label>
                            <input defaultValue={built_up} type='text' onChange={(event) => setBuilt_up(event.target.value)} className="form-control" id="Dashboard_builtuparea" placeholder="Enter Built-Up area in Sq.ft" required></input>
                        </div>
                        <div className="col-md-12 mt-3">
                            <label htmlFor="Dashboard_carpetarea" className="form-label">Carpet Area</label>
                            <input defaultValue={carpet} type='text' onChange={(event) => setCarpet(event.target.value)} className="form-control" id="Dashboard_carpetarea" placeholder="Enter Carpet area in Sq.ft" required></input>
                        </div>
                        <div className="col-md-12 mt-3">
                            <label htmlFor="Dashboard_bedrooms" className="form-label">Bedrooms</label>
                            <div className="row d-flex">
                                <div className="col-md-1 form-check">
                                    <input checked={bedrooms==='1BHK'} onChange={handleDash} value='1BHK' className="form-check-input" type="radio" name="Dashboard_bedrooms" id="Dashboard_bedrooms" />
                                    <label className="form-check-label" htmlFor="1BHK">
                                        1BHK
                                    </label>
                                </div>
                                <div className="col-md-1 form-check">
                                    <input checked={bedrooms==='2BHK'} onChange={handleDash} value='2BHK' className="form-check-input" type="radio" name="Dashboard_bedrooms" id="Dashboard_bedrooms" />
                                    <label className="form-check-label" htmlFor="2BHK">
                                        2BHK
                                    </label>
                                </div>
                                <div className="col-md-1 form-check">
                                    <input checked={bedrooms==='3BHK'} onChange={handleDash} value='3BHK' className="form-check-input" type="radio" name="Dashboard_bedrooms" id="Dashboard_bedrooms" />
                                    <label className="form-check-label" htmlFor="3BHK">
                                        3BHK
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-3">
                            <label htmlFor="Dashboard_parking" className="form-label">Parking</label>
                            <div className="col-md-1 form-check">
                                <input checked={parking==='Yes'} className="form-check-input" value='Yes' onChange={handlePark} type="radio" name="Dashboard_parking" id="Dashboard_parking" />
                                <label className="form-check-label" htmlFor="Yes">
                                    Yes
                                </label>
                            </div>
                            <div className="col-md-1 form-check">
                                <input checked={parking==='No'} className="form-check-input" value='No' onChange={handlePark} type="radio" name="Dashboard_parking" id="Dashboard_parking" />
                                <label className="form-check-label" htmlFor="No">
                                    No
                                </label>
                            </div>
                        </div>
                        <div className="col-md-12 mt-3">
                            <label htmlFor="Dashboard_furnishing" className="form-label">Furnishing State</label>
                            <input defaultValue={furnishing} type='text' onChange={(event) => setFurnishing(event.target.value)} className="form-control" placeholder="Furnishing state" required></input>
                        </div>
                        <div className="col-md-12 mt-3">
                            <label htmlFor="Dashboard_direction" className="form-label">Direction facing</label>
                            <input defaultValue={direction} type='text' onChange={(event) => setDirection(event.target.value)} className="form-control" placeholder="Enter Direction" required></input>
                        </div>
                        <div className="col-md-12 mt-3">
                            <label htmlFor="Dashboard_propertyon" className="form-label">Property on</label>
                            <input defaultValue={property} type='text' onChange={(event) => setProperty(event.target.value)} className="form-control" placeholder="Enter floor number" required></input>
                        </div>
                        <div className="col-md-12 mt-3">
                            <label htmlFor="Dashboard_propertyon" className="form-label">Upload 3 images</label><br></br>
                            <input defaultValue={image} type='file' accept=".jpg, .jpeg, .png" onChange={(e) => handlefileupload(e)}></input>
                            {/* <input type='file' accept=".jpg, .jpeg, .png"></input>
                            <input type='file' className='mt-3' accept=".jpg, .jpeg, .png"></input> */}
                        </div>
                        {ver?(
                            <div class="col-12 mt-5 d-flex justify-content-center">
                            <button class="btn" type="submit"><Link to="/Dashboard" onClick={handleSubmit} className='Link'>Submit form</Link></button>
                        </div>
                        ):(
                            <div class="col-12 mt-5 d-flex justify-content-center">
                            <button class="btn" type="submit"><Link to="/Dashboard" onClick={handleUpdate} className='Link'>Update form</Link></button>
                        </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Input;