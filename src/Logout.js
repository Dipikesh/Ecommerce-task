import React from "react";

function Logout(props) {
  const handleLogout = () => {
    props.onLogout();
  };

  return (
    <div>
      <h1>Logout</h1>
      <p>You have been logged out.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
