import { Link, Navigate, useActionData, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import FormRow from "../components/FormRow";
import Logo from "../components/Logo";

export const action = async ({ request }) => {
  const formData = await request.formData();
  return formData;
};

function Login() {
  const formData = useActionData();
  const navigate = useNavigate();
  const loginDemoUser = () => {
    navigate("/dashboard");
  }
  return (
    <Wrapper>
      <form className="form">
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
          <Link to="/register" className="member-btn" >
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}

export default Login;
