import React, { createContext, useContext } from "react";
import { JobContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useActionData, useLoaderData } from "react-router-dom";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/jobs");
    return {data};
  } catch (error) {
    return error;
  }
};

const AllJobsContext = createContext();

function AllJobs() {
  const { data } = useLoaderData();
  return (
    <AllJobsContext.Provider value={{ data }}>
      <SearchContainer/>
      <JobContainer />
    </AllJobsContext.Provider>
  );
}

export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJobs;
