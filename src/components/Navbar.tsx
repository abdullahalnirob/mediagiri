import React from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <div className="h-16 px-5 flex items-center justify-end z-40 fixed top-0 left-0 right-0 shadow shadow-gray-700 w-full gray-color">
      <div className="flex items-center space-x-2 gap-2">
        <img
          className="w-10 h-10 object-cover rounded-full"
          src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"
          alt=""
        />
        <Button className="bg-red-500/50 text-red-500 hover:bg-red-500/30">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
