import { Button } from "@material-tailwind/react";
import banner from "../../../public/images/playbook.png"

const Banner = () => {
    return (
        <div className="md:flex justify-center items-center gap-28 bg-[#1313130D] max-w-7xl mx-auto mt-10 rounded-xl px-24 py-28">
            <div>
            <h1 className="font-serif font-bold text-6xl leading-tight mb-12">Books to freshen <br />
             up your bookshelf</h1>
             <Button
                size="sm"
                className="bg-primary rounded text-xl capitalize"
              >
                <span>View The List</span>
              </Button>
            </div>
            <div>
                <img src={banner} alt="banner-img" />
            </div>
            
        </div>
    );
};

export default Banner;