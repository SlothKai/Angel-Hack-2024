import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
  Image,
  Link,
} from "@nextui-org/react";
import clsx from "clsx";
import { useRouter } from "next/router";

const rows = [
  {
    key: "date",
    date: "8 June 2024",
    time: "8.00am to 11.00am",
    location:
      "Sungei Buloh Wetland Reserve (Please meet at the Visitor Center)",
    register_open: "1 May 2024",
  },
];

const columns = [
  {
    key: "date",
    label: "DATE",
  },
  {
    key: "time",
    label: "TIME",
  },
  {
    key: "location",
    label: "LOCATION",
  },
  {
    key: "register_open",
    label: "REGISTRATION OPENS",
  },
];

const InfoPage = () => {
  const router = useRouter();
  return (
    <>
      <p>Post: {router.query.id}</p>
      <div className="space-y-8 flex flex-col justify-center">
        <div className="mx-auto shadow-xl">
          <Image
            src="https://www.volunteer.gov.sg/images/default-source/opportunity/9c8e85de-d0ba-4999-9cb5-5013c0f34f9e.jpg?Status=Master&sfvrsn=4e2d8906_1"
            width={700}
            height={300}
            alt="Green Earth Initiative"
          />
        </div>

        <div
          className={clsx(
            "flex flex-wrap justify-between items-center pr-4 sticky top-[64px] z-10 py-2 bg-white"
          )}
        >
          <div>
            <p className="md:text-4xl text-3xl font-bold text-slate-900">
              Green Earth Initiative
            </p>
            <p className="text-slate-600 font-mono">Youth Corps Singapore</p>
          </div>
          <p className="uppercase text-slate-700 font-semibold">
            15 Mar 2024 - 20 Apr 2024
          </p>
        </div>

        <div>
          <p className="text-3xl font-bold pb-2 text-slate-700">About</p>
          <p className="ml-1 border-l-3 outline-offset-3 px-4 border-slate-700">
            Are you ready to combine your love for photography with a passion
            for the environment? Organised to commemorate World Environment Day
            2024, join us on a captivating journey! Date: 8 June (Saturday)
            Time: 8.00am to 11.00am Location: Sungei Buloh Wetland Reserve
            (Please meet at the Visitor Center) What’s in Store for You? 🌿Learn
            the Basics of Mobile Photography: Whether you're a beginner or an
            enthusiast, enhance your photography skills with your mobile phone,
            capturing the serene beauty of nature. 🌿Unwind and Relax: Take a
            break from the hustle and bustle. Let the tranquil surroundings of
            the wetland soothe your soul. 🌿Environmental Appreciation: Engage
            in insightful discussions on biodiversity and learn why it's crucial
            to protect our natural world. Let’s come together to appreciate the
            wonders of our environment and learn how we can contribute to its
            preservation. Spaces are limited, so don’t miss out on this unique
            adventure specially brought to you by Youth Corps Singapore
            Sustainability Cluster. See you there! 🌱 Are you ready to combine
            your love for photography with a passion for the environment?
            Organised to commemorate World Environment Day 2024, join us on a
            captivating journey! Date: 8 June (Saturday) Time: 8.00am to 11.00am
            Location: Sungei Buloh Wetland Reserve (Please meet at the Visitor
            Center) What’s in Store for You? 🌿Learn the Basics of Mobile
            Photography: Whether you're a beginner or an enthusiast, enhance
            your photography skills with your mobile phone, capturing the serene
            beauty of nature. 🌿Unwind and Relax: Take a break from the hustle
            and bustle. Let the tranquil surroundings of the wetland soothe your
            soul. 🌿Environmental Appreciation: Engage in insightful discussions
            on biodiversity and learn why it's crucial to protect our natural
            world. Let’s come together to appreciate the wonders of our
            environment and learn how we can contribute to its preservation.
            Spaces are limited, so don’t miss out on this unique adventure
            specially brought to you by Youth Corps Singapore Sustainability
            Cluster. See you there! 🌱 Are you ready to combine your love for
            photography with a passion for the environment? Organised to
            commemorate World Environment Day 2024, join us on a captivating
            journey! Date: 8 June (Saturday) Time: 8.00am to 11.00am Location:
            Sungei Buloh Wetland Reserve (Please meet at the Visitor Center)
            What’s in Store for You? 🌿Learn the Basics of Mobile Photography:
            Whether you're a beginner or an enthusiast, enhance your photography
            skills with your mobile phone, capturing the serene beauty of
            nature. 🌿Unwind and Relax: Take a break from the hustle and bustle.
            Let the tranquil surroundings of the wetland soothe your soul.
            🌿Environmental Appreciation: Engage in insightful discussions on
            biodiversity and learn why it's crucial to protect our natural
            world. Let’s come together to appreciate the wonders of our
            environment and learn how we can contribute to its preservation.
            Spaces are limited, so don’t miss out on this unique adventure
            specially brought to you by Youth Corps Singapore Sustainability
            Cluster. See you there! 🌱 Are you ready to combine your love for
            photography with a passion for the environment? Organised to
            commemorate World Environment Day 2024, join us on a captivating
            journey! Date: 8 June (Saturday) Time: 8.00am to 11.00am Location:
            Sungei Buloh Wetland Reserve (Please meet at the Visitor Center)
            What’s in Store for You? 🌿Learn the Basics of Mobile Photography:
            Whether you're a beginner or an enthusiast, enhance your photography
            skills with your mobile phone, capturing the serene beauty of
            nature. 🌿Unwind and Relax: Take a break from the hustle and bustle.
            Let the tranquil surroundings of the wetland soothe your soul.
            🌿Environmental Appreciation: Engage in insightful discussions on
            biodiversity and learn why it's crucial to protect our natural
            world. Let’s come together to appreciate the wonders of our
            environment and learn how we can contribute to its preservation.
            Spaces are limited, so don’t miss out on this unique adventure
            specially brought to you by Youth Corps Singapore Sustainability
            Cluster. See you there! 🌱
          </p>
        </div>

        <div>
          <p className="text-3xl font-bold pb-2 text-slate-700">
            Additional Information
          </p>

          <Table aria-label="Example table with dynamic content">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={rows}>
              {(item) => (
                <TableRow key={item.key}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <Link
          className="w-fit inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          href="#"
        >
          Apply
        </Link>
      </div>
    </>
  );
};

export default InfoPage;
