import React from "react";
import "../../assets/css/AuthCSS/Auth/AuthPageCSS.css";

function MemberLogin() {
  return (
    <>
      <form>
        <div class="memberEnter">
          <div class="item">
            <label class="itemLabel" for="">
              會員帳號
            </label>
            <div class="itemContent">
              <input class="itemInput" type=" " />
              <div class="check checkAccount">該帳號已創建</div>
            </div>
          </div>
          <div class="item">
            <label class="itemLabel" for="">
              密碼
            </label>
            <div class="itemContent">
              <input class="itemInput" type=" " />
              <div class="check checkAccount">密碼輸入錯誤</div>
            </div>
          </div>
          <div class="item itemVerification">
            <div class="itemContent">
              <div class="verification"></div>
              <div class="check checkAccount">圖形驗證錯誤</div>
            </div>
          </div>
          <button class="btn">下一步</button>
        </div>
      </form>
    </>
  );
}

export default MemberLogin;
