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
	const [errors, setErrors] = useState("")
    const { closeModal } = useModal()
	// const [errors, setErrors] = ({})
    console.log("this is my user", user)
    const handleSubmit = async (e) => {
        e.preventDefault()
		const err = {}

		if(first_name.length > 15 || first_name.length < 2) err.first = "Please enter characters between 2 and 15"
		if(last_name.length > 15) err.last = "Please enter less than 15 characters"
		
		setErrors(err)
        if(Object.keys(err)?.length) return


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
				<div className='errors'>
					{errors.first}
				</div>
            <div className='signUp'>
					First Name 
					<input
					type="text"
					value={first_name}
					onChange={(e) => setfirst_name(e.target.value)}
					required
					/>
				</div >
				<div className='errors'>
					{errors.last}
				</div>
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