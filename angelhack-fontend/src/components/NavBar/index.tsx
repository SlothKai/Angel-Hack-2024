import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLogout = async () => {};

  const pathname = usePathname();

  return (
    <>
      <Navbar isBlurred={false}>
        <NavbarBrand>
          <Link href="/">
            <img
              src="images/iterLogo.svg"
              alt="Iter Logo"
              className="h-14 w-auto"
            />
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link
              color={pathname === "/opps" ? "primary" : "foreground"}
              href="/opps"
            >
              Opportunities
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {/* {currentUser ? ( */}
          <>
            <NavbarItem className="flex items-center">
              <Link href="/profile">
                <img
                  src={
                    // currentUser.photoURL ||
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
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default NavBar;
