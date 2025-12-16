import React, { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <>
      <h1>useEffect Hook</h1>
      <h2>Random User Api</h2>

      {userData ? (
        <h3>Name: {userData.results[0].name.first}</h3>
      ) : (
        <h3>Loading...</h3>
      )}
    </> 
  );
};

export default App;
