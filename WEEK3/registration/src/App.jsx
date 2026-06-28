import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("");

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  let filteredEmployees =
    departmentFilter === "All"
      ? employees
      : employees.filter(
          (emp) => emp.department === departmentFilter
        );

  if (sortOrder === "asc") {
    filteredEmployees.sort((a, b) => a.salary - b.salary);
  } else if (sortOrder === "desc") {
    filteredEmployees.sort((a, b) => b.salary - a.salary);
  }

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      <EmployeeForm addEmployee={addEmployee} />

      <div className="controls">
        <select
          onChange={(e) =>
            setDepartmentFilter(e.target.value)
          }
        >
          <option value="All">All Departments</option>
          <option value="HR">HR</option>
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
        </select>

        <select
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort Salary</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <EmployeeTable
        employees={filteredEmployees}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
}

export default App;