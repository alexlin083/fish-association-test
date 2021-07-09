import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../../src/assets/css/AuthCSS/Auth/AuthPageCSS.css";

import MemberJoin from "../components/auth/MemberJoin";
import MemberLogin from "../components/auth/MemberLogin";
import background from "../assets/img/AuthBG/login-bg.png";

function AuthPage() {
  return (
    <>
      <div className="activity-wrapper">
        <div className="container">
          <div>
            <aside
              className="memberAside"
              style={{ backgroundImage: `url(${background})` }}
            >
              <div className="headerTitle">
                <h1 className="bigTitle">加入會員</h1>
              </div>
              <div className="memberPage">
                <div className="memberContent">
                  <div className="loginItem">
                    <ul className="itemUl">
                      <li className="active joinMember">
                        <a href="">加入會員</a>
                      </li>
                      <li className="loginMember">
                        <a href="">會員登入</a>
                      </li>
                    </ul>
                    <MemberJoin />
                  </div>
                </div>
                <div className="animation">
                  <div className="bubbles" num="50" duration="5"></div>
                </div>
              </div>
            </aside>
          </div>
          <footer></footer>
         
        </div>
      </div>
    </>
  );
}

export default AuthPage;
