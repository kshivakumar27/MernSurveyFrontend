import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationArrow,
  faMailBulk,
  faMars,
  faPhone,
  faScrewdriver,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { PostSurvey } from "../api/api";
import UserContext from "./usercontext";

function Survey(props) {
  let [name, setname] = useState("");

  let user = useContext(UserContext);
  let [email, setEmail] = useState(user.userList[0].email);
  let [phone, setPhone] = useState("");
  let [gender, setgender] = useState("");
  let [dob, setdob] = useState("");
  let [place, setplace] = useState("");

  let history = useHistory();
  let userData = { name, email, phone, gender, dob, place };

  return (
    <>
      <div class="container mt-5">
        <div class="d-flex justify-content-center h-100">
          <div class="card bg-dark col-4">
            <div class="card-header bg-warning">
              <h3>
                <FontAwesomeIcon icon={faScrewdriver}></FontAwesomeIcon>Add
                Survey
              </h3>
            </div>
            <div class="card-body">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  await PostSurvey(userData); //posting the survey details
                  setEmail("");
                  setname("");
                  setPhone("");
                  setgender("");
                  setdob("");
                  setplace("");
                  history.push(`/home`); //after posting the survey details redirecting to the home page where we display all suurvey details
                }}
              >
                <div class="input-group form-group mt-1">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-warning">
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{ fontSize: "1.75em" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="User Name"
                    required
                    value={name}
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                  />
                </div>
                <div class="input-group form-group mt-1">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-warning">
                      <FontAwesomeIcon
                        icon={faMailBulk}
                        style={{ fontSize: "1.75em" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="email"
                    disabled="true"
                    value={email}
                  />
                </div>
                <div class="input-group form-group mt-1">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-warning">
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{ fontSize: "1.75em" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <input
                    type="tel"
                    class="form-control"
                    placeholder="99xx99xx99"
                    pattern="[0-9]{10}"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <div class="input-group form-group mt-1">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-warning">
                      <FontAwesomeIcon
                        icon={faMars}
                        style={{ fontSize: "1.75em" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="gender"
                    required
                    value={gender}
                    onChange={(e) => {
                      setgender(e.target.value);
                    }}
                  />
                </div>
                <div class="input-group form-group mt-1">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-warning">
                      <FontAwesomeIcon
                        icon={faClock}
                        style={{ fontSize: "1.75em" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="dob"
                    required
                    value={dob}
                    onChange={(e) => {
                      setdob(e.target.value);
                    }}
                  />
                </div>
                <div class="input-group form-group mt-1">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-warning">
                      <FontAwesomeIcon
                        icon={faLocationArrow}
                        style={{ fontSize: "1.75em" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="place(city)"
                    required
                    value={place}
                    onChange={(e) => {
                      setplace(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Add Survey"
                    class="btn float-end mt-1 btn-warning"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Survey;
