import '../css/login.css';
import React, {useRef} from 'react';

function Login({ parentCallback }) {
  const valueRef = useRef();
  const name_page = () => {
    if(valueRef.current.value==="one"){
        parentCallback("login")
    }else if(valueRef.current.value === "two"){
        parentCallback("trainer")
    }else{
        parentCallback("trainee")
        console.log("here");
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };
  return (
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
            </div>

            <form class="login100-form validate-form" onSubmit={onSubmit}>
              <span class="login100-form-title">
                Sign In
              </span>

              <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                <input class="input100" ref={valueRef} type="text" name="email" placeholder="Private Key"/>
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>              
              <div class="container-login100-form-btn">
                <button class="login100-form-btn" onClick={name_page}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;
