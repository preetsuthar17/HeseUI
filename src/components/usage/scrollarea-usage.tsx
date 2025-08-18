'use client';

import {
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@/components/ui/scrollarea';

const BOX_COUNT = 10;

export function ScrollAreaDemo() {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Vertical</h3>
        <ScrollArea className="h-[8.5rem] w-96 max-w-[calc(100vw-8rem)]">
          <ScrollAreaViewport>
            <div className="flex flex-col gap-4 py-3 pr-6 pl-4 text-foreground text-sm leading-[1.375rem]">
              <p>
                Vernacular architecture is building done outside any academic
                tradition, and without professional guidance. It is not a
                particular architectural movement or style, but rather a broad
                category, encompassing a wide range and variety of building
                types, with differing methods of construction, from around the
                world, both historical and extant and classical and modern.
                Vernacular architecture constitutes 95% of the world's built
                environment, as estimated in 1995 by Amos Rapoport, as measured
                against the small percentage of new buildings every year
                designed by architects and built by engineers.
              </p>
              <p>
                This type of architecture usually serves immediate, local needs,
                is constrained by the materials available in its particular
                region and reflects local traditions and cultural practices. The
                study of vernacular architecture does not examine formally
                schooled architects, but instead that of the design skills and
                tradition of local builders, who were rarely given any
                attribution for the work. More recently, vernacular architecture
                has been examined by designers and the building industry in an
                effort to be more energy conscious with contemporary design and
                construction—part of a broader interest in sustainable design.
              </p>
            </div>
          </ScrollAreaViewport>
          <ScrollAreaScrollbar>
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
        </ScrollArea>
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Horizontal</h3>
        <ScrollArea className="w-96 max-w-[calc(100vw-8rem)]">
          <ScrollAreaViewport>
            <div className="flex w-[48rem] gap-4 p-4 text-foreground">
              {Array.from({ length: BOX_COUNT }).map((_, i) => {
                const key = `box-${i}`;
                return (
                  <div
                    className="h-24 w-48 shrink-0 rounded border border-border bg-muted/50"
                    key={key}
                  />
                );
              })}
            </div>
          </ScrollAreaViewport>
          <ScrollAreaScrollbar
            className="overflow-hidden"
            orientation="horizontal"
          >
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
        </ScrollArea>
      </div>
    </div>
  );
}
