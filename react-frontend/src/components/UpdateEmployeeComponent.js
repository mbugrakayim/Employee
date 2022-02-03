import alertify from "alertifyjs";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function UpdateEmployeeComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const updateEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, emailId, id };
    EmployeeService.updateEmployee(employee, id)
      .then((res) => {
        console.log("Employee data update successfully", res.data);
        alertify.success("Employee data update successfully")
        navigate("/employees");
      })
      .catch((error) => {
        console.log("Wrong!", error);
      });
  };
  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmailId(res.data.emailId);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Edit Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">First Name:</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Email:</label>
                  <input
                    type="text"
                    placeholder="Email"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => updateEmployee(e)}
                >
                  Save
                </button>
                <Link to="/employees" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmployeeComponent;
