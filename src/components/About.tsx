import { Heart, MessageCircle, MoreHorizontal } from 'lucide-react';
import React from 'react';

const About = () => {
  const user = {
    id: 10,
    name: 'William Anderson',
    role: 'Backend Engineer',
    cover: 'http://seraprogrammer-demo-ui.surge.sh/src/giphy.gif',
    profile:
      'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
    linkedin: '#',
    github: '#',
    isOnline: false,
  };
  return (
    <div id="about">
      <h1 className="text-white font-bold text-center text-5xl">
        Chating now with your friend
      </h1>
      <p className="my-5 text-center text-gray-400">
        It’s not just about words on a screen — it’s about feeling close, even
        when miles apart.
      </p>
      <div className="flex mt-10 justify-center">
        <p className="text-white text-xl bg-gradient-to-b from-sky-500 to-blue-600 px-3 py-2 rounded-md">
          Smart features
        </p>
      </div>
      <div className="flex justify-center">
        <img className="rotate-x-180 w-40" src="arrow.png" alt="" />
      </div>
      <div className="grid justify-center grid-cols-3 px-40 mb-10 gap-7">
        {/* layout one */}
        <div className="flex flex-col items-start justify-between">
          <div className="mx-auto">
            <img
              src="image2.jpg"
              className="rounded-full object-cover w-28 h-28"
              alt=""
            />
            <p className="text-white text-center my-1">Abdul Majid</p>
          </div>
          <div className="flex items-center px-6 py-3 rounded-md bg-gradient-to-b from-sky-500 to-blue-600 text-white space-x-3">
            <img src="image1.png" className="rounded-full w-10" alt="" />
            <p className="text-xl">Sabrina Amelia</p>
          </div>
          <div>
            <h1 className="text-3xl text-white bebas-neue-regular">Smart AI</h1>
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, saepe! Velit ea eaque incidunt vel quod consectetur
              perspiciatis recusandae numquam veniam neque, reprehenderit ipsum
              explicabo cupiditate blanditiis, nulla quis molestiae.
            </p>
          </div>
        </div>
        {/* layout two */}
        <div>
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1694344512985-a0d2f3a9f3d1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        {/* layout three */}
        <div className="flex flex-col items-end justify-between">
          <div className="flex items-center px-3 py-3 rounded-md bg-gradient-to-b from-sky-500 to-blue-600 text-white space-x-3">
            <img src="image3.png" className="rounded-full w-10" alt="" />
            <p className="text-xl">Angella Olivia</p>
          </div>
          <div>
            <h1 className="text-3xl text-white my-1 bebas-neue-regular">
              Profile
            </h1>
            <div>
              <div
                key={user.id}
                className="bg-gradient-to-b from-sky-500 to-blue-600 rounded-md transition-all duration-300 overflow-hidden border border-gray-700/50" // Slightly larger border radius
              >
                {/* Cover Image */}
                <div className="relative h-20 overflow-hidden">
                  {' '}
                  {/* Increased height */}
                  <img
                    src={user.cover || '/placeholder.svg'}
                    alt="Cover"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Profile Section */}
                <div className="px-6 pb-6">
                  {/* Profile Image */}
                  <div className="relative -mt-10">
                    {' '}
                    {/* Increased negative margin */}
                    <div className="relative inline-block">
                      <img
                        src={user.profile || '/placeholder.svg'}
                        alt={user.name}
                        className="w-24 h-24 rounded-full border-4 border-[#2a2d2b] shadow-md object-cover"
                      />
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="space-y-4">
                    {' '}
                    {/* Increased spacing */}
                    <div>
                      <h3 className="font-semibold text-white text-xl leading-tight">
                        {' '}
                        {/* Slightly bigger text */}
                        {user.name}
                      </h3>
                      <p className="text-gray-200 text-sm">{user.role}</p>
                    </div>
                    {/* Action Buttons */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
