
import banner from "../../../public/images/playbook.png"
import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="md:flex justify-center items-center gap-28 bg-[#1313130D] max-w-7xl mx-auto mt-10 rounded-xl px-24 py-28">
            <div>
            <h1 className="font-serif font-bold text-6xl leading-tight mb-12">Books to freshen <br />
             up your bookshelf</h1>
             <NavLink to={"/listed-books"}
                className="bg-primary rounded text-xl text-white px-7 py-3 font-bold"
              >
                View The List
              </NavLink>
            </div>
            <div>
                <img src={banner} alt="banner-img" />
            </div>
            
        </div>
    );
};

export default Banner;