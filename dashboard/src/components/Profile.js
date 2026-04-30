import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("https://zerodha-clone-2ldn.onrender.com/profile", {
      withCredentials: true
    })
    .then(res => {
      console.log(res.data); // debug
      if (res.data.status) {
        setUser(res.data.user || res.data);
      }
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

 if (!user) return <h2 className="loading">Loading...</h2>;

return (
  <div className="profile-container ">
    <div className="profile-card">
      <h1>Profile</h1>

      <div className="profile-info">
        <p><span>Username:</span> {user.username}</p>
        <p><span>Email:</span> {user.email}</p>
        <p><span>User ID:</span> {user._id}</p>
        <p><span>Joined:</span> {new Date(user.createdAt).toLocaleString()}</p>
      </div>

    </div>
  </div>
);
}

export default Profile;