import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

/* API reference for Embla Carousel can be found here:
https://www.embla-carousel.com/api/ */

export type CarouselProps = {
  slides: Array<JSX.Element>;
  carouselOptions?: object; // default values are used if not provided
  autoplay?: boolean;
  autoplayOptions?: object;
  dots?: boolean;
  dotsMargin?: number;
};

const Carousel = ({
  slides,
  carouselOptions = { loop: true },
  autoplay = true,
  autoplayOptions = {
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  },
  dots = true,
  dotsMargin = 3,
}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    carouselOptions,
    autoplay ? [Autoplay(autoplayOptions)] : []
  );

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const handleDotClick = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
    // emblaApi.plugins().autoplay?.reset(); // resets timer on buttonclick
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div key={index} className="embla__slide flex">
                {slide}
              </div>
            ))}
          </div>
        </div>
      </div>
      {dots && (
        <div className="flex justify-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`mt-${dotsMargin} w-3 h-3 rounded-lg border-[2px] border-blue-medium ${
                index === selectedIndex ? " bg-blue-medium" : "bg-blue-bg"
              }`}
            ></button>
          ))}
        </div>
      )}
    </>
  );
};

export default Carousel;
