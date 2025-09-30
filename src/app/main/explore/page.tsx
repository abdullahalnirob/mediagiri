import UserCard from '@/pages/page';
import React from 'react';

const Explore = () => {
  // Sample user data
  const users = [
    {
      id: 1,
      name: 'Abdullah Al Nirob',
      role: 'Full Stack Developer',
      cover: 'http://seraprogrammer-demo-ui.surge.sh/src/giphy.gif',
      profile:
        'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
      linkedin: '#',
      github: '#',
      isOnline: true,
    },
    {
      id: 2,
      name: 'John Doe',
      role: 'Frontend Engineer',
      cover: 'http://seraprogrammer-demo-ui.surge.sh/src/giphy.gif',
      profile:
        'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
      linkedin: '#',
      github: '#',
      isOnline: false,
    },
    {
      id: 3,
      name: 'Sarah Lee',
      role: 'Backend Engineer',
      cover: 'http://seraprogrammer-demo-ui.surge.sh/src/giphy.gif',
      profile:
        'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
      linkedin: '#',
      github: '#',
      isOnline: true,
    },
    {
      id: 4,
      name: 'Michael Smith',
      role: 'UI/UX Designer',
      cover: 'http://seraprogrammer-demo-ui.surge.sh/src/giphy.gif',
      profile:
        'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
      linkedin: '#',
      github: '#',
      isOnline: true,
    },
    {
      id: 5,
      name: 'Alice Johnson',
      role: 'Frontend Engineer',
      cover: 'http://seraprogrammer-demo-ui.surge.sh/src/giphy.gif',
      profile:
        'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
      linkedin: '#',
      github: '#',
      isOnline: false,
    },
    {
      id: 6,
      name: 'David Brown',
      role: 'Backend Engineer',
      cover: 'http://seraprogrammer-demo-ui.surge.sh/src/giphy.gif',
      profile:
        'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
      linkedin: '#',
      github: '#',
      isOnline: true,
    },
    {
      id: 7,
      name: 'Emma Wilson',
      role: 'UI/UX Designer',
      cover: 'http://seraprogrammer-demo-ui.surge.sh/src/giphy.gif',
      profile:
        'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
      linkedin: '#',
      github: '#',
      isOnline: true,
    },
    {
      id: 8,
      name: 'James Taylor',
      role: 'Full Stack Developer',
      cover: 'http://seraprogrammer-demo-ui.surge.sh/src/giphy.gif',
      profile:
        'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
      linkedin: '#',
      github: '#',
      isOnline: false,
    },
    {
      id: 9,
      name: 'Sophia Martinez',
      role: 'Frontend Engineer',
      cover: 'http://seraprogrammer-demo-ui.surge.sh/src/giphy.gif',
      profile:
        'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
      linkedin: '#',
      github: '#',
      isOnline: true,
    },
    {
      id: 10,
      name: 'William Anderson',
      role: 'Backend Engineer',
      cover: 'http://seraprogrammer-demo-ui.surge.sh/src/giphy.gif',
      profile:
        'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
      linkedin: '#',
      github: '#',
      isOnline: false,
    },
  ];
  return (
    <div>
      <div className="min-h-screen m-10">
        <UserCard users={users} />
      </div>
    </div>
  );
};

export default Explore;
