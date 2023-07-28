import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
import { useDashboardContext } from "../pages/DashBoardLayout";

function LogoutContainer() {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();
  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        <FaUserCircle />
        zippy
        <FaCaretDown />
      </button>
      <div
        className={showLogout ? "dropdown show-dropdown" : "dropdown"}
        onClick={() => logoutUser()}
      >
        <button type="button" className="dropdown-btn">
          Logout
        </button>
      </div>
    </Wrapper>
  );
}

export default LogoutContainer;