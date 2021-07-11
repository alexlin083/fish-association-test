import React from "react";
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

// CSS style
import "../../assets/css/MemberCSS/MemberHistory.css";
import "../../assets/css/normalize.css";

//List Icon
import accountIcon from "../../assets/img/member/account.png";
import favoriteIcon from "../../assets/img/member/favorite.png";
import noteIcon from "../../assets/img/member/note.png";
import activeIcon from "../../assets/img/member/active.png";
import clipboardIcon from "../../assets/img/member/clipboard.png";
import dollarIcon from "../../assets/img/member/dollar.png";

//產品圖片
import fish from "../../assets/img/member/memberHistory/fish.jpeg";
import shrimp from "../../assets/img/member/memberHistory/shrimp.jpeg";
import squid from "../../assets/img/member/memberHistory/squid.jpeg";

function MemberHistory(props) {
  let { path, url } = useRouteMatch();

  return (
    <>
      <div className="MAactivity-wrapper">
        <nav></nav>
        <aside className="MAmemberAside">
          <div className="MAmemberPage">
            <div className="MAcontainerList">
              <div className="MAmemberCentreTitle">
                <h1 className="MACentreTitle">會員中心</h1>
              </div>
              <div className="MAmemberCentreList">
                <ul>
                  {/* <li className="MAactiveList"> */}
                  <li className="">
                    <NavLink
                      to={`MemberAccount`}
                      activeClassName="MAactiveList"
                      onClick={() => {
                        props.history.push("MemberAccount");
                      }}
                    >
                      <img src={accountIcon} alt="" />
                      我的檔案
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      to={`MemberFavoritesProducts`}
                      activeClassName="MAactiveList"
                      onClick={() => {
                        props.history.push("member/MemberFavoritesProducts");
                      }}
                    >
                      <img src={favoriteIcon} alt="" />
                      收藏清單
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      to={`MemberNotes`}
                      activeClassName="MAactiveList"
                      onClick={() => {
                        props.history.push("member/MemberNotes");
                      }}
                    >
                      <img src={noteIcon} alt="" /> 我的札記
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      to={`MemberVacation`}
                      activeClassName="MAactiveList"
                      onClick={() => {
                        props.history.push("member/MemberVacation");
                      }}
                    >
                      <img src={activeIcon} alt="" /> 我的活動
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      to={`MemberHistory`}
                      activeClassName="MAactiveList"
                      onClick={() => {
                        props.history.push("member/MemberHistory");
                      }}
                    >
                      <img src={clipboardIcon} alt="" />
                      歷史清單
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      to={`MemberCoupon`}
                      activeClassName="MAactiveList"
                      onClick={() => {
                        props.history.push("member/MemberCoupon");
                      }}
                    >
                      <img src={dollarIcon} alt="" />
                      優惠券專區
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="MAmemberCentreTitle MAList1240 MAtitle1024">
              <h1 className="MACentreTitle">會員中心</h1>
            </div>

            {/* --------container--------- */}
            <div className="MHmemberBoard">
              <div>
                <div className="MHmemberAcount">
                  <h2 className="MHhistoryTitle">歷史清單</h2>
                </div>
                <hr />
              </div>
              <div className="MHhistoryAll">
                {/* --一組商品區塊頭-- */}
                <div className="MHhistoryList">
                  <div className="MHitem">
                    <img src={fish} alt="" />
                    <div className="MHquantity">
                      <div className="MHlist">鯊魚</div>
                      <div className="MHnumber">X1</div>
                    </div>
                    <div className="MHdollar">$300</div>
                  </div>
                  <hr />
                  <div className="MHitem">
                    <img src={shrimp} alt="" />
                    <div className="MHquantity">
                      <div className="MHlist">蝦子</div>
                      <div className="MHnumber">X1</div>
                    </div>
                    <div className="MHdollar">$200</div>
                  </div>
                  <hr />
                  <div className="MHitem">
                    <img src={squid} alt="" />
                    <div className="MHquantity">
                      <div className="MHlist">小卷</div>
                      <div className="MHnumber">X1</div>
                    </div>
                    <div className="MHdollar">$100</div>
                  </div>
                  <hr />
                  <div className="MHtotal">
                    <div className="MHtotalPrice">$600</div>
                    <div className="MHdiscount">$420</div>
                    <div className="MHdiscountDate">By 2021/06/09 08:20:15</div>
                  </div>
                </div>
                {/* --一組商品區塊尾-- */}

                {/* --一組商品區塊頭-- */}
                <div className="MHhistoryList">
                  <div className="MHitem">
                    <img src={fish} alt="" />
                    <div className="MHquantity">
                      <div className="MHlist">鯊魚</div>
                      <div className="MHnumber">X1</div>
                    </div>
                    <div className="MHdollar">$300</div>
                  </div>
                  <hr />
                  <div className="MHitem">
                    <img src={shrimp} alt="" />
                    <div className="MHquantity">
                      <div className="MHlist">蝦子</div>
                      <div className="MHnumber">X1</div>
                    </div>
                    <div className="MHdollar">$200</div>
                  </div>
                  <hr />
                  <div className="MHitem">
                    <img src={squid} alt="" />
                    <div className="MHquantity">
                      <div className="MHlist">小卷</div>
                      <div className="MHnumber">X1</div>
                    </div>
                    <div className="MHdollar">$100</div>
                  </div>
                  <hr />
                  <div className="MHtotal">
                    <div className="MHtotalPrice">$600</div>
                    <div className="MHdiscount">$420</div>
                    <div className="MHdiscountDate">By 2021/06/09 08:20:15</div>
                  </div>
                </div>
                {/* --一組商品區塊尾-- */}
              </div>
            </div>
            {/* --------container--------- */}
          </div>
        </aside>
        <div className="MAmemberCentreList MAList1240">
          <ul>
            {/* <li className="MAactiveList"> */}
            <li className="">
              <NavLink
                to={`MemberAccount`}
                activeClassName="MAactiveList"
                onClick={() => {
                  props.history.push("MemberAccount");
                }}
              >
                <img src={accountIcon} alt="" />
                我的
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to={`MemberFavoritesProducts`}
                activeClassName="MAactiveList"
                onClick={() => {
                  props.history.push("member/MemberFavoritesProducts");
                }}
              >
                <img src={favoriteIcon} alt="" />
                收藏
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to={`MemberNotes`}
                activeClassName="MAactiveList"
                onClick={() => {
                  props.history.push("member/MemberNotes");
                }}
              >
                <img src={noteIcon} alt="" /> 札記
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to={`MemberVacation`}
                activeClassName="MAactiveList"
                onClick={() => {
                  props.history.push("member/MemberVacation");
                }}
              >
                <img src={activeIcon} alt="" /> 活動
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to={`MemberHistory`}
                activeClassName="MAactiveList"
                onClick={() => {
                  props.history.push("member/MemberHistory");
                }}
              >
                <img src={clipboardIcon} alt="" />
                歷史
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to={`MemberCoupon`}
                activeClassName="MAactiveList"
                onClick={() => {
                  props.history.push("member/MemberCoupon");
                }}
              >
                <img src={dollarIcon} alt="" />
                優惠券
              </NavLink>
            </li>
          </ul>
        </div>
        <footer></footer>
      </div>
    </>
  );
}

export default withRouter(MemberHistory);
