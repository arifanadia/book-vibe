import { Spinner } from "@material-tailwind/react";

const CustomSpinner = () => {
    return (
        <div className="flex justify-center mt-12">
            <Spinner color="blue" className="h-16 w-16 text-gray-900/50" />
            
        </div>
    );
};

export default CustomSpinner;