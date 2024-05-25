import OppCards, { OppCardsProps } from "@/components/OppCards";
import { collection, getDocs } from "firebase/firestore";
import moment from "moment";
import { useEffect, useState } from "react";
import { db } from "../../../lib/firebase";
import OppCardsNoCarou from "@/components/OppCardsNoCarou";

interface OppsContainerProps {}

const OppsContainer: React.FC<OppsContainerProps> = () => {
  const [cardData, setCardData] = useState<OppCardsProps[]>([]);

  const getQuerySnapshot = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "opportunities"));
      const data = querySnapshot.docs.map((doc) => ({
        title: doc.get("name"),
        date: moment(doc.get("datetimeStart").toDate()).format(
          "MMMM Do YYYY, h:mm:ss a"
        ),
        address: doc.get("venue"),
        image: doc.get("image"),
        id: doc.id,
      })) as OppCardsProps[];
      setCardData(data);
    } catch (error) {
      console.error("Error fetching opportunities: ", error);
    }
  };

  useEffect(() => {
    getQuerySnapshot();
  }, []);

  if (cardData.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      <h1 className="text-2xl font-bold tracking-tighter md:text-3xl/tight pb-3">
        Available Opportunities {`(${cardData.length})`}
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {cardData.map((card) => {
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
    </div>
  );
};

export default OppsContainer;
