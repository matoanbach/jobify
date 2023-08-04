import React, { createContext, useContext } from "react";
import { JobContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useActionData, useLoaderData } from "react-router-dom";

export const loader = async ({ request }) => {
  const params = Object.fromEntries(new URL(request.url).searchParams);

  try {
    const { data } = await customFetch.get("/jobs", { params });
    return { data, searchValues: { ...params } };
  } catch (error) {
    return error;
  }
};

const AllJobsContext = createContext();

function AllJobs() {
  const { data, searchValues } = useLoaderData();

  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobContainer />
    </AllJobsContext.Provider>
  );
}

export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJobs;
