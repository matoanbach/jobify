import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import Wrapper from "../assets/wrappers/StatsContainer";
import StatItem from "./StatItem";

function StatsContainer({ defaultStats }) {
  const { pending, interview, declined } = defaultStats;
  const stats = [
    {
      title: "Pending Applications",
      count: pending || 0,
      color: "#e9b949",
      bcg: "#fcefc7",
      icon: <FaSuitcaseRolling />,
    },
    {
      title: "Interviews Scheduled",
      count: interview || 0,
      color: "#647acb",
      bcg: "#e0e8f9",
      icon: <FaSuitcaseRolling />,
    },
    {
      title: "Job Declined",
      count: declined || 0,
      color: "#d66a6a",
      bcg: "#ffeeee",
      icon: <FaSuitcaseRolling />,
    },
  ];
  return (
    <Wrapper>
      {stats.map((stat, index) => {
        const { title, count, color, bcg, icon } = stat;
        return (
          <StatItem
            key={index}
            title={title}
            count={count}
            color={color}
            bcg={bcg}
            icon={icon}
          />
        );
      })}
    </Wrapper>
  );
}

export default StatsContainer;
