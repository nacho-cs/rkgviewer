import { useStore } from "@nanostores/react";
import { rkg } from "@/stores/rkg";
import { vehicleMap, characterMap, controllerMap, trackMap } from "@/mappings";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { slug } from "github-slugger";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export function Character() {
  const $rkg = JSON.parse(useStore(rkg));
  const formatter = (a, b, c) => {
    console.log(`${a}/${b}/${c}`);
    return new Date(`${a}/${b}/${c}`).toLocaleDateString("en-US");
  };

  return (
    <Card className="w-fit min-w-[350px] h-fit">
      <CardHeader>
        <CardTitle>Track</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          {" "}
          <Popover>
            <PopoverTrigger>
              <img
                src={
                  characterMap[$rkg.characterId]
                    ? `/characters/${slug(characterMap[$rkg.characterId])}.png`
                    : "/characters/mii.png"
                }
                className="w-28"
              />
            </PopoverTrigger>
            <PopoverContent>
              {characterMap[$rkg.characterId] || "Mii"}
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <img
                src={`vehicles/${slug(vehicleMap[$rkg.vehicleId])}.png`}
                className="w-28"
              />
            </PopoverTrigger>
            <PopoverContent>{vehicleMap[$rkg.vehicleId]}</PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <img
                src={`tracks/${slug(trackMap[$rkg.trackId])}.png`}
                className="w-28"
              />
            </PopoverTrigger>
            <PopoverContent>{trackMap[$rkg.trackId]}</PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <img
                src={`controllers/${slug(
                  controllerMap[$rkg.controllerId]
                )}.png`}
                className="w-28"
              />
            </PopoverTrigger>
            <PopoverContent>{controllerMap[$rkg.controllerId]}</PopoverContent>
          </Popover>
        </div>

        <span></span>
        <ul>
          <li>
            Date Driven:{" "}
            {formatter(
              $rkg.ghostSentMonth,
              $rkg.ghostSentDay,
              $rkg.ghostSentYear
            )}
          </li>
          <li>Drift Type: {$rkg.driftType ? "Automatic" : "Manual"}</li>
        </ul>
      </CardContent>
    </Card>
  );
}
