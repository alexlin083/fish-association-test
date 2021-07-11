import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ActivityPage from "./pages/ActivityPage";

//Auth Page
import MemberJoin from "./pages/Auth/MemberJoin";
import MemberLogin from "./pages/Auth/MemberLogin";

//memberPage
import MemberAccount from "./pages/MemberPage/MemberAccount";
import MemberFavoriteNote from "./pages/MemberPage/MemberFavoriteNote";
import MemberFavoritesProducts from "./pages/MemberPage/MemberFavoritesProducts";
import MemberNotes from "./pages/MemberPage/MemberNotes";
import MemberVacation from "./pages/MemberPage/MemberVacation";
import MemberVacationHistory from "./pages/MemberPage/MemberVacationHistory";
import MemberHistory from "./pages/MemberPage/MemberHistory";
import MemberCoupon from "./pages/MemberPage/MemberCoupon";

function App() {
  return (
    <Router>
      <ul style={{ position: "absolute", zIndex: 5 }}>
        <li>
          <Link to="/">index</Link>
        </li>
        <li>
          <Link to="/activity">activity</Link>
        </li>
        <li>
          <Link to="/auth/MemberJoin">auth</Link>
        </li>
        <li>
          <Link to="/member/MemberAccount">member</Link>
        </li>
      </ul>
      <Route path="/" exact component={IndexPage} />
      <Route path="/activity" component={ActivityPage} />

      {/* //Auth */}
      <Route path="/auth/MemberJoin" component={MemberJoin} />
      <Route path="/auth/MemberLogin" component={MemberLogin} />

      {/* //member */}
      <Route path="/member/MemberAccount" component={MemberAccount} />
      <Route path="/member/MemberFavoriteNote" component={MemberFavoriteNote} />
      <Route
        path="/member/MemberFavoritesProducts"
        component={MemberFavoritesProducts}
      />
      <Route path="/member/MemberNotes" component={MemberNotes} />
      <Route path="/member/MemberVacation" component={MemberVacation} />
      <Route
        path="/member/MemberVacationHistory"
        component={MemberVacationHistory}
      />
      <Route path="/member/MemberHistory" component={MemberHistory} />
      <Route path="/member/MemberCoupon" component={MemberCoupon} />
    </Router>
  );
}

export default App;
