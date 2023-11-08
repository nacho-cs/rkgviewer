import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { rkg } from "@/stores/rkg";
import stringify from "fast-safe-stringify";
import MkwGhosts from "@/mkw_ghosts.ksy";

export function GhostSelector() {
  const inputRef = useRef();

  return (
    <Card className="w-96 min-w-fit">
      <CardHeader>
        <CardTitle>Select a ghost</CardTitle>
        <CardDescription>Please select an .rkg file</CardDescription>
        <CardContent>
          <form
            className="gap-5 flex flex-col"
            action="/view"
            onSubmit={() => {
              const file = inputRef.current.files[0];
              const reader = new FileReader();
              reader.onload = e => {
                const contents = new MkwGhosts(e.target.result);
                rkg.set(stringify(contents));
              };
              reader.readAsArrayBuffer(file);
            }}>
            <Input
              type="file"
              className="w-fit"
              ref={inputRef}
              required
              accept=".rkg"
            />
            <Button variant="outline" type="submit" className="w-fit">
              Submit
            </Button>
          </form>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
