import Card from "@/src/app/components/card";
import Link from "next/link";
import React from "react";

const ArchivedNotifications = () => {
  return <Card>
    <div>Archived Notifications</div>
    <Link href={"/complex-dashboard"}>Dashboard</Link>
  </Card>;
};

export default ArchivedNotifications;
