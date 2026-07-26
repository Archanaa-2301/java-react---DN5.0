import "./App.css";
import { EmployeeContext, employeeData } from "./EmployeeContext";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <EmployeeContext.Provider value={employeeData}>
      <div className="App">
        <h1>Employees App</h1>
        <EmployeeList />
      </div>
    </EmployeeContext.Provider>
  );
}

export default App;