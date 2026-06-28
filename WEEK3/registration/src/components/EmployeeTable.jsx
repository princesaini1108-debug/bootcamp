import EmployeeRow from "./EmployeeRow";

function EmployeeTable({
  employees,
  deleteEmployee,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Married</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <EmployeeRow
            key={employee.id}
            employee={employee}
            deleteEmployee={deleteEmployee}
          />
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;