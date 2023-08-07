import { useState } from "react";
import validateForm from "./validation";
import style from "./Form.module.css";
import portadaSU from "../../img/wallpaperbetter.jpg";
import portadaSI from "../../img/PortadaSI.jpg";
import head from "../../img/head.png";
//import { useNavigate } from "react-router-dom";

export default function Form({ login, register }) {
  //const navigate = useNavigate();

  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
    setErrors(
      validateForm({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    login(userData);
  };

  const handleSubmitRegister = (event) => {
    event.preventDefault();
    register(userData);
    alert("Registration successful, thank you very much. You can log in now");
    setUserData({ email: "", password: "" });
    toggleForm();
  };

  if (isRegistering) {
    return (
      <div>
        <div className={style.grid}>
          <div className={style.head}>
            <img src={head} alt="" width={550} />
          </div>
          <div className={style.portada}>
            <img src={portadaSI} alt="" height={435} />
          </div>
          <div className={style.container}>
            <form className={style.form} onSubmit={handleSubmitLogin}>
              <div className={style.flex}>
                <div className={`${style.login} ${style.color}`}>Login</div>
                <label className={style.label}>email :</label>
                <input
                  name="email"
                  type="text"
                  className={style.input}
                  value={userData.email}
                  onChange={handleChange}
                />
                <span className={style.errors}>{errors.email}</span>
                <label className={style.label}>Password :</label>
                <input
                  name="password"
                  type="text"
                  className={style.input}
                  value={userData.password}
                  onChange={handleChange}
                />
                <span className={style.errors}>{errors.password}</span>
                <button className={style.btn} type="submit">
                  Submit
                </button>
                <p className={style.color}>Don't have account?</p>
                <button
                  type="button"
                  className={style.btnToggleSU}
                  onClick={toggleForm}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={style.grid}>
        <div className={style.head}>
          <img src={head} alt="" width={550} />
        </div>
        <div className={style.portada}>
          <img src={portadaSU} alt="" height={435} />
        </div>
        <div className={style.container}>
          <form className={style.formSignUp} onSubmit={handleSubmitRegister}>
            <div className={style.flex}>
              <div className={style.color}>
                <h2 className={style.signUp}>Welcom,</h2>
                <span>sign up to continue</span>
              </div>
              <label className={style.label}>email :</label>
              <input
                name="email"
                type="text"
                className={style.input}
                value={userData.email}
                onChange={handleChange}
              />
              <span className={style.errors}>{errors.email}</span>
              <label className={style.label}>Password :</label>
              <input
                name="password"
                type="text"
                className={style.input}
                value={userData.password}
                onChange={handleChange}
              />
              <span className={style.errors}>{errors.password}</span>
              <button className={style.btnSU} type="submit">
                Let's go ⮕
              </button>
              <p className={style.color}>Have an account?</p>
              <button
                type="button"
                className={style.btnToggle}
                onClick={toggleForm}
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
