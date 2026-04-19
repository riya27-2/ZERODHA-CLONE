import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await axios.get(" https://zerodha-clone-tzkt.onrender.com/logout", {
          withCredentials: true
        });

        navigate("/"); 
      } catch (err) {
        console.log(err);
        navigate("/");
      }
    };

    logoutUser();
  }, []);

  return <h2>Logging out...</h2>;
}

export default Logout;