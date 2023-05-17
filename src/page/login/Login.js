import React, { useEffect } from "react";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import ButtonComponent from "../../components/ButtonComponent";
import { BsFillFilePersonFill } from "react-icons/bs";

export default function Login() {
  const navigate = useNavigate();
  const [showform, setForm] = useState(true);
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const OnLogin = () => {
    setEmail(email);
    setPassword(password);
  };
  const setLocalStorage = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        // background: 'red'
      }}
    >
      <div style={{ fontSize: "32px" }}>login page</div>
      <div style={{ fontSize: "20px" }}>email : {email}</div>
      <div style={{ fontSize: "20px" }}>password : {password}</div>
      {showform ? (
        <>
          <Form.Group
            className="mb-3 w-50"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 w-50"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>password</Form.Label>
            <Form.Control
              type="text"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <h style={{ fontSize: "50px" }}>ຈຳນວນຕົວເລກ {count}</h>
        </>
      ) : (
        ""
      )}
      <Button as="a" variant="primary">
        ປ່ຽນ ໂໜด
      </Button>
      &emsp;
      <Button as="a" variant="primary" onClick={() => setCount(count + 1)}>
        ບວກຕົວເລກ
      </Button>
      &emsp;
      <Button
        as="a"
        variant="primary"
        onClick={() =>
          Swal.fire("Good job!", "You clicked the button!", "success")
        }
      >
        Login
      </Button>
      &emsp;
      <Button as="a" variant="primary" onClick={() => navigate("/register")}>
        Register
      </Button>
      &emsp;
      <Button as="a" variant="primary" onClick={() => setLocalStorage()}>
        Save to localStorage
      </Button>
      &emsp;
      <Button as="a" variant="primary" onClick={() => localStorage.clear()}>
        Delete localStorage
      </Button>
      &emsp;
      <ButtonComponent
        title={"Register"}
        background={"Black"}
        width={150}
        height={30}
        onClick={() => navigate("/username")}
      />
      &emsp;
      <BsFillFilePersonFill size={50} />
      {localStorage.getItem("email")}
      {localStorage.getItem("password")}
      &emsp;
    </div>
  );
}
