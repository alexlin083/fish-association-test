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
import "../../assets/css/MemberCSS/MemberAccount.css";
import "../../assets/css/normalize.css";

//List Icon
import accountIcon from "../../assets/img/member/account.png";
import favoriteIcon from "../../assets/img/member/favorite.png";
import noteIcon from "../../assets/img/member/note.png";
import activeIcon from "../../assets/img/member/active.png";
import clipboardIcon from "../../assets/img/member/clipboard.png";
import dollarIcon from "../../assets/img/member/dollar.png";

//導入圖片
import HeadPic from "../../assets/img/member/memberAccount/handsome.jpg";
import GoldenMember from "../../assets/img/member/memberAccount/goldenMember.png";

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
                    <NavLink to={`${url}`} activeClassName="MAactiveList">
                      <img src={accountIcon} alt="" />
                      我的檔案
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      to="MemberFavoritesProducts"
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
            <div className="MAmemberBoard">
              <div className="MAheadPicture MAheadPicture1240">
                <div className="MApictureCard">
                  <div className="MApicture">
                    <img className="MApictureGo" src={HeadPic} alt="" />
                  </div>
                  <label for="name">
                    <input type="file" id="name" />
                    選擇照片
                  </label>
                  <div></div>
                </div>
              </div>

              <div>
                <div className="MAmemberAcount">
                  <h2 className="MAacountTitle">我的檔案</h2>
                  <p className="MAacountSubhead">管理你的檔案以保護你的帳戶</p>
                </div>
                <hr />
              </div>
              <form action="">
                <div className="MAmemberAccountInformation">
                  <div className="MAaccountInformation">
                    <div className="MAaccount">
                      <div className="MAlistTitle">使用者帳號</div>
                      <div className="MAcontent">alexXXXX</div>
                      <div className="MAmember">一般會員</div>
                      <a className="MAchange MAsmallChange" href="#">
                        白金會員
                        <img src={GoldenMember} alt="" />
                      </a>
                    </div>
                    <div className="MAaccount">
                      <div className="MAlistTitle">密碼</div>
                      <div className="MAcontent">************</div>
                      <a className="MAchange" href="#">
                        變更
                      </a>
                    </div>
                    <div className="MAaccount">
                      <div className="MAlistTitle">姓名</div>
                      <div className="MAcontent">郭帥</div>
                      <a className="MAchange" href="#">
                        變更
                      </a>
                    </div>
                    <div className="MAaccount">
                      <div className="MAlistTitle">性別</div>
                      <div className="MAcontent">
                        <div className="MAgender">
                          男
                          <input
                            className="MAitemCheck"
                            type="radio"
                            id="men"
                            name="gender"
                          />
                          女
                          <input
                            className="MAitemCheck"
                            type="radio"
                            id="women"
                            name="gender"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="MAaccount">
                      <div className="MAlistTitle">信箱</div>
                      <div className="MAcontent">alexXXXX@gmail.com</div>
                      <a className="MAchange" href="#">
                        變更
                      </a>
                    </div>
                    <div className="MAaccount">
                      <div className="MAlistTitle">聯絡電話</div>
                      <div className="MAcontent">0912345678</div>
                      <a className="MAchange" href="#">
                        變更
                      </a>
                    </div>
                    <div className="MAaccount">
                      <div className="MAlistTitle">出生日期</div>
                      <div className="MAcontent">
                        年
                        <select className="MAdateInput" name="" id="">
                          <option value="">1990</option>
                          <option value="">1991</option>
                          <option value="">1992</option>
                          <option value="">1993</option>
                          <option value="">1994</option>
                          <option value="">1995</option>
                          <option value="">1996</option>
                          <option value="">1997</option>
                          <option value="">1998</option>
                          <option value="">1999</option>
                          <option value="">2000</option>
                        </select>
                        月
                        <select className="MAdateInput" name="" id="">
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                          <option value="">5</option>
                          <option value="">6</option>
                          <option value="">7</option>
                          <option value="">8</option>
                          <option value="">9</option>
                          <option value="">10</option>
                          <option value="">11</option>
                          <option value="">12</option>
                        </select>
                        日
                        <select className="MAdateInput" name="" id="">
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                          <option value="">5</option>
                          <option value="">6</option>
                          <option value="">7</option>
                          <option value="">8</option>
                          <option value="">9</option>
                          <option value="">10</option>
                          <option value="">11</option>
                          <option value="">12</option>
                          <option value="">13</option>
                          <option value="">14</option>
                          <option value="">15</option>
                          <option value="">16</option>
                          <option value="">17</option>
                          <option value="">18</option>
                          <option value="">19</option>
                          <option value="">20</option>
                          <option value="">21</option>
                          <option value="">22</option>
                          <option value="">23</option>
                          <option value="">24</option>
                          <option value="">25</option>
                          <option value="">26</option>
                          <option value="">27</option>
                          <option value="">28</option>
                          <option value="">29</option>
                          <option value="">30</option>
                          <option value="">31</option>
                        </select>
                      </div>
                    </div>
                    <div className="MAaccount">
                      <div className="MAlistTitle">地址</div>
                      <div className="MAcontent">
                        桃園縣中壢區中央大學資策會中心
                      </div>
                      <a className="MAchange" href="#">
                        變更
                      </a>
                    </div>
                    <div className="MAaccount">
                      <div className="MAlistTitle"></div>
                      <button className="MAbtn">儲存</button>
                    </div>
                  </div>
                  <div className="MAheadPicture MAheadPicture720">
                    <div className="MApictureCard">
                      <div className="MApicture">
                        <img className="MApictureGo" src={HeadPic} alt="" />
                      </div>
                      <label for="name">
                        <input type="file" id="name" />
                        選擇照片
                      </label>
                      <div></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </aside>
        <div className="MAmemberCentreList MAList1240">
          <ul>
            {/* <li className="MAactiveList"> */}
            <li className="">
              <NavLink to={`${url}`} activeClassName="MAactiveList">
                <img src={accountIcon} alt="" />
                我的
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="MemberFavoritesProducts"
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

export default withRouter(MemberAccount);
