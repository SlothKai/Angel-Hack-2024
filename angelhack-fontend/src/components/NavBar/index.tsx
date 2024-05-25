import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';

const NavBar = () => {

  const { currentUser, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <Navbar isBlurred={false}>
        <NavbarBrand>
          <Link href="/" className="font-bold text-black">
            <p className="font-bold text-inherit">Iter</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {currentUser ? (
            <>
              <NavbarItem className="flex items-center">
                <img
                  src={currentUser.photoURL || "https://c.ndtvimg.com/2024-04/2885brr4_kim-jong-un_625x300_11_April_24.jpeg"}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </NavbarItem>
              <NavbarItem>
                <Button onClick={handleLogout} color="primary" variant="flat">
                  Sign Out
                </Button>
              </NavbarItem>
            </>
          ) : (
            <>
              <NavbarItem className="hidden lg:flex">
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
