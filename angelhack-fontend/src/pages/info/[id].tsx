import { detailedOops } from "@/fetchers";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import {
  Button,
  Image,
  Link,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import moment from "moment";
import { useRouter } from "next/router";

interface IRows {
  key: string;
  date: string;
  time: string;
  location: string;
  register_open: string;
}

interface ITime {
  seconds: number;
  nanoseconds: number;
}

let rows: IRows[];

const convertDateToString = (timestamp: ITime) => {
  const date = new Date(timestamp.seconds * 1000);
  return moment(date).format("MMMM Do YYYY");
};

const convertToTime = (timestamp: ITime) => {
  const date = new Date(timestamp.seconds * 1000);
  return moment(date).format("h:mm a");
};

const InfoPage = () => {
  const router = useRouter();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["detailedOops", router.query.id],
    queryFn: async () => {
      if (typeof router.query.id === "string") {
        return await detailedOops(router.query.id);
      } else {
        throw new Error("Invalid id");
      }
    },
    initialData: [],
    retry: 1,
  });

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
      label: "REGISTRATION",
    },
  ];

  if (data.length !== 0) {
    rows = [
      {
        key: data.id,
        date: convertDateToString(data.datetimeStart),
        time: `${convertToTime(data.datetimeStart)} - ${convertToTime(
          data.datetimeEnd
        )}`,
        location: data.venue,
        register_open: convertDateToString(data.datetimeStart),
      },
    ];
  }

  if (isError) {
    return <div className="flex justify-center items-center">Invalid ID.</div>;
  }

  if (isLoading || data.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="space-y-8 flex flex-col justify-center">
        <Link href="/">
          <Button color="primary" variant="light" className="w-fit">
            <ArrowLeftIcon className="w-6 h-6 mr-2" />
            Back
          </Button>
        </Link>
        <div className="mx-auto shadow-xl">
          <Image src={data.image} width={700} height={300} alt={data.name} />
        </div>
        <div
          className={clsx(
            "flex flex-wrap justify-between items-center pr-4 sticky top-[64px] z-10 py-2 bg-gray-100"
          )}
        >
          <div>
            <p className="md:text-4xl text-3xl font-bold text-slate-900">
              {data.name}
            </p>
            <p className="text-slate-400 font-mono">
              {data.company} | {data.category}
            </p>
          </div>
          <p className="uppercase text-slate-700 font-semibold">
            {`${convertDateToString(
              data.datetimeStart
            )} - ${convertDateToString(data.datetimeEnd)}`}
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold pb-2 text-slate-700">About</p>
          <p className="ml-1 border-l-3 outline-offset-3 px-4 border-slate-700">
            {data.description}
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold pb-2 text-slate-700">
            Additional Information
          </p>

          <div className="hidden md:block">
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
          <div className="md:hidden flex flex-wrap xs:gap-7 sm:gap-6">
            <div>
              <p className="text-xl font-bold pb-2 text-slate-700">Date</p>
              <p className=" border-slate-700">
                {convertDateToString(data.datetimeStart)}
              </p>
            </div>
            <div>
              <p className="text-xl font-bold pb-2 text-slate-700">Time</p>
              <p className=" border-slate-700">
                {`${convertToTime(data.datetimeStart)} - ${convertToTime(
                  data.datetimeEnd
                )}`}
              </p>
            </div>
            <div>
              <p className="text-xl font-bold pb-2 text-slate-700">Location</p>
              <p className=" border-slate-700">{data.venue}</p>
            </div>
            <div>
              <p className="text-xl font-bold pb-2 text-slate-700">
                Registration opens
              </p>
              <p className=" border-slate-700">
                {convertDateToString(data.datetimeStart)}
              </p>
            </div>
          </div>
        </div>

        <button
          className="w-fit inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          onClick={() => {}}
        >
          Apply
        </button>
      </div>
    </>
  );
};

export default InfoPage;

function setAlertMessage(arg0: string) {
  throw new Error("Function not implemented.");
}
