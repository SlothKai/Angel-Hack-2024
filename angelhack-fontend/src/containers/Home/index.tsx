import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import OppCards, { OppCardsProps } from "@/components/OppCards";
import { FlipWords } from "@/components/ui/flip-words";
import { DotButton, useDotButton } from "@/components/Carousel/CarouselDots";

const HomePage = () => {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: "start",
    slidesToScroll: "auto",
  };
  // const SLIDE_COUNT = 5;
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const testData: OppCardsProps[] = [
    {
      title: "Community Link Volunteer",
      date: "01 Jan 2022 - 31 Dec 2030",
      address: "512 Thomson Road MSF Building Singapore 298136",
      image: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      title: "Project Sort It Out",
      date: "22 Jun 2024 - 14 Jul 2024",
      address:
        "60 Jurong West Central 3 #01-01 The Frontier Community Club Singapore 648346",
      image: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      title: "Hearts Connect @ SAS",
      date: "06 Jun 2024 - 31 Jul 2024",
      address: "512 Thomson Road MSF Building Singapore 298136",
      image: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      title: "Green Earth Initiative",
      date: "15 Mar 2024 - 20 Apr 2024",
      address: "123 Green Street Eco Building Singapore 567890",
      image: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      title: "Tech for Good",
      date: "01 May 2024 - 31 May 2024",
      address: "456 Innovation Road Tech Hub Singapore 123456",
      image: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      title: "Art for All",
      date: "01 Sep 2024 - 30 Sep 2024",
      address: "78 Creative Avenue Art Center Singapore 789012",
      image: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      title: "Health Matters",
      date: "10 Oct 2024 - 20 Oct 2024",
      address: "89 Wellness Boulevard Health Complex Singapore 345678",
      image: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      title: "Music & Melody",
      date: "05 Nov 2024 - 15 Nov 2024",
      address: "101 Harmony Lane Music Hall Singapore 234567",
      image: "https://nextui.org/images/hero-card-complete.jpeg",
    },
  ];

  const words = ["Volunteering,", "Helping,", "Supporting,"];

  return (
    <>
      <div className="flex flex-col space-y-16">
        <section className="w-full flex">
          <div className="container grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                <FlipWords words={words} />
                <br />
                gamified.
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover how you can make a difference in your community by
                volunteering with Iter.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* <img
        alt="Hero"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
        height="550"
        // src="/placeholder.svg"
        src="/images/chalo.jpg"
        width="550"
      /> */}
          </div>
        </section>

        <div className="pb-[300px]">
          <h1 className="text-2xl font-bold tracking-tighter md:text-3xl/tight">
            Available Opportunities
          </h1>

          <div className="embla">
            <div className="embla__viewport p-4" ref={emblaRef}>
              <div className="embla__container">
                {testData.map((card) => (
                  <div className="embla__slide flex">
                    <OppCards {...card} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center space-x-3  text-slate-700">
              {scrollSnaps.map((_, index) => (
                <>
                  <div
                    className="w-4 h-4 rounded-full border-3 cursor-pointer"
                    onClick={() => {
                      onDotButtonClick(index);
                    }}
                    style={{
                      backgroundColor: index === selectedIndex ? "" : "#335541",
                      // width: "10px",
                      // height: "10px",
                    }}
                  >
                    {/* {index} */}
                  </div>
                </>
              ))}
            </div>

            {/* <button className="embla__prev" onClick={scrollPrev}>
              Prev
            </button>
            <button className="embla__next" onClick={scrollNext}>
              Next
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
