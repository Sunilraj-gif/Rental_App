import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import M from 'materialize-css';
import { UserContext } from '../../App';

function Login() {
  const { state, dispatch } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("visibility");
  const navigate = useNavigate();

  const Onto = () => {
    fetch("/Login", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#e57373 red lighten-2" });
          return;
        } else {
          M.toast({ html: "Successfully Login", classes: "#a5d6a7 green lighten-3" });
          navigate("/");
        }
      });
  };

  const change = () => {
    if (type === "password") {
      setType("text");
      setIcon("visibility_off");
    } else {
      setType("password");
      setIcon("visibility");
    }
  };

  return (
    <div className="mycart">
      <div className="card auth-cart">
        <h1>Home Rental</h1>
        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className='pass'>
          <input type={type} placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <span onClick={change}><i className="material-icons" style={{ color: "#f44336", padding: "10px", cursor: "pointer" }}>{icon}</i></span>
        </div>
        <br /><br />
        <button onClick={Onto} className="btn login">Login</button>
        <br /><br />
        <hr />
        <p>Don't have an account? <Link className="link" to="/signUp">Sign up</Link></p>
      </div>
    </div>
  );
}

export default Login;
