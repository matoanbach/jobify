import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
import { useDashboardContext } from "../pages/DashBoardLayout";

function LogoutContainer() {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();
  console.log(user)
  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        {user.avatar ? (
          <img src={user.avatar} alt="avatar" className="img" />
        ) : (
          <FaUserCircle />
        )}

        {user?.name}
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
