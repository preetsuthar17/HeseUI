import CodeBlock from "../code-block";
import { ComponentInstallation } from "../component-installation";

export function ContextMenuInstallation() {
  return (
    <>
      <ComponentInstallation componentName="context-menu" />
      <p>example usage</p>
      <CodeBlock
        code={`import React from 'react';
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function ContextMenuDemo() {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [position, setPosition] = React.useState('bottom');

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 font-medium text-lg">Basic Context Menu</h3>
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[12rem] w-[15rem] items-center justify-center rounded border border-border bg-background text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuPortal>
            <ContextMenuPositioner>
              <ContextMenuContent>
                <ContextMenuItem>Profile</ContextMenuItem>
                <ContextMenuItem>Billing</ContextMenuItem>
                <ContextMenuItem>Team</ContextMenuItem>
                <ContextMenuItem>Subscription</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenuPositioner>
          </ContextMenuPortal>
        </ContextMenu>
      </div>

      <div>
        <h3 className="mb-4 font-medium text-lg">Context Menu with Submenu</h3>
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[12rem] w-[15rem] items-center justify-center rounded border border-border bg-background text-sm">
            Right click for submenu
          </ContextMenuTrigger>
          <ContextMenuPortal>
            <ContextMenuPositioner>
              <ContextMenuContent>
                <ContextMenuItem>Add to Library</ContextMenuItem>
                <ContextMenuSub>
                  <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
                  <ContextMenuPortal>
                    <ContextMenuPositioner>
                      <ContextMenuSubContent>
                        <ContextMenuItem>Get Up!</ContextMenuItem>
                        <ContextMenuItem>Inside Out</ContextMenuItem>
                        <ContextMenuItem>Night Beats</ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem>New playlist…</ContextMenuItem>
                      </ContextMenuSubContent>
                    </ContextMenuPositioner>
                  </ContextMenuPortal>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem>Play Next</ContextMenuItem>
                <ContextMenuItem>Play Last</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Favorite</ContextMenuItem>
                <ContextMenuItem>Share</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenuPositioner>
          </ContextMenuPortal>
        </ContextMenu>
      </div>

      <div>
        <h3 className="mb-4 font-medium text-lg">
          Context Menu with Checkboxes and Radio Items
        </h3>
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[12rem] w-[15rem] items-center justify-center rounded border border-border bg-background text-sm">
            Right click for options
          </ContextMenuTrigger>
          <ContextMenuPortal>
            <ContextMenuPositioner>
              <ContextMenuContent>
                <ContextMenuGroup>
                  <ContextMenuLabel>View Options</ContextMenuLabel>
                  <ContextMenuCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                  >
                    Show Status Bar
                  </ContextMenuCheckboxItem>
                  <ContextMenuCheckboxItem checked={false} disabled>
                    Show Activity Bar
                  </ContextMenuCheckboxItem>
                  <ContextMenuCheckboxItem checked={true}>
                    Show Panel
                  </ContextMenuCheckboxItem>
                </ContextMenuGroup>
                <ContextMenuSeparator />
                <ContextMenuGroup>
                  <ContextMenuLabel>Panel Position</ContextMenuLabel>
                  <ContextMenuRadioGroup
                    onValueChange={setPosition}
                    value={position}
                  >
                    <ContextMenuRadioItem value="top">Top</ContextMenuRadioItem>
                    <ContextMenuRadioItem value="bottom">
                      Bottom
                    </ContextMenuRadioItem>
                    <ContextMenuRadioItem value="right">
                      Right
                    </ContextMenuRadioItem>
                    <ContextMenuRadioItem value="left">
                      Left
                    </ContextMenuRadioItem>
                  </ContextMenuRadioGroup>
                </ContextMenuGroup>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  Copy
                  <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Paste
                  <ContextMenuShortcut>⌘V</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenuPositioner>
          </ContextMenuPortal>
        </ContextMenu>
      </div>
    </div>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
