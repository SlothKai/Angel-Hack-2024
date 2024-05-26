import { FlipWords } from "@/components/ui/flip-words";

const Test = () => {
  const words = ["Volunteering,", "Aiding,", "Supporting,"];

  return (
    <>
      <div className="pt-[300px] ">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          <FlipWords words={words} />
          <br />
          gamified.
          {/* Volunteering, gamified. */}
        </h1>
      </div>
    </>
  );
};

export default Test;
