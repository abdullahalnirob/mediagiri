import React from 'react';
import {
  FaComments,
  FaUsers,
  FaShieldAlt,
  FaBolt,
  FaCloud,
  FaSmile,
} from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <FaComments size={25} className="text-sky-400" />,
      title: 'Real-Time Communication',
      description:
        'Chat instantly with friends, teammates, or communities using our ultra-fast and reliable messaging system.',
    },
    {
      id: 2,
      icon: <FaUsers size={25} className="text-sky-400" />,
      title: 'Create & Join Communities',
      description:
        'Build your own server or group, or join others that match your interests — connect with people who share your passions.',
    },
    {
      id: 3,
      icon: <FaShieldAlt size={25} className="text-sky-400" />,
      title: 'Private & Secure',
      description:
        'Your conversations are protected with end-to-end encryption and privacy controls that put you in charge.',
    },
    {
      id: 4,
      icon: <FaBolt size={25} className="text-sky-400" />,
      title: 'Lightning-Fast Performance',
      description:
        'Enjoy seamless voice, video, and text experiences — optimized for speed, even on slower networks.',
    },
    {
      id: 5,
      icon: <FaCloud size={25} className="text-sky-400" />,
      title: 'Always Connected',
      description:
        'Stay synced across all devices — web, desktop, and mobile — with real-time updates and cloud storage.',
    },
    {
      id: 6,
      icon: <FaSmile size={25} className="text-sky-400" />,
      title: 'Express Yourself',
      description:
        'Use reactions, custom emojis, and profile personalization to make every interaction feel truly yours.',
    },
  ];

  return (
    <div id="benefits" className="py-20 px-6">
      <h1 className="text-white  text-xl md:text-5xl font-bold text-center mb-6">
        Why People Love Using Our App
      </h1>
      <p className="text-gray-400 text-sm md:text-md text-center max-w-3xl mx-auto mb-16">
        Built for communities, creators, and friends — our platform combines
        powerful communication tools with a fun and secure social experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 md:px-40 mx-auto">
        {benefits.map(benefit => (
          <div
            key={benefit.id}
            className="bg-gradient-to-tr from-sky-600 to-blue-800 backdrop-blur-md border border-white/10 hover:border-sky-500/40 p-8 rounded-2xl shadow-xl shadow-sky-600/20 transition-all duration-300"
          >
            <div className="flex items-center space-x-4 mb-5">
              <div className="bg-white p-5 rounded-full shadow-inner shadow-sky-500/20">
                {benefit.icon}
              </div>
              <h3 className="text-white bebas-neue-regular text-3xl">
                {benefit.title}
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
