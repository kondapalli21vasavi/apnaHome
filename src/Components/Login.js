import { useEffect, useState } from "react";
import './loginstyles.css';
import { Link,useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Login(props) {
    const [arr,setArr]=useState([]);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [ver,setVer]=useState(false);
    const [err,setErr]=useState("")
    const navigate=useNavigate();
    useEffect(()=>{
        Axios.get("https://apnahome-server.onrender.com/Route/getUser")
        .then((res)=>{
            if(res.status===200){
                setArr(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err))
    },[])

    const handleSubmit=()=>{
        arr.map((val,index)=>{
            if(!ver){
                if(val.Email===email){
                    if(val.Password===password){
                        navigate('/main')
                        props.getId(val._id)
                        setVer(true);
                        setErr("")
                    }
                    else{
                        setErr("Invalid Credentials")
                    }
                }
                setErr("Invalid Credentials");
            }
        })
    }
    useEffect(()=>{
        props.getId("")
    },[])
    return (
        <>
            <div className="container-fluid" id="loginformbody">
                <div className="container" id="Loginform">
                    <form className="mx-auto" id="loginforms">
                        
                        <h4 className="text-center">Login</h4>
                        <div className="text-center text-danger">{err}</div>
                        <div className="mb-3 mt-5">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input onChange={(event)=>{setEmail(event.target.value)}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input onChange={(event)=>setPassword(event.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                            {/* <div id="forgort password" className="form-text mt-3"><a href="/">Forget Password?</a></div> */}
                            <div id="signup" className="form-text mt-3"><a href="/"><Link to={'/Login/Signup    '}>Sign up</Link></a></div>
                        </div>
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary mt-4" id="Loginbtn">Log in</button>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Login;