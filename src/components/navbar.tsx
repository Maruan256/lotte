// @ts-nocheck 
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
 import { EnvelopeIcon, EnvelopeOpenIcon, CameraIcon, BoltIcon } from "@heroicons/react/24/outline";
export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 items-end lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:justify-between">
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <a href="#" className="flex items-center">
          about
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <a href="#" className="flex items-center">
          lehre
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <a href="#" className="flex items-center">
          kulturjournalismus
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <a href="#" className="flex items-center">
          forschung
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <a href="#" className="flex items-center">
          tagungen
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <a href="#" className="flex items-center">
          vorträge
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <a href="#" className="flex items-center">
          kontakt
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <a href="#" className="flex items-center">
          publikationen
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <a href="#" className="flex items-center">
          aktuelles
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <a href="#" className="flex items-center">
          projekte
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <Navbar 
      blurred="false"
      color="black"
      className="sticky top-0 z-[60] h-max max-w-full rounded-none px-8 py-6 lg:px-8 lg:py-6 bg-white opacity-1 inset-0">
        <div className="flex items-center justify-between text-blue-gray-900">
          <IconButton
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-2.5 font-medium bg-white group"
            
          >
            <EnvelopeIcon className="size-6 bg-white text-black group-hover:hidden"/>
           <EnvelopeOpenIcon className="size-6 bg-white text-black hidden group-hover:block"/>
          </IconButton>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden">{navList}</div>
            
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
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
          <IconButton
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-2.5 font-medium bg-white group"
            
          >
            <CameraIcon className="size-6 bg-white text-black group-hover:hidden"/>
           <BoltIcon className="size-6 bg-white text-black hidden group-hover:block"/>
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
    </div>
  );
}