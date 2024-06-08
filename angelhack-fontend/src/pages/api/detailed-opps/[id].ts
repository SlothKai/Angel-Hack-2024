// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface IDetailedOpps {
  id: string;
  datetimeEnd: {
    seconds: number;
    nanoseconds: number;
  };
  description: string;
  company: string;
  name: string;
  currentVolunteer: number;
  category: string;
  datetimeStart: {
    seconds: number;
    nanoseconds: number;
  };
  image: string;
  maxVolunteer: number;
  venue: string;
  instruction?: string;
  status?: number;
}

interface IError {
  error: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IDetailedOpps | IError>
) {
  const detailedOpps: IDetailedOpps[] = [
    {
      id: "AeOIjmlOHIBHFR1Wh5CP",
      datetimeEnd: {
        seconds: 1717689600,
        nanoseconds: 573000000,
      },
      description:
        "Assist researchers to collect data from sensors placed around Mandai Zoo, River Safari and Bird Paradise",
      company: "Mandai Wildlife Reserve",
      name: "Research and Data Collection",
      currentVolunteer: 0,
      category: "Water Conservation and Management",
      datetimeStart: {
        seconds: 1717722000,
        nanoseconds: 216000000,
      },
      image:
        "https://www.mandai.com/content/dam/mandai/about-mandai/mandai-wildlife-reserve-1200x630.png",
      maxVolunteer: 15,
      venue: "Mandai Zoo",
    },
    {
      id: "YqOGKoaeQsyypIqlvSXp",
      datetimeStart: {
        seconds: 1717461000,
        nanoseconds: 439000000,
      },
      image:
        "https://www.mandai.com/content/dam/mandai/about-mandai/mandai-wildlife-reserve-1200x630.png",
      maxVolunteer: 2,
      company: "Mandai Wildlife Reserve",
      description:
        '    "Join us for a tour of the River Safari and help us take care of the kids",',
      venue: "River Safari",
      name: "Kindergarden Tours",
      category: "Conservation and wildlife protection",
      datetimeEnd: {
        seconds: 1717493400,
        nanoseconds: 145000000,
      },
      currentVolunteer: 2,
    },
    {
      id: "fh6HO1CcLAkKkLHZJ4jR",
      name: "Save the earth",
      venue: "DBS HQ",
      datetimeStart: {
        seconds: 1716782400,
        nanoseconds: 145000000,
      },
      category: "Conservation and wildlife protection",
      company: "DBS",
      instruction: "Bring Water Bottle to hydrate yourself",
      currentVolunteer: 0,
      datetimeEnd: {
        seconds: 1717128000,
        nanoseconds: 959000000,
      },
      description:
        'DBS Bank of Singapore recently hosted a significant green event dedicated to conservation and wildlife protection. The event, titled "DBS Guardians of Nature," took place at the lush Singapore Botanic Gardens, drawing environmental enthusiasts, conservationists, and the general public.   The event featured a keynote speech by renowned wildlife biologist Dr. Jane Goodall, who shared insights on global conservation efforts and the importance of preserving biodiversity. Attendees participated in various interactive workshops, including a hands-on session on sustainable practices for protecting local wildlife habitats, led by experts from the World Wildlife Fund (WWF).  One of the highlights was a guided nature walk through the Botanic Gardens, where participants learned about native flora and fauna and the critical role these species play in the ecosystem. Additionally, DBS showcased its latest green financial products, emphasizing how sustainable banking practices can contribute to environmental conservation.  The event also featured a family-friendly zone with educational booths, games, and activities designed to teach children about wildlife protection in a fun and engaging manner. Local conservation groups set up stalls to provide information on volunteer opportunities and how individuals can contribute to protecting Singapore\'s natural heritage.  "DBS Guardians of Nature" concluded with a tree-planting ceremony, symbolizing the bank\'s commitment to a greener future. Each participant left with a sapling to plant in their own community, fostering a sense of personal responsibility towards conservation.  This event underscored DBS Bank\'s dedication to environmental stewardship and its role in promoting sustainable practices that benefit both the community and the planet.',
      maxVolunteer: 20,
      status: 0,
      image:
        "https://www.japantimes.co.jp/wp-content/uploads/2021/08/DBS-photo-2.jpg",
    },
    {
      id: "gj0r6P6RwIbnvV2bGxbp",
      datetimeStart: {
        seconds: 1717551000,
        nanoseconds: 227000000,
      },
      maxVolunteer: 7,
      currentVolunteer: 1,
      name: "Community Engagement",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcYqd-KWtelj_vzcYYr-pGfhphIWxx8Cteb0mH6MIAg&s",
      company: "PUB",
      description:
        "Work with local communities to promote sustainable practices and support climate adaptation measures.",
      category: "Climate Change Mitigation and Adaptation",
      venue: "Marina Barrage ",
      datetimeEnd: {
        seconds: 1717516800,
        nanoseconds: 160000000,
      },
    },
    {
      id: "lKHmQUT0E6NLokI8LDHu",
      instruction: "Bring a bottle of water",
      image: "https://pbs.twimg.com/media/DlZAKDCW4AAhs0d.jpg",
      company: "McDonald",
      datetimeStart: {
        seconds: 1723519800,
        nanoseconds: 119000000,
      },
      datetimeEnd: {
        seconds: 1724731200,
        nanoseconds: 599000000,
      },
      name: "Recycle is King!",
      description:
        'McDonald\'s is proud to announce its upcoming green event, "Recycling is King," dedicated to climate change mitigation and adaptation. This event will be held at the vibrant East Coast Park, inviting families, environmental enthusiasts, and the community to join forces in promoting sustainable practices and reducing our environmental footprint.  "Recycling is King" aims to raise awareness about the importance of recycling and how it plays a crucial role in combating climate change. The event will feature a variety of interactive activities, educational workshops, and engaging talks designed to inspire and empower participants to take actionable steps towards a more sustainable future.',
      category: "Climate Change Mitigation and Adaptation",
      maxVolunteer: 20,
      venue: "McDonald's Pasir Panjang",
      currentVolunteer: 0,
    },
    {
      id: "mN3WIarZJQbiafF0fGYs",
      company: "PUB",
      description:
        "Embark on an enlightening journey with a visit to the NEWater Visitor Centre in Singapore, where innovation meets sustainability. This state-of-the-art facility showcases Singapore’s groundbreaking approach to water management and sustainability through the production of NEWater, high-quality reclaimed water.  As you step into the Visitor Centre, you are greeted by an impressive interactive display that introduces the concept of water reclamation and the vital role NEWater plays in Singapore’s water supply. The tour begins with an engaging multimedia presentation, detailing the history and development of NEWater, its technological advancements, and the critical need for water sustainability in an urban environment.  Guided by knowledgeable staff, you explore the various stages of the NEWater production process. Starting with microfiltration, you witness how water is meticulously filtered to remove impurities. Next, the process of reverse osmosis is demonstrated, showcasing how even the smallest contaminants are eliminated. Finally, you learn about ultraviolet disinfection, which ensures the highest standards of water quality and safety.  The visit includes hands-on exhibits where you can interact with the technology used in water purification. You can test your knowledge with fun quizzes and see real-time data on water quality monitoring. The centre also features a transparent pipeline display, allowing you to observe the flow of water as it undergoes treatment.  One of the highlights of the tour is the tasting session, where you have the opportunity to sample NEWater and experience its purity firsthand. This unique experience reinforces the effectiveness of the treatment process and the high standards maintained by Singapore’s water management authorities.  Throughout the visit, educational panels and videos emphasize the importance of water conservation and the role each individual can play in supporting sustainable water use. The NEWater Visitor Centre not only provides a deep understanding of water technology but also inspires a commitment to environmental stewardship.  The tour concludes with a visit to the NEWater boutique, where you can find informative brochures, souvenirs, and even bottled NEWater to take home. This visit is more than just an educational experience; it’s an inspiring look into the future of sustainable water management and Singapore’s innovative solutions to global water challenges.",
      maxVolunteer: 10,
      currentVolunteer: 0,
      instruction: "bring water bottle and writing materials",
      venue: "NEWater Visitor Centre",
      image:
        "https://www.pub.gov.sg/-/media/PUB/Cards/NEWater-Visitor-Centre.webp",
      category: "Water Conservation and Management",
      name: "School Tours",
      datetimeStart: {
        seconds: 1717297200,
        nanoseconds: 140000000,
      },
      datetimeEnd: {
        seconds: 1717581600,
        nanoseconds: 678000000,
      },
    },
    {
      id: "p5YmIJmmH5aQj9Bg55ck",
      company: "Mandai Wildlife Reserve",
      datetimeStart: {
        seconds: 1717390800,
        nanoseconds: 46000000,
      },
      maxVolunteer: 25,
      datetimeEnd: {
        seconds: 1717376400,
        nanoseconds: 390000000,
      },
      venue: "Mandai Zoo",
      image:
        "https://cdn-imgix.headout.com/tour/36188/TOUR-IMAGE/a7313987-9803-4571-9334-9bbebf6dd40d-18792-singapore-mandai-wildlife-reserves-3-in-1-park-hopper-03.jpg?w=744&h=465&crop=faces&auto=compress%2Cformat&fit=min",
      name: "Zookeeping",
      currentVolunteer: 0,
      category: "Conservation and wildlife protection",
      instruction: "bring your ic and water bottle as well",
      description:
        "Volunteer as a Zookeeper! Main role includes keeping animal enclosures clean and tidy, feeding the animels, preparing food for the animals and playing with them!",
    },
    {
      id: "wx4Bf2BWFEq6O1VRNc8n",
      name: "Coastal Cleanup",
      datetimeEnd: {
        seconds: 1717430400,
        nanoseconds: 584000000,
      },
      datetimeStart: {
        seconds: 1717344000,
        nanoseconds: 899000000,
      },
      maxVolunteer: 18,
      venue: "East Coast Park",
      instruction: "Please be on time",
      company: "DBS",
      currentVolunteer: 1,
      description:
        "Join us for an impactful and meaningful day of action at the DBS Climate Change Mitigation and Adaptation Volunteering Event! As part of our commitment to environmental sustainability and community engagement, DBS is organizing a hands-on volunteer event aimed at addressing the pressing issue of climate change.",
      image:
        "https://www.japantimes.co.jp/wp-content/uploads/2021/08/DBS-photo-2.jpg",
      category: "Climate Change Mitigation and Adaptation",
    },
  ];

  const response = detailedOpps.find((opp) => opp.id === req.query.id);

  if (response) {
    res.status(200).json(response);
  } else {
    res.status(400).json({ error: "Opp not found" });
  }
}
