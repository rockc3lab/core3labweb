import TechSingle from "./tech-single";

interface DynamicCarouselProps {
  dataList: unknown[];
  width?: number; // slide width in px
  height?: number; // slide height in px
  duration?: number; // scroll duration in seconds
  direction?: "rtl" | "ltr"; // scroll direction
  Comp?: unknown;
}
const DynamicCarousel = ({
  dataList,
  width = 256,
  //height = 256,
  duration = 20,
  direction = "ltr",
}: DynamicCarouselProps) => {
  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex gap-4 animate-carousel"
        style={{
          width: `${dataList.length * (width + 16)}px`, // 16px gap
          animationDuration: `${duration}s`,
        }}
      >
        {dataList.map((data: unknown, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 overflow-hidden"
            style={{ width: `${width}px` }}
          >
            <TechSingle
              title={(data as { title: string })?.title}
              classNames="text-[black]"
            />

            {/* <Image
              src={data?.image as StaticImageData}
              height={200}
              width={200}
              alt={`Slide ${idx}`}
              className="w-full h-full object-cover"
            /> */}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes carousel1 {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes carousel2 {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-carousel {
          display: flex;
          animation: ${direction === "rtl" ? "carousel1" : "carousel2"} linear
            infinite;
        }
      `}</style>
    </div>
  );
};

export default DynamicCarousel;
