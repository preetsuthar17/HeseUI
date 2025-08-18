'use client';

import NextImage from 'next/image';
import {
  PreviewCard,
  PreviewCardArrow,
  PreviewCardPopup,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardTrigger,
} from '@/components/ui/preview-card';
import { PreviewCardInstallation } from '../installation/preview-card-installation';
import { Separator } from '../ui/separator';

export function PreviewCardDemo() {
  return (
    <div className='flex flex-col gap-8'>
      <PreviewCard>
      <p className="max-w-64 text-balance text-base text-foreground">
        The principles of good{' '}
        <PreviewCardTrigger
          className="text-primary underline decoration-1 decoration-primary/60 underline-offset-2 outline-none hover:underline focus-visible:rounded focus-visible:no-underline focus-visible:ring-2 focus-visible:ring-ring data-[popup-open]:underline"
          href="https://en.wikipedia.org/wiki/Typography"
        >
          typography
        </PreviewCardTrigger>{' '}
        remain into the digital age.
      </p>

      <PreviewCardPortal>
        <PreviewCardPositioner sideOffset={8}>
          <PreviewCardPopup>
            <PreviewCardArrow />
            <NextImage
              alt="Station Hofplein signage in Rotterdam, Netherlands"
              className="block w-full rounded"
              height={300}
              src="https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300"
              unoptimized
              width={448}
            />
            <p className="text-pretty text-foreground text-sm">
              <strong>Typography</strong> is the art and science of arranging
              type to make written language clear, visually appealing, and
              effective in communication.
            </p>
          </PreviewCardPopup>
        </PreviewCardPositioner>
      </PreviewCardPortal>
    </PreviewCard>
    <Separator/>
    <PreviewCardInstallation/>
    </div>
  );
}
