// components/SignOut.tsx
import { useRouter } from "next/router";
import { auth } from "../../../lib/firebase";

const SignOut: React.FC = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await auth.signOut();
    router.push("/login");
  };

  return (
    <button
      onClick={handleSignOut}
      className="text-sm text-blue-600 hover:underline"
    >
      Sign Out
    </button>
  );
};

export default SignOut;
