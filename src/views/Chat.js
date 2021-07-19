import "../css/Chat.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import tomImg from "../images/tom.jpg";
import taraImg from "../images/registerImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
function Chat() {
  const [message, setMessage] = useState("");

  const getMessageText = (event) => {
    setMessage(event.target.value);
  };

  let newMessage = "";

  const sendMessageBtn = () => {
    newMessage = (
      <article className="msg-container msg-self" id="msg-0">
        <div className="msg-box">
          <div className="flr">
            <div className="messages">
              <p className="msg" id="msg-1">
                {message}
              </p>
            </div>
            <span className="timestamp">
              <span className="username">Tara</span>&bull;
              <span className="posttime">Now</span>
            </span>
          </div>
          <img className="user-img" id="user-0" src={taraImg} />
        </div>
      </article>
    );
  };
  return (
    <div className="container">
      <nav className="mt-2">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <NavLink class="pageLink" exact to="/">
              Home
            </NavLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Articles
          </li>
        </ol>
      </nav>

      <section className="chatbox col-12 col-md-6">
        <section className="chat-window">
          <article className="msg-container msg-remote" id="msg-0">
            <div className="msg-box">
              <img className="user-img" id="user-0" src={tomImg} />
              <div className="flr">
                <div className="messages">
                  <p className="msg" id="msg-0">
                    Hello, how are you?
                  </p>
                </div>
                <span className="timestamp">
                  <span className="username">Tom</span>&bull;
                  <span className="posttime">3 minutes ago</span>
                </span>
              </div>
            </div>
          </article>
          <article className="msg-container msg-self" id="msg-0">
            <div className="msg-box">
              <div className="flr">
                <div className="messages">
                  <p className="msg" id="msg-1">
                    Hi, I'm great! What about you?
                  </p>
                </div>
                <span className="timestamp">
                  <span className="username">Tara</span>&bull;
                  <span className="posttime">2 minutes ago</span>
                </span>
              </div>
              <img className="user-img" id="user-0" src={taraImg} />
            </div>
          </article>
          <article className="msg-container msg-remote" id="msg-0">
            <div className="msg-box">
              <img className="user-img" id="user-0" src={tomImg} />
              <div className="flr">
                <div className="messages">
                  <p className="msg" id="msg-0">
                    There are good news about the project.
                  </p>
                </div>
                <span className="timestamp">
                  <span className="username">Tom</span>&bull;
                  <span className="posttime">1 minute ago</span>
                </span>
              </div>
            </div>
          </article>

          <article className="msg-container msg-self" id="msg-0">
            <div className="msg-box">
              <div className="flr">
                <div className="messages">
                  <p className="msg" id="msg-1">
                    Lorem ipsum
                  </p>
                </div>
                <span className="timestamp">
                  <span className="username">Name</span>&bull;
                  <span className="posttime">Now</span>
                </span>
              </div>
              <img className="user-img" id="user-0" src={taraImg} />
            </div>
          </article>
          {newMessage}
        </section>
        <form className="chat-input" onsubmit="return false;">
          <input
            onChange={getMessageText}
            value={message}
            type="text"
            autocomplete="on"
            placeholder="Type a message"
          />
          <button onClick={sendMessageBtn}>
            <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
              <FontAwesomeIcon icon={faCommentDots} />
              {/* <path
                fill="rgba(0,0,0,.38)"
                d="M17,12L12,17V14H8V10H12V7L17,12M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z"
              /> */}
            </svg>
          </button>
        </form>
      </section>
    </div>
  );
}
export default Chat;
