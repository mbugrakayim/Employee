import alertify from "alertifyjs";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function ListEmployeeComponent() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    getAllEmploye();
  }, []);
  const getAllEmploye = () => {
    EmployeeService.getEmployees()
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmploye(employeeId)
      .then((res) => {
        alertify.success("Success");
        getAllEmploye();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">Employees List</h2>

      <Link to="/add-employee" className="btn btn-primary mb-2">
        Add Employee
      </Link>

      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <Link
                    className="btn btn-info"
                    to={`/update-employee/${employee.id}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEmployee(employee.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-info"
                    style={{ marginLeft: "10px" }}
                    to={`/view-employee/${employee.id}`}
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployeeComponent;
