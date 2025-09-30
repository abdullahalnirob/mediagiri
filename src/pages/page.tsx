import {
  Heart,
  MessageCircle,
  MoreHorizontal,
} from 'lucide-react';
import { UserCardType } from '@/types/UserCardType';

const UserCard = ({ users }: UserCardType) => {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {' '}
        {/* Increased gap */}
        {users.map(user => (
          <div
            key={user.id}
            className="gray-color rounded-md transition-all duration-300 overflow-hidden border border-gray-700/50 p-1" // Slightly larger border radius
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
              <div className="absolute top-3 right-3">
                <button className="p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors">
                  {' '}
                  {/* Increased padding */}
                  <MoreHorizontal size={18} className="text-white" />{' '}
                  {/* Increased icon size */}
                </button>
              </div>
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
                  {user.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 border-2 border-[#2a2d2b] rounded-full"></div>
                  )}
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
                  <p className="text-gray-400 text-sm">{user.role}</p>
                </div>
                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button className="flex-1 bg-[#3fda59] hover:bg-[#36c94f] text-black px-5 py-2 rounded-md font-medium text-sm transition-colors">
                    Connect
                  </button>
                  <button className="p-2 border border-gray-600 hover:border-gray-500 rounded-md transition-colors group/btn bg-[#171a18] hover:bg-[#202121]">
                    <MessageCircle
                      size={18}
                      className="text-gray-400 group-hover/btn:text-white"
                    />
                  </button>
                  <button className="p-2 border border-gray-600 hover:border-gray-500 rounded-md transition-colors group/btn bg-[#171a18] hover:bg-[#202121]">
                    <Heart
                      size={18}
                      className="text-gray-400 group-hover/btn:text-red-400"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
