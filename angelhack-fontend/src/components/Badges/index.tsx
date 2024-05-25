import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

interface BadgeComponentProps {
  name: string;
  description: string;
  obtained: boolean;
}

const BadgeComponent: React.FC<BadgeComponentProps> = ({
  name,
  description,
  obtained,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };
  return (
    <>
      <div
        className="flex flex-col items-center gap-3"
        onClick={() => {
          handleOpen();
        }}
      >
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          className="w-24 h-24  shrink-0"
          isDisabled={!obtained}
        />
        <p className="text-slate-700 max-w-[70%] text-center">{name}</p>
      </div>

      <Modal size="md" isOpen={isOpen} onClose={onClose} className="p-4">
        <ModalContent className="flex flex-col justify-center items-center">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 justify-center items-center">
                <Avatar
                  src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                  className="w-24 h-24 text-large shrink-0"
                  isDisabled={!obtained}
                />
                <p className="text-slate-700">{name}</p>
              </ModalHeader>
              <ModalBody>
                <p className="text-center">{description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Share
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BadgeComponent;
