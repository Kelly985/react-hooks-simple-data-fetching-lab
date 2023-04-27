// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {dogImage && (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
