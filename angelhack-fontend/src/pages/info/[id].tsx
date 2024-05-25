import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { useRouter } from "next/router";

const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "status",
    label: "STATUS",
  },
];

const InfoPage = () => {
  const router = useRouter();
  return (
    <>
      {/* <p>Post: {router.query.id}</p> */}
      <div className="space-y-2">
        <div className="flex flex-wrap justify-between items-center pr-4">
          <p className="text-4xl font-bold pb-2 text-slate-900">
            Green Earth Initiative
          </p>
          <p className="uppercase text-slate-700 font-semibold">
            15 Mar 2024 - 20 Apr 2024
          </p>
        </div>
        <p className="text-3xl font-bold pb-2 text-slate-700">About</p>
        <p className="border-l-3 px-4 border-slate-700">
          Are you ready to combine your love for photography with a passion for
          the environment? Organised to commemorate World Environment Day 2024,
          join us on a captivating journey! Date: 8 June (Saturday) Time: 8.00am
          to 11.00am Location: Sungei Buloh Wetland Reserve (Please meet at the
          Visitor Center) What’s in Store for You? 🌿Learn the Basics of Mobile
          Photography: Whether you're a beginner or an enthusiast, enhance your
          photography skills with your mobile phone, capturing the serene beauty
          of nature. 🌿Unwind and Relax: Take a break from the hustle and
          bustle. Let the tranquil surroundings of the wetland soothe your soul.
          🌿Environmental Appreciation: Engage in insightful discussions on
          biodiversity and learn why it's crucial to protect our natural world.
          Let’s come together to appreciate the wonders of our environment and
          learn how we can contribute to its preservation. Spaces are limited,
          so don’t miss out on this unique adventure specially brought to you by
          Youth Corps Singapore Sustainability Cluster. See you there! 🌱
        </p>

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
        {/* DATE | TIME | LOCATION | REGISTRATION ENDS */}
      </div>
    </>
  );
};

export default InfoPage;
