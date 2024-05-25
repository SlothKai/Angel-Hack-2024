import BadgeComponent from "@/components/Badges";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import React from "react";

interface ProfileContainerProps {
  name: string;
  title: string;
  pending: number;
  completed: number;
}

const ProfileContainer = ({
  name = "Alex Wong",
  title = "Wildlife Warrior",
  pending = "4",
  completed = "18",
}) => {
  const rows = [
    {
      key: 1,
      date: "2021-09-01",
      time: "10:00 AM",
      venue: "Singapore Zoo",
      organisation: "Wildlife Reserves Singapore",
      instructions: "Meet at the entrance",
      status: "Pending",
    },
    {
      key: 2,
      date: "2021-09-05",
      time: "2:00 PM",
      venue: "Gardens by the Bay",
      organisation: "National Parks Board",
      instructions: "Meet at the entrance",
      status: "Pending",
    },
    {
      key: 3,
      date: "2021-09-10",
      time: "9:00 AM",
      venue: "Sungei Buloh Wetland Reserve",
      organisation: "National Parks Board",
      instructions: "Meet at the entrance",
      status: "Pending",
    },
    {
      key: 4,
      date: "2021-09-15",
      time: "10:00 AM",
      venue: "Singapore Zoo",
      organisation: "Wildlife Reserves Singapore",
      instructions: "Meet at the entrance",
      status: "Pending",
    },
    {
      key: 5,
      date: "2021-09-20",
      time: "2:00 PM",
      venue: "Gardens by the Bay",
      organisation: "National Parks Board",
      instructions: "Meet at the entrance",
      status: "Pending",
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
      key: "venue",
      label: "VENUE",
    },
    {
      key: "organisation",
      label: "ORGANISATION",
    },
    {
      key: "instructions",
      label: "INSTRUCTIONS",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];

  const badgeData = [
    {
      name: "Wildlife Warrior",
      description: "Conservation and wildlife protection",
      obtained: true,
    },
    {
      name: "Guardian of Nature",
      description: "Climate Change Mitigation and Adaptation",
      obtained: true,
    },
    {
      name: "Hydro Hero",
      description: "Complete 5 water-related challenges to obtain this badge!",
      obtained: false,
    },
  ];

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex gap-x-5">
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          className="w-32 h-32 text-large shrink-0"
          isBordered={true}
        />

        <div className="flex  items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="font-mono text-slate-700">{title}</p>
            <hr className="my-2" />
            <p className="text-slate-800">Completed: {completed}</p>
            <p className="text-slate-800">Pending: {pending}</p>
          </div>
        </div>
      </div>

      <Card className="flex">
        <CardHeader className="text-xl font-bold">Badges</CardHeader>
        <div className="p-3 gap-6 flex flex-wrap justify-around">
          {badgeData.map((badge, index) => (
            <React.Fragment key={index}>
              <BadgeComponent
                name={badge.name}
                description={badge.description}
                obtained={badge.obtained}
              />
            </React.Fragment>
          ))}
        </div>
      </Card>

      <Card className="flex">
        <CardHeader className="text-xl font-bold">
          Upcoming opportunities
        </CardHeader>
        <div className="p-3 overflow-auto">
          <Table removeWrapper>
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
      </Card>
    </div>
  );
};

export default ProfileContainer;
