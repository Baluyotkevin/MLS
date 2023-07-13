import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";
import { useHistory } from "react-router-dom";

function LoginFormModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (!data) history.push('/profilePage')
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }
  };

  const autoLoginOne = e => {
    setEmail('demo@aa.io')
    setPassword('password')
    dispatch(login(email, password))
    .then(closeModal)
  }

  const autoLoginTwo = e => {
    setEmail('marnie@aa.io')
    setPassword('password')
    dispatch(login(email, password))
    .then(closeModal)
  }

  const autoLoginThree = e => {
    setEmail('kevinb@aa.io')
    setPassword('password')
    dispatch(login(email, password))
    .then(closeModal)
  }
  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li className='errors'key={idx}>{error}</li>
          ))}
        </ul>
        <label className='loginEmail'>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className='loginPass'>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log In</button>
        <button type="submit" onClick={autoLoginOne}>Log In As Demo</button>
        <button type="submit" onClick={autoLoginTwo}>Log In As Marnie</button>
        <button type="submit" onClick={autoLoginThree}>Log In As Kevin</button>
      </form>
    </>
  );
}

export default LoginFormModal;
