import React from "react";
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse,
    
  } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import CustomSpinner from "../../components/CustomSpinner/CustomSpinner";

const Header = () => {
    
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={"/"} className={({ isActive, isPending }) =>
                      isActive
                        ? "border-2 px-6 py-3 rounded-lg border-primary text-primary"
                        : isPending
                        ? <CustomSpinner></CustomSpinner>
                        :"flex items-center"
                    }>
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={"/listed-books"} className={({ isActive, isPending }) =>
                      isActive
                        ? "border-2 px-6 py-3 rounded-lg border-primary text-primary"
                        : isPending
                        ? <CustomSpinner></CustomSpinner>
                        :"flex items-center"
                    }>
          Listed Books
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={"/pages-to-read"} className={({ isActive, isPending }) =>
                      isActive
                        ? "border-2 px-6 py-3 rounded-lg border-primary text-primary"
                        : isPending
                        ? <CustomSpinner></CustomSpinner>
                        :"flex items-center"
                    }>
          Pages to Read
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={"/blogs"} className={({ isActive, isPending }) =>
                      isActive
                        ? "border-2 px-6 py-3 rounded-lg border-primary text-primary"
                        : isPending
                        ? <CustomSpinner></CustomSpinner>
                        :"flex items-center"
                    }>
          Blogs
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={"/publish"} className={({ isActive, isPending }) =>
                      isActive
                        ? "border-2 px-6 py-3 rounded-lg border-primary text-primary"
                        : isPending
                        ? <CustomSpinner></CustomSpinner>
                        :"flex items-center"
                    }>
          Publish
        </NavLink>
      </Typography>
    </ul>
  );
 
  return (
    <div className=" ">
      <Navbar className="sticky top-0 z-10 h-max max-w-7xl mx-auto  rounded-none px-4 py-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 text-3xl font-bold"
          >
           Book Vibe
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                size="sm"
                className="hidden lg:inline-block bg-primary capitalize"
              >
                <span>Sign In</span>
              </Button>
              <Button
                size="sm"
                className="hidden lg:inline-block bg-secondary"
              >
                <span>Sign Up</span>
              </Button>  
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className=" bg-primary">
              <span>Sign In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="bg-secondary">
              <span>Sign Up</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
      
    </div>
  );













} 
export default Header;