// ○ Define a ProfileCard functional component that accepts props for name, age, and bio. 
// ○ Render the data dynamically using props. 

import React from 'react';

const ProfileCard = (props) => {
  return (
    <div className="profile-card">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default ProfileCard;