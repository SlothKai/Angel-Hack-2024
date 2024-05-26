// components/ProtectedRoute.tsx
import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/router";
import { auth, firebase } from "../../../lib/firebase";
import { Spinner } from "@nextui-org/react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<firebase.User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

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

  return user ? <>{children}</> : null;
};

export default ProtectedRoute;
