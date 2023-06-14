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
	// const [imageLoading, setImageLoading] = useState(false);
	const [first_name, setfirst_name] = useState("");
	const [last_name, setlast_name] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	// const handlePicSubmit = async (e) => {

	// }

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			const formData = new FormData()
			console.log(username)
			formData.append("username", username)
			formData.append("email", email)
			formData.append("password", password)
			formData.append("profile_img", profile_img)
			formData.append("first_name", first_name)
			formData.append("last_name", last_name)
			// console.log("THI SI S MY FORM DATA", formData.values())
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
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<label>
					Profile Picture
					<input
					id="image"
					type="file"
					accept="image/*"
					onChange={(e) => setprofile_img(e.target.files[0])}
					/>
				</label>
				<label>
					Email
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<label>
					Username
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</label>
				<label>
					First Name 
					<input
					type="text"
					value={first_name}
					onChange={(e) => setfirst_name(e.target.value)}
					required
					/>
				</label>
				<label>
					Last Name 
					<input
					type="text"
					value={last_name}
					onChange={(e) => setlast_name(e.target.value)}
					required
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				<label>
					Confirm Password
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</label>
				<button type="submit">Sign Up</button>
			</form>
		</>
	);
}

export default SignupFormModal;