import OppCardsNoCarou from "@/components/OppCardsNoCarou";
import { getOpportunities } from "@/fetchers/";
import { Spinner } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";

interface OppsContainerProps {}

const OppsContainer: React.FC<OppsContainerProps> = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["opportunities"],
    queryFn: getOpportunities,
    initialData: [],
  });

  if (isLoading && data.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <h1 className="text-2xl font-bold tracking-tighter md:text-3xl/tight pb-3">
        Available Opportunities {`(${data.length})`}
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {data.map((card: any) => {
          return (
            <OppCardsNoCarou
              key={card.id}
              id={card.id}
              title={card.title}
              date={card.date}
              address={card.address}
              image={card.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default OppsContainer;
