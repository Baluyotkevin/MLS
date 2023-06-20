import { useDispatch } from "react-redux";
import { useState } from "react";
import { useModal } from "../../context/Modal";
import { thunkEditUser } from "../../store/session";

const ProfileForm = ({user}) => {
    const dispatch = useDispatch();
	const [username, setUsername] = useState("");
    const [profile_img, setprofile_img] = useState("");
	const [first_name, setfirst_name] = useState("");
	const [last_name, setlast_name] = useState("");
    const { closeModal } = useModal()
	const [validationErrors, setValidationErrors] = useState("")
	const [errors, setErrors] = useState([]);

    console.log("this is my user", user)
    const handleSubmit = async (e) => {
        e.preventDefault()

		const err = {}
		if (!first_name.length) err.first_name = 'First name is required'
		if (!last_name.length) err.last_name = 'Last name is required'
		if (!username.length) err.username = 'Username is required'
		setValidationErrors(err)
		if(Object.keys(err).length) return

        const formData = new FormData()
		formData.append("username", username)
        formData.append("profile_img", profile_img)
		formData.append("first_name", first_name)
		formData.append("last_name", last_name)

        const data = await dispatch(thunkEditUser(formData, user))
        .then(closeModal)
		if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
    }

    return (
        <form
        onSubmit={handleSubmit}
		encType='multipart/form-data'
        >
            <h1>Edit Profile</h1>
            <ul>
					{/* {errors.map((error, idx) => (
						<li className='errors' key={idx}>{error}</li>
					))} */}
				</ul>
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
				{validationErrors.first_name}
            <div className='signUp'>
					First Name 
					<input
					type="text"
					value={first_name}
					onChange={(e) => setfirst_name(e.target.value)}
					required
					/>
				</div >
				{validationErrors.last_name}
				<div className='signUp'>
					Last Name 
					<input
					type="text"
					value={last_name}
					onChange={(e) => setlast_name(e.target.value)}
					required
					/>
				</div >
                <button type="submit">Submit</button>
        </form>
    )
} 

export default ProfileForm