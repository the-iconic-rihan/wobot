import React, { useState } from "react";
import "./styles/UserInfo.css";
import logo1 from "../../assests/wobot_logo_blue.svg";
import logo from "../../assests/download.jpeg";
const UserInfo = () => {
  let [changeComponent, setChangeComponent] = useState("started");
  const [selected, setSelected] = useState(null);
  const changeComponentPage = () => {
    setChangeComponent(changeComponent === "started" ? "next" : "started");
  };
  function handleClick(id) {
    setSelected(id);
  }

  return (
    <>
      <div className="main-container mt-1">
        {" "}
        <div className="logo">
          <img src={logo1} className="logo1" align="left" alt="logo" />
        </div>
        <div className="auth root">
          <div className="box-rotate-fixed">
            <div className="box-strip box-strip-middle"></div>
            <div className="box-strip box-strip-top-right"></div>
            <div className="box-strip box-strip-bottom-left"></div>
          </div>

          <div className="Auth-form-container ">
            <form className="Auth-form" onSubmit={changeComponentPage}>
              <img src={logo} className="Auth-form-logo d-block " alt="logo" />
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">
                  Its Delight to have you onboard
                </h3>

                <div className="text-center">
                  Help us to know you better.
                  <br />
                  (This is how we optimize Wobot as per your business needs)
                </div>
                <div className="form-group mt-4">
                  <label className="m-1">Company Name</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="e.g Company Inc."
                  />
                </div>
                <div className="form-group mt-4">
                  <label className="m-1">Industry</label>
                  <select
                    className="form-control mt-1 form-select form-select-l"
                    aria-label=".form-select-lg example"
                  >
                    <option value="select" placeholder="Select">
                      select
                    </option>
                    <option value="1" placeholder="Select">
                      Individual
                    </option>
                    <option value="2">Professional</option>
                    <option value="3">Student</option>
                  </select>
                </div>
                <div className="form-group mt-4">
                  <label className="m-1">Company Size</label>
                  <br />
                  <div className="d-flex">
                    <div
                      onClick={() => handleClick(1)}
                      style={{
                        backgroundColor: selected === 1 ? "blue" : "grey",
                      }}
                      className="badge  m-1"
                    >
                      1-20
                    </div>
                    <div
                      onClick={() => handleClick(2)}
                      style={{
                        backgroundColor: selected === 2 ? "blue" : "grey",
                      }}
                      className="badge  m-1"
                    >
                      21-50
                    </div>
                    <div
                      onClick={() => handleClick(3)}
                      style={{
                        backgroundColor: selected === 3 ? "blue" : "grey",
                      }}
                      className="badge  m-1"
                    >
                      51-200
                    </div>
                    <div
                      onClick={() => handleClick(4)}
                      style={{
                        backgroundColor: selected === 4 ? "blue" : "grey",
                      }}
                      className="badge  m-1"
                    >
                      201-500
                    </div>
                    <div
                      onClick={() => handleClick(5)}
                      style={{
                        backgroundColor: selected === 5 ? "blue" : "grey",
                      }}
                      className="badge  m-1"
                    >
                      500+
                    </div>
                  </div>
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary my-4 px-4">
                    Get Started
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <footer className="text-center footer">
          <h6>Terms of Use | Privacy policy</h6>
        </footer>
      </div>
    </>
  );
};

export default UserInfo;
