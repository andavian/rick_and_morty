import { useState } from "react";
import validateForm from "./validation";
import style from "./Form.module.css";
import portada from "../../img/wallpaperbetter.jpg";
import head from "../../img/head.png";

export default function Form({ login, register }) {
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
  };

  if (isRegistering) {
    return (
      <div>
        <div className={style.grid}>
          <div className={style.head}>
            <img src={head} alt="" width={550} />
          </div>
          <div className={style.portada}>
            <img src={portada} alt="" height={407} />
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
                <button
                  type="button"
                  className={style.btn}
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
          <img src={portada} alt="" height={407} />
        </div>
        <div className={style.container}>
          <form className={style.form} onSubmit={handleSubmitRegister}>
            <div className={style.flex}>
              <div className={`${style.login} ${style.color}`}>
                <h2>Welcom,</h2>
                <p>sign up to continue</p>
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
              <button className={style.btn} type="submit">
                Let's go!
              </button>
              <button type="button" className={style.btn} onClick={toggleForm}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
