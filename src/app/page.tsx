import Image from "next/image";
import Button from "@/components/ui/button";
import UserProfileIcon from "@/components/ui/userProfile";
import SecondaryButton from "@/components/ui/secondaryButton";

export default function Home() {
  return (
    <div>
      <Button>Add New BookMaarks</Button>
      <UserProfileIcon></UserProfileIcon>
      <SecondaryButton>Check our Extension</SecondaryButton>
    </div>
  );
}
