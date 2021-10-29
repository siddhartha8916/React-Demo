import React from 'react'
import MobileInput from "../UI/MobileInput";
import Logo from '../UI/Logo';
import PasswordInput from '../UI/PasswordInput';
import AppButton from '../UI/AppButton';


const formstyle = {
  maxWidth: "80%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "50px",
  marginBottom: "50px"

}

const loginstyle = {
  fontSize: "30px",
  fontWeight: "bold",
}

function Login() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-sm-12 border" style={{height:"100vh"}}>
          <div className="row">
            <span className="mt-5"><Logo /></span>
            <div className="form" style={formstyle}>
              <h3 style={loginstyle}>Login</h3>
              <p style={{ marginBottom: "50px", color: "#c7c7c7", fontSize: "18" }} >Don't have an account? <a href="" style={{ textDecoration: "none", color: "orange" }}>Register Here</a> </p>
              <MobileInput />
              <PasswordInput />
              <div className="row text-end" style={{ marginBottom: "80px" }}>
                <a href="" style={{ textDecoration: "none", color: "black" }}>Forgot Password?</a>
              </div>
              <div>
                <a href="" className="float-end"><AppButton text="Continue" /></a>
              </div>

            </div>
          </div>
          <p className="text-end" style={{marginTop:"80px"}}>By continuing, you agree with our <strong>Terms and Conditions</strong> and <strong>Privacy Policy</strong></p>
        </div>
        <div className="col-lg-6 col-sm-12">

        </div>
      </div>
    </div>
  )
}

export default Login
