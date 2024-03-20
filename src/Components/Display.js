import Axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Display(props) {

    // const handleUpdate=()=>{

    // }

    const data = props.data;
    console.log(data,props.dum)
    const encodedData = encodeURIComponent(JSON.stringify(data))
    const handleDelete = () => {
        Axios.delete("https://apnahome-server.onrender.com/Route/deleteproperties/" + props.data._id)
            .then((res) => {
                if (res.status === 200) {
                    alert("House deleted Successfully");
                    window.location.reload();
                }
                else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }
    const [ver, setver] = useState();
    useEffect(() => {
        if (props.guru) {
            setver(true);
        }
        else {
            setver(false);
        }
    }, [props])
    return (

        <div className="col-md-4">
            <div class="card" style={{ width: "25rem" }}>
                <img src={props.data.Image} class="card-img-top" alt="..." style={{ height: "18rem" }} />
                <div class="card-body">
                    <h5 className='card-title'>Address: - {props.data.Address}</h5>
                    <h5 className="card-title">Price: -{props.data.Price}</h5>
                    <h5 className="card-title">Square_build_up_area: -{props.data.Square_build_up_area} Sq.ft</h5>
                    <h5 className="card-title">Carpet Area: -{props.data.Carpet_area} Sq.ft</h5>
                    <h5 className="card-title">Bedrooms: -{props.data.Bedrooms}</h5>
                    <h5 className="card-title">Parking: -{props.data.Parking}</h5>
                    <h5 className="card-title">Furnishing_State: -{props.data.Furnishing_State}</h5>
                    <h5 className="card-title">Direction_facing: -{props.data.Direction_facing}</h5>
                    <h5 className="card-title">Property_on: -{props.data.Property_on}</h5>

                    {ver ? (null) : (<>
                        <button className="btn btn-dark text-center"><Link className='text-decoration-none text-light' to={'/edit/' + encodedData}>Update</Link></button>
                        <button onClick={handleDelete} className="btn btn-dark text-center mx-3">Delete</button>
                    </>)}

                </div>
            </div>
        </div>

    )
}

export default Display;