import { useState } from "react";

function EmployeeForm({ addEmployee }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    department: "HR",
    salary: "",
    maritalStatus: false,
    photo: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData({
        ...formData,
        photo: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addEmployee({
      ...formData,
      id: Date.now(),
      salary: Number(formData.salary),
    });

    setFormData({
      name: "",
      age: "",
      address: "",
      department: "HR",
      salary: "",
      maritalStatus: false,
      photo: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />

      <input
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        required
      />

      <select
        name="department"
        value={formData.department}
        onChange={handleChange}
      >
        <option>HR</option>
        <option>Engineering</option>
        <option>Marketing</option>
        <option>Finance</option>
      </select>

      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={formData.salary}
        onChange={handleChange}
        required
      />

      <label>
        Married
        <input
          type="checkbox"
          name="maritalStatus"
          checked={formData.maritalStatus}
          onChange={handleChange}
        />
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
      />

      {formData.photo && (
        <img
          src={formData.photo}
          alt="preview"
          className="preview"
        />
      )}

      <button type="submit">
        Add Employee
      </button>
    </form>
  );
}

export default EmployeeForm;