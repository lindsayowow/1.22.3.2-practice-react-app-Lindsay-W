// Create a ProfileContainer functional component. 
// ○ Render multiple instances of ProfileCard with different data for each profile. 

import React from 'react';
import ProfileCard from './ProfileCard';


const ProfileContainer = () => {
    let CardData = [{
        "name": "Alex",
        "age": 25,
        "bio": "A software engineer who loves hiking."
    },
    {
        "name": "Taylor",
        "age": 30,
        "bio": "A designer passionate about photography."
    }];
    return (<div className="profile-container">
        {CardData.map(item => {
            return (
            <ProfileCard name={item.name} age={item.age} bio={item.bio} />
                );
        })}
    </div>
    );
};

export default ProfileContainer;