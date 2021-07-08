import React from "react";
import "../../assets/css/MemberCSS/MemberAccount.css";
import "../../assets/css/normalize.css";

import accountIcon from "../../assets/img/member/account.png";
import favoriteIcon from "../../assets/img/member/favorite.png";
import noteIcon from "../../assets/img/member/note.png";
import activeIcon from "../../assets/img/member/active.png";
import clipboardIcon from "../../assets/img/member/clipboard.png";
import dollarIcon from "../../assets/img/member/dollar.png";

function RWDMemberList() {
  return (
    <>
      <div className="memberCentreList List1240">
        <ul>
          <li className="activeList">
            <a href="">
              <img src={accountIcon} alt="" />
              我的
            </a>
          </li>
          <li className="">
            <a href="">
              <img src={favoriteIcon} alt="" /> 收藏
            </a>
          </li>
          <li className="">
            <a href="">
              <img src={noteIcon} alt="" /> 札記
            </a>
          </li>
          <li className="">
            <a href="">
              <img src={activeIcon} alt="" /> 活動
            </a>
          </li>
          <li className="">
            <a href="">
              <img src={clipboardIcon} alt="" /> 歷史
            </a>
          </li>
          <li className="">
            <a href="">
              <img src={dollarIcon} alt="" /> 優惠券
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default RWDMemberList;
