import React from "react";
import "../../assets/css/AuthCSS/Auth/MemberJoin2.css";

function Join2() {
  return (
    <>
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
    </>
  );
}

export default Join2;
