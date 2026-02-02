import Image from 'next/image'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { memo } from 'react'

type FlippableCardProps = {
  src: StaticImport
  angle: string
}

function FlippableCard({ src, angle }: FlippableCardProps) {
  return (
    <div
      className="relative h-44 w-44 sm:h-60 sm:w-56"
      style={{ transform: `rotate(${angle})` }}
    >
      <div className="group h-full w-full [perspective:1200px]">
        <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]">
            <Image
              src={src}
              alt="About photo"
              fill
              sizes="(max-width: 768px) 12rem, 16rem"
              className="select-none rounded-2xl object-cover"
              priority={false}
              draggable={false}
            />
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <Image
              src={src}
              alt="About photo mirrored"
              fill
              sizes="(max-width: 768px) 12rem, 16rem"
              className="select-none rounded-2xl object-cover"
              style={{ transform: 'scaleX(-1)' }}
              priority={false}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(FlippableCard)
