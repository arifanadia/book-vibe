import { BiHome } from "react-icons/bi";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="">
            <h1>Oops!!!</h1>
            <p>Sorry, an unexpected error has occurred</p>
            <p>
                {
                    error.status === 404 && <div>
                        <h3>page not found</h3>
                        <Link to={"/"} className="flex items-center gap-3 bg-secondary px-6 py-4 rounded w-[212px] text-white"><BiHome />Go Back To Home</Link>

                    </div>

                }
            </p>
            

        </div>
    );
};

export default ErrorPage;