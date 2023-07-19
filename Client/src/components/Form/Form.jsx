import { useState } from "react";
import validateForm from "./validation";
import style from "./Form.module.css";
import portada from "../../img/wallpaperbetter.jpg";
import head from "../../img/head.png";

export default function Form({ login }) {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

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
          <form className={style.form} onSubmit={handleSubmit}>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
