import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function ViewEmployeeComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const { id } = useParams();

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
  return <div>
      <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">View Employee Details</h3>
          <div className="card-body">
              <div className="row">
                  <label>Employe First Name: {firstName} </label>
              </div>
              <hr/>
              <div className="row">
                  <label>Employe Last Name: {lastName} </label>
              </div>
              <hr/>
              <div className="row">
                  <label>Employe Email: {emailId} </label>
              </div>
              <hr/>
              <Link
                    className="btn btn-info"
                    style={{ marginLeft: "10px" }}
                    to="/employees"
                  >
                    Back
                  </Link>
          </div>
      </div>
  </div>;
}

export default ViewEmployeeComponent;
