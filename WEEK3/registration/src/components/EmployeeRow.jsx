function EmployeeRow({
  employee,
  deleteEmployee,
}) {
  return (
    <tr>
      <td>
        {employee.photo && (
          <img
            src={employee.photo}
            alt={employee.name}
            width="50"
          />
        )}
      </td>

      <td>{employee.name}</td>
      <td>{employee.age}</td>
      <td>{employee.address}</td>
      <td>{employee.department}</td>
      <td>₹{employee.salary}</td>
      <td>
        {employee.maritalStatus
          ? "Married"
          : "Single"}
      </td>

      <td>
        <button
          className="delete-btn"
          onClick={() =>
            deleteEmployee(employee.id)
          }
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default EmployeeRow;