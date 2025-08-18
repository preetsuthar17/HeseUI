import CodeBlock from "../code-block";

export function MenuInstallation() {
    return(
        <>
            <p>Install component using the CLI</p>
            <CodeBlock
                code={`pnpm dlx shadcn@latest add http://base.hextaui.com/r/menu.json`}
                lang="bash"
            />
            <p>example usage</p>
            <CodeBlock
                code={`import React from 'react';
import {
  Menu,
  MenuArrow,
  MenuCheckboxItem,
  MenuCheckboxItemIndicator,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPortal,
  MenuPositioner,
  MenuRadioGroup,
  MenuRadioItem,
  MenuRadioItemIndicator,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from '@/components/ui/menu';`}
                lang="tsx"
            />
            
            <CodeBlock
                code={`export function MenuDemo() {
  const [_hoverValue, _setHoverValue] = React.useState('Get Up!');
  const [showMinimap, setShowMinimap] = React.useState(true);
  const [showSearch, setShowSearch] = React.useState(true);
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [sortValue, setSortValue] = React.useState('date');

  const triggerCls =
    'inline-flex items-center justify-center whitespace-nowrap rounded font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2';

  return (
    <div className="flex flex-wrap gap-8">
      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Basic Menu</h3>
        <Menu>
          <MenuTrigger className={triggerCls}>
            Song <ChevronDownIcon className="-mr-1 ml-1" />
          </MenuTrigger>
          <MenuPortal>
            <MenuPositioner sideOffset={8}>
              <MenuContent>
                <MenuArrow />
                <MenuItem>Add to Library</MenuItem>
                <MenuItem>Add to Playlist</MenuItem>
                <MenuSeparator />
                <MenuItem>Play Next</MenuItem>
                <MenuItem>Play Last</MenuItem>
                <MenuSeparator />
                <MenuItem>Favorite</MenuItem>
                <MenuItem>Share</MenuItem>
              </MenuContent>
            </MenuPositioner>
          </MenuPortal>
        </Menu>
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Open on Hover</h3>
        <Menu openOnHover>
          <MenuTrigger className={triggerCls}>
            Add to playlist <ChevronDownIcon className="-mr-1 ml-1" />
          </MenuTrigger>
          <MenuPortal>
            <MenuPositioner sideOffset={8}>
              <MenuContent>
                <MenuArrow />
                <MenuItem>Get Up!</MenuItem>
                <MenuItem>Inside Out</MenuItem>
                <MenuItem>Night Beats</MenuItem>
                <MenuSeparator />
                <MenuItem>New playlist…</MenuItem>
              </MenuContent>
            </MenuPositioner>
          </MenuPortal>
        </Menu>
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Checkbox Items</h3>
        <Menu>
          <MenuTrigger className={triggerCls}>
            Workspace <ChevronDownIcon className="-mr-1 ml-1" />
          </MenuTrigger>
          <MenuPortal>
            <MenuPositioner sideOffset={8}>
              <MenuContent>
                <MenuArrow />
                <MenuCheckboxItem
                  checked={showMinimap}
                  onCheckedChange={setShowMinimap}
                >
                  <MenuCheckboxItemIndicator>
                    <CheckIcon className="size-3" />
                  </MenuCheckboxItemIndicator>
                  <span>Minimap</span>
                </MenuCheckboxItem>
                <MenuCheckboxItem
                  checked={showSearch}
                  onCheckedChange={setShowSearch}
                >
                  <MenuCheckboxItemIndicator>
                    <CheckIcon className="size-3" />
                  </MenuCheckboxItemIndicator>
                  <span>Search</span>
                </MenuCheckboxItem>
                <MenuCheckboxItem
                  checked={showSidebar}
                  onCheckedChange={setShowSidebar}
                >
                  <MenuCheckboxItemIndicator>
                    <CheckIcon className="size-3" />
                  </MenuCheckboxItemIndicator>
                  <span>Sidebar</span>
                </MenuCheckboxItem>
              </MenuContent>
            </MenuPositioner>
          </MenuPortal>
        </Menu>
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Radio Items</h3>
        <Menu>
          <MenuTrigger className={triggerCls}>
            Sort <ChevronDownIcon className="-mr-1 ml-1" />
          </MenuTrigger>
          <MenuPortal>
            <MenuPositioner sideOffset={8}>
              <MenuContent>
                <MenuArrow />
                <MenuRadioGroup onValueChange={setSortValue} value={sortValue}>
                  <MenuRadioItem value="date">
                    <MenuRadioItemIndicator>
                      <CheckIcon className="size-3" />
                    </MenuRadioItemIndicator>
                    <span>Date</span>
                  </MenuRadioItem>
                  <MenuRadioItem value="name">
                    <MenuRadioItemIndicator>
                      <CheckIcon className="size-3" />
                    </MenuRadioItemIndicator>
                    <span>Name</span>
                  </MenuRadioItem>
                  <MenuRadioItem value="type">
                    <MenuRadioItemIndicator>
                      <CheckIcon className="size-3" />
                    </MenuRadioItemIndicator>
                    <span>Type</span>
                  </MenuRadioItem>
                </MenuRadioGroup>
              </MenuContent>
            </MenuPositioner>
          </MenuPortal>
        </Menu>
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Groups</h3>
        <Menu>
          <MenuTrigger className={triggerCls}>
            View <ChevronDownIcon className="-mr-1 ml-1" />
          </MenuTrigger>
          <MenuPortal>
            <MenuPositioner sideOffset={8}>
              <MenuContent>
                <MenuArrow />
                <MenuGroup>
                  <MenuGroupLabel>Sort</MenuGroupLabel>
                  <MenuRadioGroup
                    onValueChange={setSortValue}
                    value={sortValue}
                  >
                    <MenuRadioItem value="date">
                      <MenuRadioItemIndicator>
                        <CheckIcon className="size-3" />
                      </MenuRadioItemIndicator>
                      <span>Date</span>
                    </MenuRadioItem>
                    <MenuRadioItem value="name">
                      <MenuRadioItemIndicator>
                        <CheckIcon className="size-3" />
                      </MenuRadioItemIndicator>
                      <span>Name</span>
                    </MenuRadioItem>
                    <MenuRadioItem value="type">
                      <MenuRadioItemIndicator>
                        <CheckIcon className="size-3" />
                      </MenuRadioItemIndicator>
                      <span>Type</span>
                    </MenuRadioItem>
                  </MenuRadioGroup>
                </MenuGroup>

                <MenuSeparator />

                <MenuGroup>
                  <MenuGroupLabel>Workspace</MenuGroupLabel>
                  <MenuCheckboxItem
                    checked={showMinimap}
                    onCheckedChange={setShowMinimap}
                  >
                    <MenuCheckboxItemIndicator>
                      <CheckIcon className="size-3" />
                    </MenuCheckboxItemIndicator>
                    <span>Minimap</span>
                  </MenuCheckboxItem>
                  <MenuCheckboxItem
                    checked={showSearch}
                    onCheckedChange={setShowSearch}
                  >
                    <MenuCheckboxItemIndicator>
                      <CheckIcon className="size-3" />
                    </MenuCheckboxItemIndicator>
                    <span>Search</span>
                  </MenuCheckboxItem>
                  <MenuCheckboxItem
                    checked={showSidebar}
                    onCheckedChange={setShowSidebar}
                  >
                    <MenuCheckboxItemIndicator>
                      <CheckIcon className="size-3" />
                    </MenuCheckboxItemIndicator>
                    <span>Sidebar</span>
                  </MenuCheckboxItem>
                </MenuGroup>
              </MenuContent>
            </MenuPositioner>
          </MenuPortal>
        </Menu>
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Submenu</h3>
        <Menu>
          <MenuTrigger className={triggerCls}>
            Song <ChevronDownIcon className="-mr-1 ml-1" />
          </MenuTrigger>
          <MenuPortal>
            <MenuPositioner sideOffset={8}>
              <MenuContent>
                <MenuArrow />
                <MenuItem>Add to Library</MenuItem>
                <MenuSub>
                  <MenuSubTrigger>Add to Playlist</MenuSubTrigger>
                  <MenuPortal>
                    <MenuPositioner alignOffset={-4} sideOffset={-4}>
                      <MenuSubContent>
                        <MenuItem>Get Up!</MenuItem>
                        <MenuItem>Inside Out</MenuItem>
                        <MenuItem>Night Beats</MenuItem>
                        <MenuSeparator />
                        <MenuItem>New playlist…</MenuItem>
                      </MenuSubContent>
                    </MenuPositioner>
                  </MenuPortal>
                </MenuSub>
                <MenuSeparator />
                <MenuItem>Play Next</MenuItem>
                <MenuItem>Play Last</MenuItem>
                <MenuSeparator />
                <MenuItem>Favorite</MenuItem>
                <MenuItem>Share</MenuItem>
              </MenuContent>
            </MenuPositioner>
          </MenuPortal>
        </Menu>
      </div>
    </div>
  );
}

function ChevronDownIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg fill="none" height="10" viewBox="0 0 10 10" width="10" {...props}>
      <title>Open menu</title>
      <path d="M1 3.5L5 7.5L9 3.5" stroke="currentcolor" strokeWidth="1.5" />
    </svg>
  );
}

function _ChevronRightIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg fill="none" height="10" viewBox="0 0 10 10" width="10" {...props}>
      <title>Open submenu</title>
      <path d="M3.5 9L7.5 5L3.5 1" stroke="currentcolor" strokeWidth="1.5" />
    </svg>
  );
}

function CheckIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentcolor"
      height="10"
      viewBox="0 0 10 10"
      width="10"
      {...props}
    >
      <title>Checked</title>
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
    </svg>
  );
}`}
                lang="tsx"
            />

        </>
    )
}
