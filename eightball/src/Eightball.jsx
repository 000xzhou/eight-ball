import { useState } from "react";

const answers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];
function Eightball() {
  // track of the current color and message text
  const [color, setColor] = useState();
  const [msg, setMsg] = useState("Think of a Question");

  //  gen random
  let random = () => {
    return Math.floor(Math.random() * answers.length);
  };
  // chooses a random message when it is clicked on
  function handleClick() {
    let randomNum = random();
    setMsg(answers[randomNum].msg);
    setColor(answers[randomNum].color);
  }

  return (
    <button style={{ color: color }} onClick={handleClick}>
      {msg}
    </button>
  );
}

export default Eightball;
