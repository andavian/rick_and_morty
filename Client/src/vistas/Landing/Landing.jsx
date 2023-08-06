import Form from "../../components/Form/Form";
import style from "./landing.module.css";

const Landing = ({ login, register }) => {
  return (
    <div className={style.container}>
      <div className={style.tittle}></div>
      <Form login={login} register={register} />
    </div>
  );
};

export default Landing;
