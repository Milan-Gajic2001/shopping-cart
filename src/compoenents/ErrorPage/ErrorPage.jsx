import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  let message;
  if (error.status === 404) {
    message = "Resource for page not found";
  }
  if (error.status === 500) {
    message = error.data.message;
  }
  return (
    <div className="error-div">
      <div className="error">
        <h1>{`Error status ${error.status}`}</h1>
        <p className="error-text">
          {message ? message : "Something went wrong!"}
        </p>
      </div>
    </div>
  );
}
