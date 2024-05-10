import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [buttonText, setButtonText] = useState("Enable Dark Mode");

  const mode = () => {
    if (myStyle.color == 'black') {
      setMyStyle({
        color: "white",
        backgroundColor: "grey",
      });
      setButtonText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setButtonText("Enable Dark Mode");
    }
  };

  return (
    <>
      <div className="main" style={myStyle}>
        

        <div className="content">
          <h1 className="my-3 font-bold text-2xl">About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            minima inventore numquam facere labore pariatur autem fugit
            incidunt. Cumque eum tenetur nulla veritatis beatae voluptas ea
            deleniti non. Quod expedita commodi sunt consequatur non?
          </p>
        </div>

        <div>
          <button
            className="bg-gray-900 py-1 px-3 text-white rounded-md my-3"
            onClick={mode}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
