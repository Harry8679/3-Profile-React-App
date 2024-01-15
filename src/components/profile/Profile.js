import React, { useState } from 'react';
import './Profile.scss';
import { profiles } from './profile-data';
import { FaTrashAlt } from 'react-icons/fa';

const Profile = () => {
  const [userProfile, setUserProfile] = useState(profiles);
  return (
    <section className="profile-sec">
        <div className="container">
            <h2>Profile App</h2>
            {userProfile.map(profile => {
                return (
                    <div className='profile' key={profile.id}>
                        <img src={profile.img} alt={profile.img} />
                        <div className="desc">
                            <h4>Name: {profile.name}</h4>
                            <p>Job: {profile.job}</p>
                        </div>
                        <FaTrashAlt />
                    </div>
                );
            })}
        </div>
    </section>
  )
}

export default Profile
