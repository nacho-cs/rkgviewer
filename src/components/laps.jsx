import { useStore } from "@nanostores/react";
import { rkg } from "@/stores/rkg";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function Laps() {
  const $rkg = JSON.parse(useStore(rkg));
  const formatter = (a, b, c) =>
    new Date(a * 6e4 + b * 1e3 + c).toISOString().slice(14, 23);

  return (
    <Card className="w-fit min-w-[350px] h-fit">
      <CardHeader>
        <CardTitle>Splits</CardTitle>
        <CardDescription>
          Final Time:{" "}
          {formatter(
            $rkg.finishingTimeMinutes,
            $rkg.finishingTimeSeconds,
            $rkg.finishingTimeMilliseconds
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Lap</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {$rkg.lapSplitTime.map((lap, i) => {
              const lapTime = formatter(
                lap.finishingTimeMinutes,
                lap.finishingTimeSeconds,
                lap.finishingTimeMilliseconds
              );
              const didDrive = lapTime !== "00:00.000";

              return (
                <TableRow key={i}>
                  <TableCell
                    className={didDrive ? "" : "text-muted-foreground"}>
                    Lap {i + 1}
                  </TableCell>
                  <TableCell
                    className={didDrive ? "" : "text-muted-foreground"}>
                    {didDrive ? lapTime : "Not Driven"}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
