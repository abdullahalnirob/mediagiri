'use client';

import type React from 'react';

import { useState } from 'react';
import {
  MessageSquare,
  Search,
  CreditCard,
  HelpCircle,
  Settings,
  Users,
  Lightbulb,
  Heart,
  Archive,
  MoreHorizontal,
  Sun,
  Moon,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  shortcut?: string;
  badge?: string | number;
  isActive?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({
  icon,
  label,
  shortcut,
  badge,
  isActive,
  onClick,
}: SidebarItemProps) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-colors group ${
      isActive
        ? 'bg-green-600 text-white'
        : 'text-gray-300 hover:bg-black hover:text-white'
    }`}
  >
    <div className="flex items-center gap-3">
      <div
        className={`${
          isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
        }`}
      >
        {icon}
      </div>
      <span>{label}</span>
    </div>
    <div className="flex items-center gap-2">
      {badge && (
        <Badge
          variant="secondary"
          className={`text-xs px-1.5 py-0.5 ${
            isActive ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
          }`}
        >
          {badge}
        </Badge>
      )}
      {shortcut && (
        <span
          className={`text-xs px-1.5 py-0.5 rounded ${
            isActive ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-400'
          }`}
        >
          {shortcut}
        </span>
      )}
    </div>
  </button>
);

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const mainMenuItems = [
    {
      icon: <MessageSquare size={18} className="text-blue-500" />,
      label: 'Chats',
      isActive: true,
    },
    {
      icon: <Search size={18} className="text-green-500" />,
      label: 'Search',
      shortcut: '⌘F',
    },
    {
      icon: <CreditCard size={18} className="text-purple-500" />,
      label: 'Manage subscription',
    },
    {
      icon: <HelpCircle size={18} className="text-orange-500" />,
      label: 'Updates & FAQ',
    },
    {
      icon: <Settings size={18} className="text-red-500" />,
      label: 'Settings',
    },
  ];

  const secondaryMenuItems = [
    {
      icon: <Users size={18} className="text-green-500" />,
      label: 'Welcome',
      badge: '10',
    },
    {
      icon: <Lightbulb size={18} className="text-green-500" />,
      label: 'LLR Production',
    },
    {
      icon: <Heart size={18} className="text-green-500" />,
      label: 'Favorites',
    },
    {
      icon: <Archive size={18} className="text-blue-500" />,
      label: 'Archived',
      badge: '123',
    },
    {
      icon: <MoreHorizontal size={18} className="text-pink-300" />,
      label: 'More list',
    },
  ];

  return (
    <aside className="h-screen hover:overflow-y-scroll w-64 gray-color border-r border-gray-800 flex flex-col fixed top-0 left-0 z-50">
      {/* Header */}
      <div className="p-4 h-16 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
          </div>
          <span className="text-white font-semibold text-lg">Brainwave</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 p-4 space-y-1">
        <div className="space-y-1">
          {mainMenuItems.map(item => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              shortcut={item.shortcut}
            />
          ))}
        </div>

        {/* Separator */}
        <div className="h-px bg-gray-700 my-4"></div>

        {/* Secondary Navigation */}
        <div className="space-y-1">
          {secondaryMenuItems.map(item => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              badge={item.badge}
            />
          ))}
        </div>
      </div>

      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/user-profile-illustration.png" />
            <AvatarFallback className="bg-green-600 text-white text-sm">
              YM
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-white text-sm font-medium truncate">
                You May Try It
              </span>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <ChevronDown size={16} className="text-gray-400" />
        </div>

        {/* Upgrade Button */}
        <Button
          className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white"
          size="sm"
        >
          Upgrade to Pro
        </Button>

        {/* Theme Toggle */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
          <div className="flex items-center gap-2">
            <Sun size={16} className="text-gray-400" />
            <span className="text-gray-400 text-sm">Light</span>
          </div>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-10 h-5 bg-gray-600 rounded-full relative transition-colors"
          >
            <div
              className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
                isDarkMode ? 'translate-x-5' : 'translate-x-0.5'
              }`}
            ></div>
          </button>
          <div className="flex items-center gap-2">
            <Moon
              size={16}
              className={isDarkMode ? 'text-green-400' : 'text-gray-400'}
            />
            <span
              className={`text-sm ${
                isDarkMode ? 'text-green-400' : 'text-gray-400'
              }`}
            >
              Dark
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
