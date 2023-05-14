import React from "react";
import Table from "react-bootstrap/Table";

export default function Username() {
  const data = [
    {
      id: 1,
      name: "Hery",
      email: "Hery@gmail.com",
      password: "12345678",
    },
    {
      id: 2,
      name: "Jo",
      email: "Jo@gmail.com",
      password: "12345678",
    },
    {
      id: 3,
      name: "Robert",
      email: "Robert@gmail.com",
      password: "12345678",
    },
    {
      id: 4,
      name: "Tom",
      email: "Tom@gmail.com",
      password: "12345678",
    },
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
