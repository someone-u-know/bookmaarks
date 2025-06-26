import Image from "next/image";
import Button from "@/components/button";
import UserProfileIcon from "@/components/userProfile";
import SecondaryButton from "@/components/secondaryButton";

export default function Home() {
  return (
    <div>
      <Button>Add New BookMaarks</Button>
      <UserProfileIcon></UserProfileIcon>
      <SecondaryButton>Check our Extension</SecondaryButton>
    </div>
  );
}
