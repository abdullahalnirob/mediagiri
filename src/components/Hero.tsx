'use client';
import Image from 'next/image';
import VerticalImageMarquee from './VerticalImageMarquee';

export default function Home() {
  // Sample images for the marquee - replace with your actual images
  type ImageList = string[];
  const images: ImageList = [
    'https://images.unsplash.com/photo-1694344512985-a0d2f3a9f3d1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1568721721169-dc9a5b5acf7f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388',
    'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1531966662811-c6501e46eda6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=415',
    'https://images.unsplash.com/photo-1609542467736-1dfdb7e7c105?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=386',
  ];

  return (
    <main id='home' className="min-h-screen text-white overflow-hidden">
      <style jsx>{`
        @keyframes marquee-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes marquee-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .marquee-up {
          animation: marquee-up 20s linear infinite;
        }

        .marquee-down {
          animation: marquee-down 20s linear infinite;
        }
      `}</style>
      {/* Hero Section */}
      <section className="flex h-screen relative z-40 items-center flex-col-reverse md:flex-row  justify-between px-6 md:px-30 py-24 gap-12">
        {/* Left: Text Content */}
        <div className="max-w-xl">
          <h1 className="bebas-neue-regular text-4xl  md:text-7xl font-bold leading-tight mb-6">
            Empower{' '}
            <span className="bg-gradient-to-b from-sky-500 to-blue-600 px-2 py-0">
              Connections.
            </span>{' '}
            Inspire Change.
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Build meaningful relationships, elevate your ideas, and join a
            community that values collaboration, innovation, and authenticity.
            Let's grow together.
          </p>

          <div className="flex gap-4">
            <button className="px-3 md:px-6 py-1.5 md:py-3 rounded-md hover:bg-sky-500 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white md:font-semibold shadow-lg shadow-sky-500/30 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-gray-900 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right: Marquee Columns */}
        <div
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent, black 3rem, black calc(100% - 3rem), transparent)',
          }}
        >
          <div className="h-[200px] md:h-[500px] flex gap-6">
            {/* Column 1: Bottom to Top */}
            <div className="flex-1 overflow-hidden relative ">
              <div className="marquee-up">
                {[...images, ...images].map((src, idx) => (
                  <div
                    key={idx}
                    className="mb-4 rounded-lg overflow-hidden shadow-2xl shadow-black/50"
                  >
                    <Image
                      src={src}
                      alt={`Community ${idx + 1}`}
                      width={300}
                      height={300}
                      className="w-[300px] h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Top to Bottom */}
            <div className="flex-1 overflow-hidden relative">
              <div className="marquee-down">
                {[...images, ...images].map((src, idx) => (
                  <div
                    key={idx}
                    className="mb-4 rounded-lg overflow-hidden shadow-2xl shadow-black/50"
                  >
                    <Image
                      src={src}
                      alt={`Community ${idx + 1}`}
                      width={300}
                      height={300}
                      className="w-[300px] h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <VerticalImageMarquee images={images} /> */}
      </section>
    </main>
  );
}
