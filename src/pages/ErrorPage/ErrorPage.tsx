import { Link } from "react-router-dom";
import error from "@/assets/error.jpg";

const ErrorPage = () => {
  return (
    <div>
      <div className="w-1/2 mx-auto ">
        <img src={error} alt="" />
      </div>
      <div className="w-max mx-auto mb-12">
        <Link to="/">
          <button className="btn btn-info text-white">Back to Homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
