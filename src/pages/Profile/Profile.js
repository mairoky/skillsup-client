import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    // console.log(user);

    const [userName, setUserName] = useState(user?.displayName);
    const [userEmail, setUserEmail] = useState(user?.email);
    const [userPhoto, setUserPhoto] = useState(user?.photoURL);

    // Handle Edit Profile
    const handleEditProfile = (e) => {
        e.preventDefault();
        // console.log(userName, userEmail, userPhoto);
        handleProfileUpdate(userName, userPhoto);
        toast.success('Profile Updated!');
    }

    const handleNameChange = (e) => {
        setUserName(e.target.value);
    }
    const handlePhotoChange = (e) => {
        setUserPhoto(e.target.value);
    }

    // Update user profile
    const handleProfileUpdate = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(err => console.error(err));
    }

    return (
        <div className='my-4'>
            <div className="container">
                <div className="row">
                    <div className="col-10 m-auto">
                        <div className="card">
                            <form onSubmit={handleEditProfile}>
                                <div className="card-body">
                                    <div className="text-center">
                                        <h3>Edit Profile</h3>
                                    </div>
                                    <hr />
                                    <div className="form-group mt-2">
                                        <label htmlFor="name">Name</label>
                                        <input onChange={handleNameChange} defaultValue={userName} type="text" id="name" name="name" className="form-control" required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="photo">PhotoURL</label>
                                        <input onChange={handlePhotoChange} defaultValue={userPhoto} type="text" id="photo" name="photo" className="form-control" required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="email">Email</label>
                                        <input readOnly defaultValue={userEmail} type="email" id="email" name="email" className="form-control" required />
                                    </div>
                                    <button type='submit' className='d-block w-100 btn btn-danger mt-4'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;