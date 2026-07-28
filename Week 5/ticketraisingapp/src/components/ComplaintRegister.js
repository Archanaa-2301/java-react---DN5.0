import { useState } from "react";

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const referenceNumber = Math.floor(
      100000 + Math.random() * 900000
    );

    alert(
      `Complaint Registered Successfully!\nReference Number: ${referenceNumber}`
    );

    setEmployeeName("");
    setComplaint("");
  };

  return (
    <div>
      <h2>Ticket Raising App</h2>

      <form onSubmit={handleSubmit}>
        <label>Employee Name</label>
        <br />
        <input
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          required
        />

        <br />
        <br />

        <label>Complaint</label>
        <br />
        <textarea
          rows="5"
          cols="35"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          required
        ></textarea>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComplaintRegister;