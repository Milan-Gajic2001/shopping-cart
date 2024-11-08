import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  let message;
  if (error.status === 404) {
    message = "Resource for page not found";
  }
  return (
    <div className="error-div">
      <div className="error">
        <h1>{message ? message : "Error occured"}</h1>
        <p className="error-text">{error.error.message}</p>
      </div>
    </div>
  );
}
