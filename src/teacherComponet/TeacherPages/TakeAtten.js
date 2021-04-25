import React from 'react'

export default function TakeAtten() {
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
  const st={
    itemAlign:"center",
    margin: "auto"
  }
    return (
        <div className="container">
            <table className="table table-striped w-auto" style={st}>
              <thead>
                <tr className="table-info">
                  <th>ROLL</th>
                  <th>NAME</th>
                  <th>ATTENDANCE</th>
                </tr>
              </thead>
              <tbody>
                {students.map(s=><tr>
                  <th>{s.roll}</th>
                  <td>{s.name}</td>
                  <td><button>click to present</button></td>
                </tr>)}
              </tbody>
            </table>
        </div>
    )
}
