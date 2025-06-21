import Image from 'next/image';

const aboutImages = [
  '/assets/images/laos.JPG',
  '/assets/images/hike.JPG',
  '/assets/images/maple.png',
  '/assets/images/rockclimb.jpg',
];

const cardAngles = ['-8deg', '-2deg', '2deg', '8deg'];

function FlippableCard({ src, angle }: { src: string; angle: string }) {
  return (
    <div
      className="relative w-64 h-64"
      style={{ transform: `rotate(${angle})` }}
    >
      <div className="group [perspective:1000px] w-full h-full">
        <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden backface-hidden">
            <Image
              src={src}
              alt="About photo"
              fill
              className="object-cover rounded-2xl select-none"
              draggable={false}
            />
          </div>
          {/* Back (mirrored) */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden [transform:rotateY(180deg)] backface-hidden">
            <Image
              src={src}
              alt="About photo mirrored"
              fill
              className="object-cover rounded-2xl select-none"
              style={{ transform: 'scaleX(-1)' }}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlippableCard;