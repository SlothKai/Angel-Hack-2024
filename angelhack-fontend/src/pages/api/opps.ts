// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: IOpportunities[];
};

interface IOpportunities {
  title: string;
  date: string;
  address: string;
  image: string;
  id: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IOpportunities[]>
) {
  //   res.status(200).json({ name: "John Doe" });

  const opp: IOpportunities[] = [
    {
      title: "Research and Data Collection",
      date: "June 7th 2024, 9:00:00 am",
      address: "Mandai Zoo",
      image:
        "https://www.mandai.com/content/dam/mandai/about-mandai/mandai-wildlife-reserve-1200x630.png",
      id: "AeOIjmlOHIBHFR1Wh5CP",
    },
    {
      title: "Kindergarden Tours",
      date: "June 4th 2024, 8:30:00 am",
      address: "River Safari",
      image:
        "https://www.mandai.com/content/dam/mandai/about-mandai/mandai-wildlife-reserve-1200x630.png",
      id: "YqOGKoaeQsyypIqlvSXp",
    },
    {
      title: "Save the earth",
      date: "May 27th 2024, 12:00:00 pm",
      address: "DBS HQ",
      image:
        "https://www.japantimes.co.jp/wp-content/uploads/2021/08/DBS-photo-2.jpg",
      id: "fh6HO1CcLAkKkLHZJ4jR",
    },
    {
      title: "Community Engagement",
      date: "June 5th 2024, 9:30:00 am",
      address: "Marina Barrage ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcYqd-KWtelj_vzcYYr-pGfhphIWxx8Cteb0mH6MIAg&s",
      id: "gj0r6P6RwIbnvV2bGxbp",
    },
    {
      title: "Recycle is King!",
      date: "August 13th 2024, 11:30:00 am",
      address: "McDonald's Pasir Panjang",
      image: "https://pbs.twimg.com/media/DlZAKDCW4AAhs0d.jpg",
      id: "lKHmQUT0E6NLokI8LDHu",
    },
    {
      title: "School Tours",
      date: "June 2nd 2024, 11:00:00 am",
      address: "NEWater Visitor Centre",
      image:
        "https://www.pub.gov.sg/-/media/PUB/Cards/NEWater-Visitor-Centre.webp",
      id: "mN3WIarZJQbiafF0fGYs",
    },
    {
      title: "Zookeeping",
      date: "June 3rd 2024, 1:00:00 pm",
      address: "Mandai Zoo",
      image:
        "https://cdn-imgix.headout.com/tour/36188/TOUR-IMAGE/a7313987-9803-4571-9334-9bbebf6dd40d-18792-singapore-mandai-wildlife-reserves-3-in-1-park-hopper-03.jpg?w=744&h=465&crop=faces&auto=compress%2Cformat&fit=min",
      id: "p5YmIJmmH5aQj9Bg55ck",
    },
    {
      title: "Coastal Cleanup",
      date: "June 3rd 2024, 12:00:00 am",
      address: "East Coast Park",
      image:
        "https://www.japantimes.co.jp/wp-content/uploads/2021/08/DBS-photo-2.jpg",
      id: "wx4Bf2BWFEq6O1VRNc8n",
    },
  ];

  res.status(200).json(opp);
}
