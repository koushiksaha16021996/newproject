import React from "react";
import "./Attendance.css";

const AttendanceSheet = () => {
  const students = [
    {
      roll: 1,
      name: "Subhasish Choudhury",
    },
    {
      roll: 2,
      name: "Debo Prasad",
    },

    {
      roll: 3,
      name: "Prasad mukherjee",
    },

    {
      roll: 4,
      name: "Md Azam",
    },

    {
      roll: 5,
      name: "Koushik Saha",
    },

    {
      roll: 6,
      name: "Indus Net",
    },

    {
      roll: 7,
      name: "Bumrah",
    },

    {
      roll: 8,
      name: "Virat kohli",
    },

    {
      roll: 9,
      name: "Sayan Choudhury",
    },

    {
      roll: 10,
      name: "Suman Choudhury",
    },

    {
      roll: 2,
      name: "Debo Prasad mukherjee",
    },
  ];

  const renderStudent = (student, index) => {
    return (
      <tr key={index}>
        <td>{student.roll}</td>
        <td>{student.name}</td>
      </tr>
    );
  };

  return (
    <div className="App">
      <h5 className="atten">Attendance Sheet</h5>
      <input type="date" className="date-present"/>
      <table className="tHeader">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{students.map(renderStudent)}</tbody>
      </table>
    </div>
  );
};

export default AttendanceSheet;
