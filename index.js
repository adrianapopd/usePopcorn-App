import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App-v2";

// import StarRating from "./StarRating";
/*
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />;
      <p>This movies was rated {movieRating} starts</p>
    </div>
  );
}
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
    /> */}

    <App />
    {/* <StarRating size={24} color="red" className="test" defaultRating={3} /> */}

    {/* <Test /> */}
  </React.StrictMode>
);
