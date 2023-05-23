import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <div id="error-page" className="flex justify-center">
        <img
          className="w-[500px]"
          src="https://i.ibb.co/HpvKJLC/replicate-prediction-dg3llh3oyfcqjp73o7jif2qjze.jpg"
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <button className="btn btn-primary">GO TO Home</button>
        </Link>
      </div>
    </div>
  );
}
