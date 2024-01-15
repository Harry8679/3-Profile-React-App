import React, { useState } from 'react';
import './Profile.scss';
import { profiles } from './profile-data';
import { FaTrashAlt } from 'react-icons/fa';

const Profile = () => {
  const [userProfile, setUserProfile] = useState(profiles);
  return (
    <section className="profile-sec">
        <div className="container">
            <h2 className='--text-light'>Profile App</h2>
            {userProfile.map(profile => {
                return (
                    <div className='profile --card --flex-between' key={profile.id}>
                        <img src={profile.img} alt={profile.img} />
                        <div className="desc">
                            <h4 className='--text-light'>Name: {profile.name}</h4>
                            <p className='--text-light'>Job: {profile.job}</p>
                        </div>
                        <FaTrashAlt size={18} className='icon' />
                    </div>
                );
            })}
        </div>
    </section>
  )
}

export default Profile
