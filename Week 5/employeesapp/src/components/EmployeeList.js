import { useContext } from "react";
import { EmployeeContext } from "../EmployeeContext";
import EmployeeDetails from "./EmployeeDetails";

function EmployeeList() {
  const employees = useContext(EmployeeContext);

  return (
    <div>
      <h2>Employee List</h2>

      {employees.map((employee) => (
        <EmployeeDetails key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;