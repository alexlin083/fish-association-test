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
import "../../assets/css/MemberCSS/MemberFavoritesProducts.css";
import "../../assets/css/normalize.css";

//List Icon
import accountIcon from "../../assets/img/member/account.png";
import favoriteIcon from "../../assets/img/member/favorite.png";
import noteIcon from "../../assets/img/member/note.png";
import activeIcon from "../../assets/img/member/active.png";
import clipboardIcon from "../../assets/img/member/clipboard.png";
import dollarIcon from "../../assets/img/member/dollar.png";

//
import fish from "../../assets/img/member/memberProducts/fish.jpeg";

function MemberAccount(props) {
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
                      to={`${url}`}
                      activeClassName="MAactiveList"
                      //   onClick={() => {
                      //     props.history.push("member/MemberFavoriteNote");
                      //   }}
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
            <div className="MFPmemberBoard">
              <ul className="MFPitemUl">
                <li className="MFPactive MFPleftBoardTitle">
                  <NavLink
                    to={`MemberFavoritesProducts`}
                    activeClassName="MFPactiveList"
                    onClick={() => {
                      props.history.push("MemberFavoritesProducts");
                    }}
                  >
                    商品收藏
                  </NavLink>
                </li>
                <li className="MFPrightBoardTitle">
                  <NavLink
                    to={`MemberFavoriteNote`}
                    activeClassName="MFPactiveList"
                    onClick={() => {
                      props.history.push("MemberFavoriteNote");
                    }}
                  >
                    札記收藏
                  </NavLink>
                </li>
              </ul>
              <div className="MFPcommodityFavorites">
                <div>
                  <div className="MFPcommodityFavoritesList">
                    <div className="MFPcommodityFavoritesListDate">
                      2021/06/09
                    </div>
                    <img className="MFPcommodityPicture" src={fish} alt="" />
                    <a href="">鯊魚鯊魚鯊魚鯊魚鯊魚鯊魚鯊魚</a>
                    <button className="MFPbtn">刪除</button>
                  </div>
                  <hr />
                </div>
                <div>
                  <div className="MFPcommodityFavoritesList">
                    <div className="MFPcommodityFavoritesListDate">
                      2021/06/09
                    </div>
                    <img className="MFPcommodityPicture" src={fish} alt="" />
                    <a href="">鯊魚鯊魚鯊魚鯊魚鯊魚鯊魚鯊魚</a>
                    <button className="MFPbtn">刪除</button>
                  </div>
                  <hr />
                </div>
                <div>
                  <div className="MFPcommodityFavoritesList">
                    <div className="MFPcommodityFavoritesListDate">
                      2021/06/09
                    </div>
                    <img className="MFPcommodityPicture" src={fish} alt="" />
                    <a href="">鯊魚鯊魚鯊魚鯊魚鯊魚鯊魚鯊魚</a>
                    <button className="MFPbtn">刪除</button>
                  </div>
                  <hr />
                </div>
                <div>
                  <div className="MFPcommodityFavoritesList">
                    <div className="MFPcommodityFavoritesListDate">
                      2021/06/09
                    </div>
                    <img className="MFPcommodityPicture" src={fish} alt="" />
                    <a href="">鯊魚鯊魚鯊魚鯊魚鯊魚鯊魚鯊魚</a>
                    <button className="MFPbtn">刪除</button>
                  </div>
                  <hr />
                </div>
                <div>
                  <div className="MFPcommodityFavoritesList">
                    <div className="MFPcommodityFavoritesListDate">
                      2021/06/09
                    </div>
                    <img className="MFPcommodityPicture" src={fish} alt="" />
                    <a href="">鯊魚鯊魚鯊魚鯊魚鯊魚鯊魚鯊魚</a>
                    <button className="MFPbtn">刪除</button>
                  </div>
                  <hr />
                </div>
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
                to={`${url}`}
                activeClassName="MAactiveList"
                //   onClick={() => {
                //     props.history.push("member/MemberFavoriteNote");
                //   }}
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

export default withRouter(MemberAccount);
