// Signup.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: ""
    });

    const [error, setError] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        form: ""
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setError({ ...error, [name]: "", form: "" });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let formValid = true;

        if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword || !formData.phoneNumber) {
            setError({
                username: !formData.username ? "Username is required" : "",
                email: !formData.email ? "Email is required" : "",
                password: !formData.password ? "Password is required" : "",
                confirmPassword: !formData.confirmPassword ? "Confirm Password is required" : "",
                phoneNumber: !formData.phoneNumber ? "Phone Number is required" : "",
                form: "All fields are required."
            });
            formValid = false;
        } else if (formData.password !== formData.confirmPassword) {
            setError({
                ...error,
                confirmPassword: "Passwords do not match",
                form: "Passwords do not match"
            });
            formValid = false;
        } else {
            setError({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
                phoneNumber: "",
                form: ""
            });
        }

        if (formValid) {
            console.log(formData);
            navigate("/login");
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {error.username && <p className="error">{error.username}</p>}

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {error.email && <p className="error">{error.email}</p>}

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {error.password && <p className="error">{error.password}</p>}

                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {error.confirmPassword && <p className="error">{error.confirmPassword}</p>}

                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        placeholder="Enter Phone Number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    {error.phoneNumber && <p className="error">{error.phoneNumber}</p>}

                    <button type="submit">Sign Up</button>
                    <p>If you already have an account, <Link to="/login">Login</Link></p>
                    {error.form && <p className="error">{error.form}</p>}
                </form>
            </div>
        </div>
    );
}

export default Signup;