// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-6">MySocial</h2>
        <nav className="space-y-4">
          <a href="#" className="block text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">
            Explore
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">
            Messages
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">
            Profile
          </a>
        </nav>
      </aside>

      {/* Feed */}
      <section className="flex-1 max-w-2xl mx-auto p-6">
        {/* Create Post */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <textarea
            className="w-full p-2 border rounded-md focus:outline-none"
            rows={3}
            placeholder="What's on your mind?"
          />
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Post
          </button>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center space-x-3 mb-3">
              <Image
                src="https://via.placeholder.com/40"
                alt="User"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-semibold">Jane Doe</span>
            </div>
            <p className="mb-3">Just had the best coffee ever! ☕</p>
            <div className="flex space-x-6 text-gray-500 text-sm">
              <button className="hover:text-blue-500">Like</button>
              <button className="hover:text-blue-500">Comment</button>
              <button className="hover:text-blue-500">Share</button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center space-x-3 mb-3">
              <Image
                src="https://via.placeholder.com/40"
                alt="User"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-semibold">John Smith</span>
            </div>
            <p className="mb-3">Excited for the weekend! 🎉</p>
            <div className="flex space-x-6 text-gray-500 text-sm">
              <button className="hover:text-blue-500">Like</button>
              <button className="hover:text-blue-500">Comment</button>
              <button className="hover:text-blue-500">Share</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
