import Form from "../../components/Form/Form";
import style from "./landing.module.css";

const Landing = ({ login }) => {
  return (
    <div className={style.container}>
      <div className={style.tittle}></div>
      <Form login={login} />
    </div>
  );
};

export default Landing;
