import {
  Form,
  Link,
  Navigate,
  redirect,
  useActionData,
  useNavigate,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import FormRow from "../components/FormRow";
import Logo from "../components/Logo";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/login", data);
    toast.success("Successful Login");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Login() {
  const formData = useActionData();
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const demoUser = {
      email: "test@test.com",
      password: "secret123",
    };
    try {
      await customFetch.post("/auth/login", demoUser);
      toast.success("Demo User on board");
      return navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };
  return (
    <Wrapper>
      <Form method="post" action="" className="form">
        <Logo />
        <h4>login</h4>
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
          Explore the app
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}

export default Login;
