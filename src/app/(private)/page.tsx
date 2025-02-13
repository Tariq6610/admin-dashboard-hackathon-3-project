import FetchData from "@/components/FetchData";
import { SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
    <FetchData />
    <SignOutButton />
    </>
  );
}
