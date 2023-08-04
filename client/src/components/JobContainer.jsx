import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAllJobsContext } from "../pages/AllJobs";
import PageBtnContainer from "./PageBtnContainer";
function JobContainer() {
  const { data } = useAllJobsContext();
  const { jobs, totalJobs, numOfPages } = data;

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display ...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} {jobs.length > 1 ? "jobs" : "job"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer/>}
    </Wrapper>
  );
}

export default JobContainer;
