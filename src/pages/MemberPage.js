import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../../src/assets/css/MemberCSS/MemberAccount.css";
import "../../src/assets/css/normalize.css";

import MemberTitleList from "../components/member/MemberTitleList";
import RWDMemberTitle from "../components/member/RWDMemberTitle";
import MemberBoard from "../components/member/MemberBoard";
import RWDMemberList from "../components/member/RWDMemberList";

function MemberPage() {
  return (
    <>
      <div className="activity-wrapper">
        <aside className="memberAside">
          <div className="memberPage">
            <MemberTitleList />
            <RWDMemberTitle />
            <MemberBoard />
            <RWDMemberList />
          </div>
        </aside>
      </div>
    </>
  );
}

export default MemberPage;
