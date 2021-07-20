import "../css/Chat.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import emmaImg from "../images/tc2.jpg";
import taraImg from "../images/registerImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
function Chat() {
  const [inputMessage, setInputMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      text: "Hello, how are you?",
      username: "Emma",
      img: emmaImg,
      time: "5 minutes ago",
    },
    {
      text: "Hi, I'm great! What about you?",
      username: "Tara",
      img: taraImg,
      myMessage: true,
      time: "4 minutes ago",
    },
    {
      text: "There are good news about the project.",
      username: "Emma",
      img: emmaImg,
      time: "2 minutes ago",
    },
  ]);

  const onInputMessageChange = (event) => {
    setInputMessage(event.target.value);
  };

  const sendMessageBtn = () => {
    setMessages([
      ...messages,
      {
        text: inputMessage,
        username: "Tara",
        img: taraImg,
        myMessage: true,
        time: "now",
      },
    ]);
    setInputMessage("");
  };

  const showMessages = messages.map((message, index) => {
    const alignmentClassName = message.myMessage ? "msg-self" : "msg-remote";

    return (
      <article
        key={index}
        className={`msg-container ${alignmentClassName}`}
        id="msg-0"
      >
        <div className="msg-box">
          <img
            className="user-img"
            id="user-0"
            src={message.img}
            alt="avatar"
          />
          <div className="flr">
            <div className="messages">
              <p className="msg" id="msg-0">
                {message.text}
              </p>
            </div>
            <span className="timestamp">
              <span className="username">{message.username}</span>&bull;
              <span className="posttime">{message.time}</span>
            </span>
          </div>
        </div>
      </article>
    );
  });

  return (
    <div className="container">
      <nav className="mt-2">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink className="pageLink" exact to="/">
              Home
            </NavLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Articles
          </li>
        </ol>
      </nav>

      <section className="chatbox col-12 col-md-6">
        <section className="chat-window">{showMessages}</section>
        <form className="chat-input">
          <input
            onChange={onInputMessageChange}
            value={inputMessage}
            type="text"
            autocomplete="on"
            placeholder="Type a message"
          />
          <button type="button" onClick={sendMessageBtn}>
            <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
              <FontAwesomeIcon icon={faCommentDots} />
            </svg>
          </button>
        </form>
      </section>
    </div>
  );
}
export default Chat;
