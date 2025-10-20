'use client';
import Image from 'next/image';
import React from 'react';
interface VerticalImageMarqueeProps {
  images: string[];
}
function VerticalImageMarquee({ images }: VerticalImageMarqueeProps) {
  // Inject keyframes for vertical animation
  React.useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.innerText = `
      @keyframes marquee-vertical {
        0% { transform: translateY(0); }
        100% { transform: translateY(calc(-100% / 2)); }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const Marquee = ({
    images,
    direction = 'normal',
  }: {
    images: string[];
    direction?: 'normal' | 'reverse';
  }) => {
    return (
      <div
        className="h-[500px] w-[250px] overflow-hidden relative"
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent, black 3rem, black calc(100% - 3rem), transparent)',
        }}
      >
        <div
          className="flex flex-col animate-[marquee-vertical_30s_linear_infinite]"
          style={{
            animationDirection: direction,
          }}
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 mb-5 rounded-xl overflow-hidden shadow-md"
              style={{ height: 'auto' }}
            >
              <Image
                src={src}
                alt={`Image ${i + 1}`}
                width={300}
                height={300}
                className="w-[300px] h-auto object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center gap-x-10">
      <Marquee images={images} />
      <Marquee images={images} direction="reverse" />
    </div>
  );
}

export default VerticalImageMarquee;
