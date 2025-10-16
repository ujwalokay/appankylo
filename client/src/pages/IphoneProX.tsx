import { Gamepad2Icon, HomeIcon, UserIcon } from "lucide-react";
import React from "react";

const carouselImages = [
  {
    src: "/figmaAssets/frame-14.png",
    alt: "GTA V Game",
  },
];

const paginationDots = [
  { active: true },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
];

const venueImages = [
  {
    src: "/figmaAssets/frame-16.png",
    alt: "Gaming Venue 1",
  },
  {
    src: "/figmaAssets/frame-17.png",
    alt: "Gaming Venue 2",
  },
];

const gameCards = [
  {
    src: "/figmaAssets/rectangle-134.png",
    alt: "Valorant",
  },
  {
    src: "/figmaAssets/rectangle-135.png",
    alt: "Dota 2",
  },
  {
    src: "/figmaAssets/rectangle-138.png",
    alt: "Game 3",
  },
  {
    src: "/figmaAssets/rectangle-134.png",
    alt: "Game 4",
  },
  {
    src: "/figmaAssets/rectangle-134.png",
    alt: "Game 5",
  },
];

const sidePreviewImages = [
  {
    src: "/figmaAssets/rectangle-121.png",
    position: "left-0",
  },
  {
    src: "/figmaAssets/rectangle-130.png",
    position: "left-[313px]",
  },
];

const navigationItems = [
  { icon: HomeIcon, active: true },
  { icon: Gamepad2Icon, active: false },
  { icon: UserIcon, active: false },
];

export const IphoneProX = (): JSX.Element => {
  return (
    <div className="bg-[#1c1a29] overflow-hidden w-full min-w-[375px] h-[812px] relative">
      <header className="absolute top-0 left-0 w-[375px] h-11">
        <div className="absolute w-[14.93%] h-[40.91%] top-[31.82%] left-[5.31%] flex items-center">
          <time className="h-[18px] w-[54px] [font-family:'Niramit',Helvetica] font-semibold text-white text-[15px] text-center tracking-[-0.17px] leading-[18px]">
            9:41
          </time>
        </div>

        <img
          className="absolute top-[calc(50.00%_-_5px)] right-3.5 w-[67px] h-3"
          alt="Status indicators"
          src="/figmaAssets/container.png"
        />

        <img
          className="absolute top-11 left-[156px] w-16 h-[37px]"
          alt="Gaming Yatra Logo"
          src="/figmaAssets/20250727-102741-removebg-preview-1.png"
        />
      </header>

      <div className="absolute top-14 left-[326px] w-[27px] h-[27px]">
        <img
          className="w-full h-full"
          alt="Notifications"
          src="/figmaAssets/group-7.png"
        />
      </div>

      <div className="absolute top-[58px] left-[341px] w-[9px] h-[9px] bg-[#eb5757] rounded-[4.5px]" />

      <img
        className="absolute top-[53px] left-5 w-[30px] h-[30px] object-cover"
        alt="Profile"
        src="/figmaAssets/ellipse-1.png"
      />

      <div className="absolute top-[83px] left-[7px] [font-family:'Open_Sans',Helvetica] font-normal text-text-secondary text-[10px] tracking-[0.50px] leading-[18px] whitespace-nowrap">
        dombivli west
      </div>

      <div className="absolute top-[81px] left-[146px] w-[205px] [font-family:'Open_Sans',Helvetica] font-bold text-white text-[11px] tracking-[0.40px] leading-[22px] whitespace-nowrap">
        GAMING YATRA
      </div>

      {sidePreviewImages.map((image, index) => (
        <img
          key={`side-preview-${index}`}
          className={`absolute top-32 ${image.position} ${index === 0 ? "w-[60px]" : "w-[62px]"} h-[177px] rounded-[10px] object-cover`}
          alt={`Preview ${index + 1}`}
          src={image.src}
        />
      ))}

      <section className="absolute top-28 left-8">
        <img
          className="w-[311px] h-[209px] object-cover rounded-[10px]"
          alt="Featured game"
          src="/figmaAssets/frame-14.png"
        />
      </section>

      <div className="absolute top-64 left-[54px] w-[266px] h-[34px] rounded-[13px] bg-[linear-gradient(180deg,rgba(18,18,18,1)_0%,rgba(28,26,41,0)_0%,rgba(28,26,41,0.4)_27%,rgba(28,26,41,0.9)_48%,rgba(28,26,41,1)_100%)]" />

      <nav
        className="absolute top-[305px] left-[139px] w-[98px] h-[7px] flex gap-[5px]"
        aria-label="Carousel pagination"
      >
        {paginationDots.map((dot, index) => (
          <div
            key={`dot-${index}`}
            className={`${dot.active ? "w-[30px]" : "w-3"} h-[7px] ${dot.active ? "bg-[#4d438a]" : "bg-[#2a2740]"} rounded-[200px]`}
            role="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={dot.active ? "true" : "false"}
          />
        ))}
      </nav>

      <img
        className="absolute top-[506px] left-[356px] w-[5px] h-[9px]"
        alt="Arrow"
        src="/figmaAssets/vector-2-1.svg"
      />

      <img
        className="absolute w-[2.93%] h-0 top-[78.45%] left-[8.27%]"
        alt=""
        src="/figmaAssets/vector-1.svg"
      />

      <img
        className="absolute w-[2.93%] h-0 top-[78.45%] left-[51.20%]"
        alt=""
        src="/figmaAssets/vector-1.svg"
      />

      <img
        className="absolute w-[2.93%] h-0 top-[78.45%] left-[94.13%]"
        alt=""
        src="/figmaAssets/vector-1.svg"
      />

      <img
        className="absolute w-[2.67%] h-0 top-[78.45%] left-[5.33%]"
        alt=""
        src="/figmaAssets/vector-1.svg"
      />

      <img
        className="absolute w-[2.67%] h-0 top-[78.45%] left-[48.27%]"
        alt=""
        src="/figmaAssets/vector-1.svg"
      />

      <img
        className="absolute w-[2.67%] h-0 top-[78.45%] left-[91.20%]"
        alt=""
        src="/figmaAssets/vector-1.svg"
      />

      <img
        className="absolute w-[2.67%] h-0 top-[78.45%] left-[11.47%]"
        alt=""
        src="/figmaAssets/vector-1.svg"
      />

      <img
        className="absolute w-[2.67%] h-0 top-[78.45%] left-[54.40%]"
        alt=""
        src="/figmaAssets/vector-1.svg"
      />

      <img
        className="absolute w-[2.67%] h-0 top-[78.45%] left-[97.33%]"
        alt=""
        src="/figmaAssets/vector-1.svg"
      />

      <img
        className="absolute w-[2.67%] h-0 top-[78.45%] left-[14.67%]"
        alt=""
        src="/figmaAssets/vector-1.svg"
      />

      <img
        className="absolute w-[2.67%] h-0 top-[78.45%] left-[57.60%]"
        alt=""
        src="/figmaAssets/vector-1.svg"
      />

      <img
        className="absolute w-[2.67%] h-0 top-[142.00%] left-[-978.67%]"
        alt=""
        src="/figmaAssets/vector-1.svg"
      />

      <img
        className="absolute w-[2.67%] h-0 top-[78.45%] left-[17.87%]"
        alt=""
        src="/figmaAssets/vector.svg"
      />

      <img
        className="absolute w-[2.67%] h-0 top-[78.45%] left-[60.80%]"
        alt=""
        src="/figmaAssets/vector.svg"
      />

      <img
        className="absolute w-[2.67%] h-0 top-[142.00%] left-[-978.67%]"
        alt=""
        src="/figmaAssets/vector.svg"
      />

      <section className="absolute top-[359px] left-[7px]">
        <div className="w-[213px] h-[131px] flex overflow-hidden [background:url(/figmaAssets/frame-16.png)_50%_50%_/_cover] rounded-[10px]">
          <div className="w-[213px] h-[131px] bg-[linear-gradient(180deg,rgba(134,122,210,0)_0%,rgba(73,64,128,0)_100%)]" />
        </div>
      </section>

      <img
        className="absolute top-[346px] left-[209px] w-[166px] h-[177px] object-cover rounded-[10px]"
        alt="Gaming venue"
        src="/figmaAssets/frame-17.png"
      />

      <section
        className="absolute top-[527px] -left-0.5 w-[375px] h-[210px] flex overflow-hidden overflow-x-scroll"
        aria-label="Game cards"
      >
        {gameCards.map((card, index) => (
          <img
            key={`game-card-${index}`}
            className={`${index < 3 ? "mt-2" : ""} ${index === 1 ? "w-[158px]" : "w-[147px]"} h-[210px] ${index > 0 ? "ml-[11px]" : ""} rounded-[10px] object-cover`}
            alt={card.alt}
            src={card.src}
          />
        ))}
      </section>

      <nav
        className="absolute top-[750px] left-0 w-[375px] h-[63px]"
        aria-label="Main navigation"
      >
        <img
          className="absolute w-full h-full top-[-30.16%] left-0"
          alt=""
          src="/figmaAssets/union.svg"
        />

        <div className="absolute w-[6.67%] h-[39.68%] top-[26.98%] left-[46.67%]">
          <img
            className="w-full h-full"
            alt="Games"
            src="/figmaAssets/group-291.png"
          />
        </div>

        <div className="absolute w-[6.67%] h-[39.68%] top-[26.98%] left-[77.33%]">
          <img
            className="w-full h-full"
            alt="Profile"
            src="/figmaAssets/group-293.png"
          />
        </div>

        <div className="absolute w-[6.67%] h-[39.68%] top-[26.98%] left-[16.00%]">
          <img
            className="w-full h-full"
            alt="Home"
            src="/figmaAssets/group-304.png"
          />
        </div>
      </nav>
    </div>
  );
};
