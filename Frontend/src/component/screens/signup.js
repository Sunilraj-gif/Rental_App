import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import M from 'materialize-css';

function Signup() {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = () => {
        fetch("/signUp", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstname, lastname, phonenumber, email, password
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: "#e57373 red lighten-2" });
                } else if (data.message) {
                    M.toast({ html: data.message, classes: "#a5d6a7 green lighten-3" });
                    navigate('/login');
                }
            });
    };

    return (
        <div className="mycart">
            <div className="card auth-cart">
                <h1>Home Rental</h1>
                <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                <input type="text" placeholder="Phone Number" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br /><br />
                <button className="btn" onClick={handleSignup}>SignUp</button>
                <br /><br />
                <hr />
                <p>Have an account? <Link className="link" to="/login">Log in</Link></p>
            </div>
        </div>
    );
}

export default Signup;
