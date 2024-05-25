import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { useRouter } from "next/router";
import { User, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../lib/firebase";

const NavBar = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <>
      <Navbar isBlurred={false}>
        <NavbarBrand>
        <Link href="/">
          <img src="images/iterLogo.svg" alt="Iter Logo" className="h-14 w-auto" />
        </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Opportunities
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {currentUser ? (
            <>
              <NavbarItem className="flex items-center">
                <Link href="/profile">
                  <img
                    src={
                      currentUser.photoURL ||
                      "https://i.pravatar.cc/150?u=a04258114e29026708c"
                    }
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Button onClick={handleLogout} color="primary" variant="flat">
                  Sign Out
                </Button>
              </NavbarItem>
            </>
          ) : (
            <>
              <NavbarItem className="flex">
                <Link href="/login">Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color="primary" href="/signup" variant="flat">
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          )}
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default NavBar;
