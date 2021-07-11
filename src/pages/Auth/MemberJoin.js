import React, { useState, useRef } from "react";
import {
  BrowserRouter as Router,
  useRouteMatch,
  withRouter,
  NavLink,
} from "react-router-dom";

//導入CSS
import "../../assets/css/AuthCSS/Auth/MemberJoin.css";
//導入form
import JoinForm1 from "../../components/auth/Join1";
import JoinForm2 from "../../components/auth/Join2";
//導入背景
import background from "../../assets/img/AuthBG/login-bg.png";

function MemberJoin(props) {
  let { path, url } = useRouteMatch();

  //下一步切換表單
  const [checked, setChecked] = useState(1);
  const changePage = () => {
    setChecked(2);
  };

  //focus(聚焦)用
  // ---------------------------------------------------------
  const inputAccountElement = useRef();

  //表單內的每個欄位
  // const [account, setAccount] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [repassword, setRepassword] = useState();
  const [fields, setFields] = useState({
    account: "",
    email: "",
    password: "",
    repassword: "",
  });

  //每個欄位的錯誤訊息
  const [fieldsErrors, setFieldsErrors] = useState({
    account: "",
    email: "",
    password: "",
    repassword: "",
  });

  //處理每個表單的變動
  const handleFieldChange = (e) => {
    const updateFields = {
      ...fields,
      [e.target.name]: e.target.value,
    };
    setFields(updateFields);
  };

  //表單有變動(ex.欄位輸入)
  const handleFormChange = (e) => {
    console.log("更動的欄位", e.target.name);

    //欄位的錯誤訊息清空
    const updateFieldErrors = {
      ...fieldsErrors,
      [e.target.name]: "",
    };

    setFieldsErrors(updateFieldErrors);
  };

  //表單內有不合法的輸入
  const handleFormInvalid = (e) => {
    //擋住跳出的訊息提示框
    e.preventDefault();

    //validationMessage屬性 是最新的HTML錯誤提示訊息API
    const updateFieldErrors = {
      ...fieldsErrors,
      [e.target.name]: e.target.validationMessage,
    };

    setFieldsErrors(updateFieldErrors);

    //當帳號不符合規定使用ref聚焦focus
    if (e.target.name === "account") inputAccountElement.current.focus();

    //當信箱不符合規定使用ref聚焦focus
    //當密碼不符合規定使用ref聚焦focus
    //當確認密碼不符合規定使用ref聚焦focus
  };

  const handleSubmit = (e) => {
    // props.history.push("auth/MemberJoin2");
    e.preventDefault();

    const data = new FormData(e.target);

    if (fields.repassword !== fields.password) {
      console.log("與密碼不相符");
      // handleFormInvalid();
    } else {
      console.log(data.get("account"));
      console.log(data.get("email"));
      console.log(data.get("password"));
      console.log(data.get("repassword"));

      console.log(fields.account);
      console.log(fields.email);
      console.log(fields.password);
      console.log(fields.repassword);
      //讀取到資料後寫傳送到後端並跳下一頁
    }
  };
  //------------------------------------------------------------

  //
  const JoinPage1 = (props) => {
    return (
      <form
        onSubmit={handleSubmit}
        onChange={handleFormChange}
        onInvalid={handleFormInvalid}
      >
        <div className="AmemberEnter">
          <div className="Aitem">
            <label className="AitemLabel">會員帳號</label>
            <div className="AitemContent">
              <input
                className="AitemInput"
                name="account"
                type="text"
                value={fields.account}
                onChange={handleFieldChange}
                required
                ref={inputAccountElement}
              />
              {fieldsErrors.account !== "" && (
                <div className="Acheck AcheckAccount">該帳號已創建</div>
              )}
            </div>
          </div>
          <div className="Aitem">
            <label className="AitemLabel">信箱</label>
            <div className="AitemContent">
              <input
                className="AitemInput"
                name="email"
                type="email"
                value={fields.email}
                onChange={handleFieldChange}
                required
              />
              {fieldsErrors.email !== "" && (
                <div className="Acheck AcheckAccount">該信箱已創建</div>
              )}
            </div>
          </div>
          <div className="Aitem">
            <label className="AitemLabel">密碼</label>
            <div className="AitemContent">
              <input
                className="AitemInput"
                name="password"
                type="password"
                value={fields.password}
                onChange={handleFieldChange}
                required
                minLength="3"
              />
              {fieldsErrors.password !== "" && (
                <div className="Acheck AcheckAccount">該密碼不符合長度限制</div>
              )}
            </div>
          </div>
          <div className="Aitem">
            <label className="AitemLabel">確認密碼</label>
            <div className="AitemContent">
              <input
                className="AitemInput"
                name="repassword"
                type="password"
                // value={fields.repassword}
                onChange={handleFieldChange}
                required
                title="OOOXXX"
              />
              {fields.repassword !== fields.password && (
                <div className="Acheck AcheckAccount">與密碼不相符</div>
              )}
            </div>
          </div>
          <button className="Abtn" type="submit" onClick={props.go}>
            下一步
          </button>
        </div>
      </form>
    );
  };
  //
  //
  //
  //
  //
  const JoinPage2 = () => {
    return (
      <form>
        <div className="ML2memberEnter">
          <div className="ML2item">
            <label className="ML2itemLabel" for="">
              姓名
            </label>
            <input className="ML2itemInput" type=" " />
          </div>
          <div className="ML2item">
            <label className="ML2itemLabel" for="">
              性別
            </label>
            <div className="ML2itemContent">
              <div className="ML2gender">
                <span>男</span>
                <input
                  className="ML2itemCheck"
                  type="radio"
                  id="men"
                  name="gender"
                />
                <span>女</span>
                <input
                  className="ML2itemCheck"
                  type="radio"
                  id="women"
                  name="gender"
                />
              </div>
            </div>
          </div>
          <div className="ML2item">
            <label className="ML2itemLabel" for="">
              出生日期
            </label>
            <div className="ML2itemContent">
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
              年
              <select className="ML2dateInput" name="" id="">
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
              月
              <select className="ML2dateInput" name="" id="">
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
              日
            </div>
          </div>
          <div className="ML2item">
            <label className="ML2itemLabel" for="">
              連絡電話
            </label>
            <input className="ML2itemInput" type=" " />
          </div>
          <div className="ML2item">
            <label className="ML2itemLabel" for="">
              地址
            </label>
            <input className="ML2itemInput" type=" " />
          </div>
          <button className="ML2btn">送出</button>
        </div>
      </form>
    );
  };

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
                        <NavLink to={`${url}`} activeClassName="Aactive">
                          加入會員
                        </NavLink>
                      </li>
                      <li className="AloginMember">
                        <NavLink
                          to="/auth/MemberLogin"
                          onClick={() => {
                            props.history.push("auth/MemberLogin");
                          }}
                        >
                          會員登入
                        </NavLink>
                      </li>
                    </ul>
                    {/* -----------------------form-------------------------- */}
                    {/* <JoinForm1 /> */}
                    {checked === 1 ? (
                      <JoinPage1 go={changePage} value={checked} />
                    ) : (
                      <JoinPage2 />
                    )}
                    {/* -----------------------form-------------------------- */}
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

  //
}

export default withRouter(MemberJoin);
