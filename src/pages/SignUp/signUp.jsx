import "../SignUp/signup.css";
import { NavBar } from "../../components/Navbar/Navbar";
const SignUpPage = () => {
  return (
    <div>
      <NavBar />
      <div className="login_container">
        <form>
          <h3 className="login_heading">Sign Up</h3>
          <label>Email</label>
          <input placeholder="xyz@gmail.com"></input>
          <div className="login_pass">
            <label>Password</label>
            <input type="password" placeholder="•••••••••"></input>
            <span className="pass_eye">
              {" "}
              <i class="fa-solid fa-eye-slash"></i>
            </span>
            <label>Confirm Password</label>
            <input type="password" placeholder="•••••••••"></input>
            <span className="pass_eye">
              {" "}
              <i class="fa-solid fa-eye-slash"></i>
            </span>
            <div className="form_btn">
              <button className="btn btn-login ">Sign Up</button>
              <a href="/login" className="signupBtn">
                Already have an account
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export { SignUpPage };
