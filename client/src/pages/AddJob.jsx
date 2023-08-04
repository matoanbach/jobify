import React from "react";
import {
  Form,
  redirect,
  useNavigation,
  useOutletContext,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { FormRow, FormRowSelect, FormBtn } from "../components";

import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/jobs", data);
    toast.success("job added");
    return redirect("all-jobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function AddJob() {
  const { user } = useOutletContext();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" />
          <FormRow type="text" name="company" />
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            defaultValue={user.location}
          />
          <FormRowSelect
            labelText="job status"
            name="jobStatus"
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            labelText="job type"
            name="jobType"
            defaultValue={JOB_TYPE.PENDING}
            list={Object.values(JOB_TYPE)}
          />
          <FormBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
}

export default AddJob;
