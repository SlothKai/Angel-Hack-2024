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
import clsx from "clsx";
import { doc, getDoc } from "firebase/firestore";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db, firebase, auth } from "../../../lib/firebase";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { onAuthStateChanged, User } from "firebase/auth";

// Define the structure of your Firestore documents
interface Opportunity {
  name: string;
  datetimeStart: firebase.firestore.Timestamp;
  datetimeEnd: firebase.firestore.Timestamp;
  venue: string;
  registrationOpen: firebase.firestore.Timestamp;
  image: string;
  company: string;
  description: string;
  category: string;
}

const InfoPage = () => {
  const router = useRouter();
  const [opportunity, setOpportunity] = useState<Opportunity | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (router.query.id) {
      const getOpportunity = async () => {
        try {
          const docRef = doc(db, "opportunities", router.query.id as string);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setOpportunity(docSnap.data() as Opportunity);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching document:", error);
        } finally {
          setLoading(false);
        }
      };

      getOpportunity();
    }
  }, [router.query.id]);

  if (loading) {
    // return <div>Loading...</div>;
    return (
      <>
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      </>
    );
  }

  if (!opportunity) {
    return <div>No data found</div>;
  }

  const rows = [
    {
      key: "date",
      date: moment(opportunity.datetimeStart.toDate()).format("MMMM Do YYYY"),
      time:
        moment(opportunity.datetimeStart.toDate()).format("h:mm a") +
        " to " +
        moment(opportunity.datetimeEnd.toDate()).format("h:mm a"),
      location: opportunity.venue,
      register_open: moment(opportunity.datetimeStart.toDate()).format(
        "MMMM Do YYYY"
      ),
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
      label: "REGISTRATION",
    },
  ];

  const applyForOpportunity = async () => {

    if (user) {
      try {
        const response = await fetch("https://applyevents-vwc6whnw4a-as.a.run.app", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ eventId: router.query.id, userId: user.uid }),
        });

        if (response.ok) {
          alert("Successfully applied!")
          setTimeout(() => setAlertMessage(""), 3000);
        } else {
          console.error("Error applying for the event");
        }
      } catch (error) {
        console.error("Error applying for the event:", error);
      }
    } else {
      router.push("/login"); // Redirect to login if user is not logged in
    }
  };

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
          <Image
            src={opportunity.image}
            width={700}
            height={300}
            alt={opportunity.name}
          />
        </div>
        <div
          className={clsx(
            "flex flex-wrap justify-between items-center pr-4 sticky top-[64px] z-10 py-2 bg-gray-100/70 backdrop-blur-xl"
          )}
        >
          <div>
            <p className="md:text-4xl text-3xl font-bold text-slate-900">
              {opportunity.name}
            </p>
            <p className="text-slate-400 font-mono">
              {opportunity.company} | {opportunity.category}
            </p>
          </div>
          <p className="uppercase text-slate-700 font-semibold">
            {moment(opportunity.datetimeStart.toDate()).format("MMMM Do YYYY")}{" "}
            - {moment(opportunity.datetimeEnd.toDate()).format("MMMM Do YYYY")}
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold pb-2 text-slate-700">About</p>
          <p className="ml-1 border-l-3 outline-offset-3 px-4 border-slate-700">
            {opportunity.description}
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
                {moment(opportunity.datetimeStart.toDate()).format(
                  "MMMM Do YYYY"
                )}
              </p>
            </div>
            <div>
              <p className="text-xl font-bold pb-2 text-slate-700">Time</p>
              <p className=" border-slate-700">
                {moment(opportunity.datetimeStart.toDate()).format("h:mm a") +
                  " to " +
                  moment(opportunity.datetimeEnd.toDate()).format("h:mm a")}
              </p>
            </div>
            <div>
              <p className="text-xl font-bold pb-2 text-slate-700">Location</p>
              <p className=" border-slate-700">{opportunity.venue}</p>
            </div>
            <div>
              <p className="text-xl font-bold pb-2 text-slate-700">
                Registration opens
              </p>
              <p className=" border-slate-700">
                {moment(opportunity.datetimeStart.toDate()).format(
                  "MMMM Do YYYY"
                )}
              </p>
            </div>
          </div>
        </div>

        <Link
          className="w-fit inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          onClick={()=>{
            console.log("Test")
            applyForOpportunity()
          }}
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
