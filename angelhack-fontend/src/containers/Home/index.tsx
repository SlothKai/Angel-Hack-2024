import { useDotButton } from "@/components/Carousel/CarouselDots";
import OppCards, { OppCardsProps } from "@/components/OppCards";
import { FlipWords } from "@/components/ui/flip-words";
import { getOpportunities } from "@/fetchers";
import { Image, Spinner } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useCallback, useState } from "react";

const HomePage = () => {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: "start",
    slidesToScroll: "auto",
  };
  // const SLIDE_COUNT = 5;
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", containScroll: false, slidesToScroll: "auto" },
    [Autoplay()]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["opportunities"],
    queryFn: getOpportunities,
    initialData: [],
  });

  if (data.length === 0) {
    return (
      <>
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      </>
    );
  }

  const words = ["Volunteering,", "Aiding,", "Supporting,"];

  return (
    <>
      <div className="flex flex-col space-y-16">
        <div className="flex items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              <FlipWords words={words} />
              <br />
              gamified.
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
              Discover how you can make a difference in your community by
              volunteering with Iter.
            </p>

            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="/opps"
            >
              Get Started
            </Link>
          </div>

          <Image
            alt="Hero"
            className="hidden lg:flex mx-auto aspect-video overflow-hidden rounded-xl object-bottom"
            height="550"
            src="https://images.unsplash.com/photo-1628717341663-0007b0ee2597?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width="550"
          />
        </div>

        <div className="pb-[300px]">
          <h1 className="text-2xl font-bold tracking-tighter md:text-3xl/tight pb-3">
            Available Opportunities
          </h1>
          {isLoading && data.length === 0 ? (
            <div className="flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            <div className="embla">
              <div className="embla__viewport p-4" ref={emblaRef}>
                <div className="embla__container">
                  {data.map((card: OppCardsProps) => (
                    <div className="embla__slide px-[250px]" key={card.id}>
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
                        backgroundColor:
                          index !== selectedIndex ? "" : "#335541",
                      }}
                    ></div>
                  </>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
