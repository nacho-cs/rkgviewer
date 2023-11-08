import { rkg } from "@/stores/rkg";
import { useStore } from "@nanostores/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MiiStruct from "@/mii.ksy";

export function Mii() {
  const $rkg = JSON.parse(useStore(rkg));
  const miiData = Object.values($rkg.driverMiiData);
  const mii = new MiiStruct(new Uint16Array(miiData).buffer);
  console.log(mii);


  return (
    <Card className="h-fit w-fit min-w-[350px]">
      <CardHeader>
        <CardTitle>Mii</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li>Mii name: {mii.miiName}</li>
          <li>
            Gender:{" "}
            {mii.isGirl ? (
              <span className="text-pink-500"></span>
            ) : (
              <span className="text-blue-500">Male</span>
            )}
          </li>
          <li>Created by: {mii.creatorName}</li>
          <li>Birthday: {mii.birthMonth}/{mii.birthDay}</li>
          <li>Has a mole? {mii.moleEnable ? "Yes" : "No"}</li>
        </ul>
      </CardContent>
    </Card> 
  );
}
