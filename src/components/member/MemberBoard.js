import React from "react";
import "../../assets/css/MemberCSS/MemberAccount.css";
import "../../assets/css/normalize.css";

import HeadPic from "../../assets/img/member/memberAccount/handsome.jpg";

function MemberBoard() {
  return (
    <>
      <div className="memberBoard">
        <div className="headPicture headPicture1240">
          <div className="pictureCard">
            <div className="picture">
              <img className="pictureGo" src={HeadPic} alt="" />
            </div>
            <label for="name">
              <input type="file" id="name" />
              選擇照片
            </label>
            <div></div>
          </div>
        </div>

        <div>
          <div className="memberAcount">
            <h2 className="acountTitle">我的檔案</h2>
            <p className="acountSubhead">管理你的檔案以保護你的帳戶</p>
          </div>
          <hr />
        </div>
        <form action="">
          <div className="memberAccountInformation">
            <div className="accountInformation">
              <div className="account">
                <div className="listTitle">使用者帳號</div>
                <div className="content">alexXXXX</div>
                <div className="member">一般會員</div>
                <a className="change smallChange" href="#">
                  白金會員
                  <img
                    src="../../assets/img/member/memberAccount/goldenMember.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="account">
                <div className="listTitle">密碼</div>
                <div className="content">************</div>
                <a className="change" href="#">
                  變更
                </a>
              </div>
              <div className="account">
                <div className="listTitle">姓名</div>
                <div className="content">郭帥</div>
                <a className="change" href="#">
                  變更
                </a>
              </div>
              <div className="account">
                <div className="listTitle">性別</div>
                <div className="content">
                  <div className="gender">
                    男
                    <input
                      className="itemCheck"
                      type="radio"
                      id="men"
                      name="gender"
                    />
                    女
                    <input
                      className="itemCheck"
                      type="radio"
                      id="women"
                      name="gender"
                    />
                  </div>
                </div>
              </div>
              <div className="account">
                <div className="listTitle">信箱</div>
                <div className="content">alexXXXX@gmail.com</div>
                <a className="change" href="#">
                  變更
                </a>
              </div>
              <div className="account">
                <div className="listTitle">聯絡電話</div>
                <div className="content">0912345678</div>
                <a className="change" href="#">
                  變更
                </a>
              </div>
              <div className="account">
                <div className="listTitle">出生日期</div>
                <div className="content">
                  年
                  <select className="dateInput" name="" id="">
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
                  <select className="dateInput" name="" id="">
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
                  <select className="dateInput" name="" id="">
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
              <div className="account">
                <div className="listTitle">地址</div>
                <div className="content">桃園縣中壢區中央大學資策會中心</div>
                <a className="change" href="#">
                  變更
                </a>
              </div>
              <div className="account">
                <div className="listTitle"></div>
                <button className="btn">儲存</button>
              </div>
            </div>
            <div className="headPicture headPicture720">
              <div className="pictureCard">
                <div className="picture">
                  <img className="pictureGo" src={HeadPic} alt="" />
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
    </>
  );
}

export default MemberBoard;
