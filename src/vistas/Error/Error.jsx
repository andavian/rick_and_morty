import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h1>404</h1>
      <p>
        Te has perdido en el multiverso, puedes regresar a nuestro hogar
        haciendo <Link to={"/home"}>click aquí</Link>
      </p>
    </div>
  );
}
