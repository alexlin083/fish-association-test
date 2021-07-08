import React from "react";
import "../../assets/css/AuthCSS/Auth/AuthPageCSS.css";

function MemberJoin() {
  return (
    <>
      <form>
        <div className="memberEnter">
          <div className="item">
            <label className="itemLabel" for="">
              會員帳號
            </label>
            <div className="itemContent">
              <input className="itemInput" type=" " />
              <div className="check checkAccount">該帳號已創建</div>
            </div>
          </div>
          <div className="item">
            <label className="itemLabel" for="">
              信箱
            </label>
            <div className="itemContent">
              <input className="itemInput" type=" " />
              <div className="check checkAccount">該信箱已創建</div>
            </div>
          </div>
          <div className="item">
            <label className="itemLabel" for="">
              密碼
            </label>
            <div className="itemContent">
              <input className="itemInput" type=" " />
              <div className="check checkAccount">該密碼不符合長度限制</div>
            </div>
          </div>
          <div className="item">
            <label className="itemLabel" for="">
              確認密碼
            </label>
            <div className="itemContent">
              <input className="itemInput" type=" " />
              <div className="check checkAccount">與密碼不相符</div>
            </div>
          </div>
          <button className="btn" href="./MemberJoin2.js">
            下一步
          </button>
        </div>
      </form>
    </>
  );
}

export default MemberJoin;
