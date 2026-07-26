import { createContext } from "react";

export const EmployeeContext = createContext();

export const employeeData = [
  {
    id: 1,
    name: "John",
    department: "Development",
    salary: 65000
  },
  {
    id: 2,
    name: "Alice",
    department: "Testing",
    salary: 50000
  },
  {
    id: 3,
    name: "David",
    department: "HR",
    salary: 45000
  }
];