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
import "../../assets/css/MemberCSS/MemberVacation.css";
import "../../assets/css/normalize.css";

//List Icon
import accountIcon from "../../assets/img/member/account.png";
import favoriteIcon from "../../assets/img/member/favorite.png";
import noteIcon from "../../assets/img/member/note.png";
import activeIcon from "../../assets/img/member/active.png";
import clipboardIcon from "../../assets/img/member/clipboard.png";
import dollarIcon from "../../assets/img/member/dollar.png";

//出遊圖片
import vacation from "../../assets/img/member/memberVacation/vacation.jpg";

function MemberVacation(props) {
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
                      to={`${url}`}
                      activeClassName="MAactiveList"
                      // onClick={() => {
                      //   props.history.push("member/MemberVacation");
                      // }}
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
            <div className="MVmemberBoard">
              <ul className="MVitemUl">
                <li className="MVactive MVleftBoardTitle">
                  <NavLink
                    to={`MemberVacation`}
                    activeClassName="MactiveList"
                    onClick={() => {
                      props.history.push("member/MemberVacation");
                    }}
                  >
                    活動報名
                  </NavLink>
                </li>
                <li className="MVrightBoardTitle">
                  <NavLink
                    to={`MemberVacationHistory`}
                    activeClassName="MactiveList"
                    onClick={() => {
                      props.history.push("member/MemberVacationHistory");
                    }}
                  >
                    歷史報名
                  </NavLink>
                </li>
              </ul>
              <div className="MVcommodityVacation">
                <div className="MVcommodityVacationList">
                  <img className="MVvacationPicture" src={vacation} alt="" />
                  <div className="MVinfotmation">
                    <div className="MVlistMargin MVlocation">
                      正濱漁港(海釣活動)
                    </div>
                    <div className="MVlistMargin MVvacationDate">
                      <div className="MVvacationTitle">日期:</div>
                      <div className="MVvacationTime">2021/06/15 06:00:00</div>
                    </div>
                    <div className="MVlistMargin MVvacationJoin">
                      <div className="MVjoinPeople">成人X2</div>
                      <div className="MVjoinPay">共$3000元</div>
                    </div>
                    <button className="MVbtn">刪除</button>
                  </div>
                </div>
                <hr />
                <div className="MVcommodityVacationList">
                  <img className="MVvacationPicture" src={vacation} alt="" />
                  <div className="MVinfotmation">
                    <div className="MVlistMargin MVlocation">
                      正濱漁港(海釣活動)
                    </div>
                    <div className="MVlistMargin MVvacationDate">
                      <div className="MVvacationTitle">日期:</div>
                      <div className="MVvacationTime">2021/06/15 06:00:00</div>
                    </div>
                    <div className="MVlistMargin MVvacationJoin">
                      <div className="MVjoinPeople">成人X2</div>
                      <div className="MVjoinPay">共$3000元</div>
                    </div>
                    <button className="MVbtn">刪除</button>
                  </div>
                </div>
                <hr />
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

export default withRouter(MemberVacation);
