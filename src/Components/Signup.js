// import { Component } from "react";
import './signupstyles.css';
import Axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const [nameVer, setNameVer] = useState(false);
    const [emailVer, setEmailVer] = useState(false);
    const [passwordVer, setPasswordVer] = useState(false);
    const [rePasswordVer, setRePasswordVer] = useState(false);


    const [validate, setValidate] = useState(false);
    const [validateErr, setValidateErr] = useState("")


    const [nameErr, setNameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [rePasswordErr, setRePasswordErr] = useState("");

    const [arrStudent, setArrStudent] = useState([]);
    const [arrInstructor, setArrInstructor] = useState([]);

    const [actErr, setActErr] = useState("");
    const [actVer, setActVer] = useState(true);

    const [ver, setVer] = useState(false);

    const navigate = useNavigate();

    const nameValidation = (event) => {
        setName(event.target.value);
        if (event.target.value.length < 5 || event.target.value.length > 12) {
            setNameErr("User name should be in between 5 to 12 characters");
            setNameVer(false);
        }
        else {
            setNameErr("");
            setNameVer(true);
        }
    }
    const emailValidation = (event) => {
        var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        setEmail(event.target.value);
        if (!event.target.value.match(reg)) {
            setEmailErr("Invalid Email Format");
            setEmailVer(false)
        }
        else {
            setEmailErr("")
            setEmailVer(true)
        }
    }
    const passwordValidation = (event) => {
        var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        setPassword(event.target.value)
        if (!event.target.value.match(reg)) {
            setPasswordErr("Weak Password");
            setPasswordVer(false)
        }
        else {
            setPasswordErr("");
            setPasswordVer(true)
        }
    }
    const rePasswordValidation = (event) => {
        if (event.target.value !== password) {
            setRePasswordErr("Password missmatch")
            setRePasswordVer(false)
        }
        else {
            setRePasswordErr("")
            setRePasswordVer(true)
        }
    }
    const hanleClick=()=>{
        if(nameVer && emailVer && passwordVer && rePasswordVer){
            const data={Name:name,Email:email,Password:password};
            Axios.post("https://apnahome-server.onrender.com/Route/createUser",data)
            .then((res)=>{
                if(res.status===200){
                    alert("Account Created Successfully");
                    navigate('/login');
                }
                else{
                    Promise.reject();
                }
            })
            .catch((err)=>alert(err))
        }
        else{
            setValidateErr("Fill the details properly");
        }
    }

    return (
        <div class="container-fluid">
            <form class="needs-validation mx-auto" novalidate id="signupform">
                <h4 class="text-center">Sign-up</h4>
                <div className='mx-auto text-danger'>{validateErr}</div>
                <div class="col-md-12 mt-3">
                    <label for="validationCustom01" class="form-label">Your Name</label>
                    <input onChange={nameValidation} type="text" class="form-control" id="validationCustom01" placeholder="Enter name" required />
                    <div className='mx-auto text-danger'>{nameErr}</div>
                </div>

                <div class="row g-3 align-items-center mt-3">
                    <div class="col-auto">
                        <label for="inputPassword6" class="col-form-label">Password</label>
                    </div>
                    <div class="col-auto">
                        <input onChange={passwordValidation} type="password" id="signupform-control" class="form-control" aria-describedby="passwordHelpInline" />
                    </div>
                    <div className='mx-auto text-danger'>{passwordErr}</div>
                </div>

                <div class="row g-3 align-items-center mt-3">
                    <div class="col-auto">
                        <label for="inputPassword6" class="col-form-label">Conform Password</label>
                    </div>
                    <div class="col-auto">
                        <input onChange={rePasswordValidation} type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                    </div>
                    <div className='mx-auto text-danger'>{rePasswordErr}</div>
                </div>

                <div class="row mb-3 mt-3">
                    <div class="col-auto">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                    </div>
                    <div class="col-auto">
                        <input onChange={emailValidation} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className='mx-auto text-danger'>{emailErr}</div>
                </div>

                <div class="col-12 mt-3">
                    <button onClick={hanleClick} class="btn btn-primary signupbtn-primary" type="submit"><Link to='/Login' className='Link'>Submit</Link></button>
                </div>
            </form>
        </div>
    )
}

export default Signup;