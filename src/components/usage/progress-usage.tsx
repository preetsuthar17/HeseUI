"use client";

import React from "react";
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/components/ui/progress";
import { ProgressInstallation } from "../installation/progress-installation";
import { Separator } from "../ui/separator";

const INITIAL_PROGRESS = 20;
const PROGRESS_MAX = 100;
const PROGRESS_STEP_MAX = 25;
const TICK_MS = 1000;

export function ProgressDemo() {
  const [value, setValue] = React.useState(INITIAL_PROGRESS);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((current) =>
        Math.min(
          PROGRESS_MAX,
          Math.round(current + Math.random() * PROGRESS_STEP_MAX)
        )
      );
    }, TICK_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <Progress className="grid w-48 grid-cols-2 gap-y-2" value={value}>
        <ProgressLabel>Export data</ProgressLabel>
        <ProgressValue />
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>
      <Separator />
      <ProgressInstallation />
    </div>
  );
}
