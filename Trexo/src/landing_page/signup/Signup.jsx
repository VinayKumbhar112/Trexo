import React from "react";
import {Link} from "react-router-dom";
import signup from "../../assets/signup.png";
import indianflag from "../../assets/indianflag.png";
function Signup() {
  return (
    <>
      <div className="container">
        <div className="heading mt-5 text-center">
          <h2>Open a free demat and trading account online</h2>
        </div>
        <div className="para mt-5 text-center">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </div>
        <div
          className="row"
          style={{
            marginTop: "5.5rem",
            marginLeft: "6rem",
          }}
        >
          <div className="col-6 ">
            <img
              src={signup}
              alt="signup-img"
              style={{
                height: "400px",
              }}
            />
          </div>
          <div className="col-6 ">
            <div
              className="heading mt-5"
              style={{
                marginLeft: "3rem",
              }}
            >
              {" "}
              <h3>Signup Now</h3>
            </div>
            <div
              className="para mt-3 "
              style={{
                color: "grey",
                marginLeft: "3rem",
              }}
            >
              {" "}
              <p>Or track your existing application</p>
            </div>
            <div className="inputbox ">
              <div
                className="numberinput"
                style={{
                  display: "flex",
                  border: "2px solid grey",
                  alignItems: "center",
                  width: "380px",
                  height: "60px",
                  marginTop: "2rem",
                  marginLeft: "3rem",
                }}
              >
                <button
                  type="button"
                  className="btn btn-light"
                  style={{
                    borderRadius: "0",
                    height: "55px",
                    display: "flex",
                  }}
                >
                  <div>
                    {" "}
                    <img
                      src={indianflag}
                      alt=""
                      style={{
                        height: "30px",
                        marginRight: "1rem",
                        width: "40px",
                        marginTop: "0.3rem",
                      }}
                    />
                  </div>
                  <div>
                    <h4
                      style={{
                        marginTop: "0.4rem",
                        fontWeight: "lighter",
                      }}
                    >
                      +91
                    </h4>
                  </div>
                </button>
                <input
                  type="text"
                  name="ph-no"
                  id="mob-no"
                  placeholder="Enter Your Number"
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    padding: "8px",
                    fontSize: "20px",
                  }}
                />
              </div>
            </div>
            <div className="button">
             <Link to="/signupp">
              <button
                type="button"
                class="btn btn-primary btn-lg"
                style={{
                  marginLeft: "3rem",
                  marginTop: "2rem",
                  fontSize: "20px",
                  width: "300px",
                  borderRadius: "0",
                }}
              >
                Get OTP
              </button>
              </Link>
            </div>

            <div className="para mt-3 ">
              <p
                style={{
                  marginLeft: "3rem",
                  color: "grey",
                }}
              >
                By proceeding, you agree to the Zerodha terms & privacy policy{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
