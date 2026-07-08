"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import ImageWithLoader from "@/components/ImageWithLoader";
import useAutoScroll from "@/hooks/useAutoScroll";
import { divisions } from "@/data/content";

export default function DivisionsBlock() {
  const trackRef = useAutoScroll(0.4);
    const loopedDivisions = [...divisions, ...divisions];
  
    const scrollManual = (dir) => {
      if (trackRef.current) {
        trackRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
      }
    };
  return (
   <Reveal className="carousel-wrap pad-h pt-80">
        <div className="carousel-track" ref={trackRef}>
          {loopedDivisions.map((division, i) => (
            <Link
              href={`/divisions/${division.slug}`}
              className="division-card"
              key={`${division.slug}-${i}`}
            >
              <div className="image">
                <ImageWithLoader
                  src={division.image}
                  alt={division.name}
                  fill
                  imgClassName="full-bleed-image"
                  sizes="(max-width: 768px) 90vw, 260px"
                />
                <div
                  className="overlay"
                  style={{ backgroundColor: division.color }}
                />
                <div className="title brygada-font">{division.name}</div>
              </div>
              <div className="details">
                <div>{division.name}</div>
                <div className="dark-grey">View</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="carousel-buttons desktop-only">
          <span className="prev-button" onClick={() => scrollManual(-1)}>
            ←
          </span>
          <span className="next-button" onClick={() => scrollManual(1)}>
            →
          </span>
        </div>
</Reveal>
  );
}
