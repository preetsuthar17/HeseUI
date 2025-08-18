'use client';

import React from 'react';
import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from '@/components/ui/slider';
import { SliderInstallation } from '../installation/slider-installation';
import { Separator } from '../ui/separator';

const RANGE_SINGLE_INITIAL = 25;
const RANGE_LOWER_INITIAL = 25;
const RANGE_UPPER_INITIAL = 45;
const RANGE_MIN = 0;
const RANGE_MAX = 100;
const RANGE_STEP = 1;

export function SliderDemo() {
  const [rangeValue, setRangeValue] = React.useState<[number, number]>([
    RANGE_LOWER_INITIAL,
    RANGE_UPPER_INITIAL,
  ]);
  return (
    <div className='flex flex-col gap-8'>
      <div className="flex flex-wrap gap-8">
      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Single value</h3>
        <Slider defaultValue={RANGE_SINGLE_INITIAL}>
          <SliderValue />
          <SliderControl>
            <SliderTrack>
              <SliderIndicator />
              <SliderThumb />
            </SliderTrack>
          </SliderControl>
        </Slider>
      </div>
      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Range</h3>
        <div className="flex items-center gap-2">
          <span className="min-w-8 text-muted-foreground text-sm">
            {rangeValue.at(0)}
          </span>
          <Slider
            max={RANGE_MAX}
            min={RANGE_MIN}
            onValueChange={(value) => {
              if (Array.isArray(value) && value.length === 2) {
                setRangeValue([value.at(0), value.at(1)]);
              }
            }}
            step={RANGE_STEP}
            value={rangeValue}
          >
            <SliderControl>
              <SliderTrack>
                <SliderIndicator />
                <SliderThumb />
                <SliderThumb />
              </SliderTrack>
            </SliderControl>
          </Slider>
          <span className="min-w-8 text-muted-foreground text-sm">
            {rangeValue.at(1)}
          </span>
        </div>
      </div>
    </div>
    <Separator/>
    <SliderInstallation/>
    </div>
  );
}
