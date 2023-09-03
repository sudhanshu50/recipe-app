
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import routes from "../../routes/routes.json";

const ErrorPage = () => {
  const [timer, setTimer] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    if (timer === 0) {
      navigate("/");
    }
  }, [timer, navigate]);

  return (
    <div style={{marginTop:"100px"}}>
      <h3 style={{color:"red"}}>Error: 404 Page not found</h3>
      <h4 style={{color:"#f1f1f1"}}>
        Please click the link <Link to="/">Home</Link> to redirect to
        home page
    </h4>
      <h5 style={{color:"#f1f1f1"}}>You will be redirected to Homepage in {timer} seconds</h5>
    </div>
  );
};

export default ErrorPage;