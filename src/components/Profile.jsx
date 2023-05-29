import React from "react";

function Profile({ result }) {
  const { picture } = result;

  return (
    <div>
      <img src={picture.thumbnail} />
    </div>
  );
}

export default Profile;
