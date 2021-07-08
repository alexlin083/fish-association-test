import React from "react";
import "../../assets/css/MemberCSS/MemberAccount.css";
import "../../assets/css/normalize.css";
import accountIcon from "../../assets/img/member/account.png";
import favoriteIcon from "../../assets/img/member/favorite.png";
import noteIcon from "../../assets/img/member/note.png";
import activeIcon from "../../assets/img/member/active.png";
import clipboardIcon from "../../assets/img/member/clipboard.png";
import dollarIcon from "../../assets/img/member/dollar.png";

function MemberTitleList() {
  return (
    <>
      <div className="containerList">
        <div className="memberCentreTitle">
          <h1 className="CentreTitle">會員中心</h1>
        </div>
        <div className="memberCentreList">
          <ul>
            <li className="activeList">
              <a href="">
                <img src={accountIcon} alt="" />
                我的檔案
              </a>
            </li>
            <li className="">
              <a href="">
                <img src={favoriteIcon} alt="" />
                收藏清單
              </a>
            </li>
            <li className="">
              <a href="">
                <img src={noteIcon} alt="" /> 我的札記
              </a>
            </li>
            <li className="">
              <a href="">
                <img src={activeIcon} alt="" /> 我的活動
              </a>
            </li>
            <li className="">
              <a href="">
                <img src={clipboardIcon} alt="" />
                歷史清單
              </a>
            </li>
            <li className="">
              <a href="">
                <img src={dollarIcon} alt="" />
                優惠券專區
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MemberTitleList;
