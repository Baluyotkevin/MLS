import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { useModal } from "../../context/Modal";
import { login, thunkEditUser } from "../../store/session";

const ProfileForm = ({user}) => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [profile_img, setprofile_img] = useState("");
	const [first_name, setfirst_name] = useState("");
	const [last_name, setlast_name] = useState("");
    const { closeModal } = useModal()
    console.log("this is my user", user)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("profile_img", profile_img)
		formData.append("first_name", first_name)
		formData.append("last_name", last_name)

        await dispatch(thunkEditUser(formData, user))
        .then(closeModal)
    }

    return (
        <form
        onSubmit={handleSubmit}
		encType='multipart/form-data'
        >
            <h1>Edit Profile</h1>
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
            <div className='signUp'>
					First Name 
					<input
					type="text"
					value={first_name}
					onChange={(e) => setfirst_name(e.target.value)}
					required
					/>
				</div >
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