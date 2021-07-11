import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
  useRouteMatch,
  withRouter,
  NavLink,
} from "react-router-dom";
import "../../assets/css/AuthCSS/Auth/MemberLogin.css";
import background from "../../assets/img/AuthBG/login-bg.png";

function MemberLogin(props) {
  let { path, url } = useRouteMatch();
  // const [account, setAccount] = useState;
  // const [password, setPassword] = useState;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.target);

  //   console.log(data.get(""));
  //   console.log(data.get(""));
  //   console.log(data.get(""));
  // };

  return (
    <>
      <div className="Aactivity-wrapper">
        <div className="Acontainer">
          <nav></nav>
          <div>
            <aside
              className="AmemberAside"
              style={{ backgroundImage: `url(${background})` }}
            >
              <div className="AheaderTitle">
                <h1 className="AbigTitle">加入會員</h1>
              </div>
              <div className="AmemberPage">
                <div className="AmemberContent">
                  <div className="AloginItem">
                    <ul className="AitemUl">
                      <li className="AjoinMember">
                        <NavLink
                          to="MemberJoin"
                          onClick={() => {
                            props.history.push("MemberJoin");
                          }}
                        >
                          加入會員
                        </NavLink>
                      </li>
                      <li className="Aactive AloginMember">
                        <NavLink
                          to={`${url}`}
                          activeClassName="MLactive"
                          onClick={() => {
                            props.history.push("auth/MemberLogin");
                          }}
                        >
                          會員登入
                        </NavLink>
                      </li>
                    </ul>
                    <form>
                      <div className="MLmemberEnter">
                        <div className="MLitem">
                          <label className="MLitemLabel" for="">
                            會員帳號
                          </label>
                          <div className="MLitemContent">
                            <input className="MLitemInput" type="text" />
                            <div className="MLcheck MLcheckAccount">
                              該帳號已創建
                            </div>
                          </div>
                        </div>
                        <div className="MLitem">
                          <label className="MLitemLabel" for="">
                            密碼
                          </label>
                          <div className="MLtemContent">
                            <input className="MLitemInput" type=" " />
                            <div className="MLcheck MLcheckAccount">
                              密碼輸入錯誤
                            </div>
                          </div>
                        </div>
                        <div className="MLitem MLitemVerification">
                          <div className="MLitemContent">
                            <div className="MLverification"></div>
                            <div className="MLcheck MLcheckAccount">
                              圖形驗證錯誤
                            </div>
                          </div>
                        </div>
                        <button className="MLbtn">登入</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="Aanimation">
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

export default withRouter(MemberLogin);
