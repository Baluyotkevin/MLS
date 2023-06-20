import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import { useHistory } from "react-router-dom";

import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [profile_img, setprofile_img] = useState("");
	const [first_name, setfirst_name] = useState("");
	const [last_name, setlast_name] = useState("");
	const [errors, setErrors] = useState([]);
	const [validationErrors, setValidationErrors] = useState("")
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const err = {}
		if(!email.includes('@')) err.email = "Please enter an email with @"
		if (!first_name.length) errors.first_name = 'First name is required'
		if (!last_name.length) errors.last_name = 'Last name is required'
		if (!profile_img.length) errors.img = "Please upload an image"
		console.log(validationErrors)
		setValidationErrors(err)
		if(Object.keys(err).length) return

		if (password === confirmPassword) {
			const formData = new FormData()
			console.log(username)
			formData.append("username", username)
			formData.append("email", email)
			formData.append("password", password)
			formData.append("profile_img", profile_img)
			formData.append("first_name", first_name)
			formData.append("last_name", last_name)

			const data = await dispatch(signUp(formData));
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};

	return (
		<>
			<h1>Sign Up</h1>
			<form 
			onSubmit={handleSubmit}
			encType='multipart/form-data'
			>
				{/* hello */}
				<ul>
					{errors.map((error, idx) => (
						<li className='errors' key={idx}>{error}</li>
					))}
				</ul>
				<div className='errors'>
					{validationErrors.img}
				</div>
				<div className='signUp'>
					Profile Picture
					<input
					className='signProf'
					id="image"
					type="file"
					accept="image/*"
					onChange={(e) => setprofile_img(e.target?.files[0])}
					/>
				</div>
				<div className='errors'>
					{validationErrors.email}
				</div>
				<div className='signUp'>
					Email
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				{validationErrors.user}
				<div className='signUp'>
					Username
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div >
				{validationErrors.first}
				<div className='signUp'>
					First Name 
					<input
					type="text"
					value={first_name}
					onChange={(e) => setfirst_name(e.target.value)}
					required
					/>
				</div >
				{validationErrors.last}
				<div className='signUp'>
					Last Name 
					<input
					type="text"
					value={last_name}
					onChange={(e) => setlast_name(e.target.value)}
					required
					/>
				</div >
				{validationErrors.password}
				<div className='signUp'>
					Password
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div >
				<div className='signUp'>
					Confirm Password
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</div >
				<button type="submit">Sign Up</button>
			</form>
		</>
	);
}

export default SignupFormModal;