import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import clsx from "clsx";

interface ProfileContainerProps {
  name: string;
  pending: number;
  completed: number;
}

const ProfileContainer = ({
  name = "Alex Wong",
  pending = "4",
  completed = "18",
}) => {
  return (
    <div>
      <div className="flex gap-x-5">
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          className="w-32 h-32 text-large"
          isBordered={true}
        />

        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="font-mono">Pending: {pending}</p>
          <p className="font-mono">Completed: {completed}</p>
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="font-mono">Pending: {pending}</p>
          <p className="font-mono">Completed: {completed}</p>
        </div>
      </div>
      {/* BADGES AREA */}

      <div>
        <Card className="flex">
          <CardHeader className="text-xl font-bold">Badges</CardHeader>
          <div className="p-3 gap-6 flex flex-wrap justify-around">
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              className="w-24 h-24 text-large"
            />

            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              className="w-24 h-24 text-large"
            />
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              className="w-24 h-24 text-large"
            />
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              className="w-24 h-24 text-large"
            />
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              className="w-24 h-24 text-large"
            />
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              className="w-24 h-24 text-large"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileContainer;
