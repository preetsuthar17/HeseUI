'use client';

import type React from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarPortal,
  MenubarPositioner,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { MenubarInstallation } from '../installation/menubar-installation';
import { Separator } from '../ui/separator';

export function MenubarDemo() {
  return (
    <div className='flex flex-col gap-8'>
      <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarPortal>
          <MenubarPositioner sideOffset={6}>
            <MenubarContent>
              <MenubarItem onClick={handleClick}>New</MenubarItem>
              <MenubarItem onClick={handleClick}>Open</MenubarItem>
              <MenubarItem onClick={handleClick}>Save</MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>
                  Export
                  <ChevronRightIcon />
                </MenubarSubTrigger>
                <MenubarPortal>
                  <MenubarPositioner alignOffset={-4}>
                    <MenubarSubContent>
                      <MenubarItem onClick={handleClick}>PDF</MenubarItem>
                      <MenubarItem onClick={handleClick}>PNG</MenubarItem>
                      <MenubarItem onClick={handleClick}>SVG</MenubarItem>
                    </MenubarSubContent>
                  </MenubarPositioner>
                </MenubarPortal>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem onClick={handleClick}>Print</MenubarItem>
            </MenubarContent>
          </MenubarPositioner>
        </MenubarPortal>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarPortal>
          <MenubarPositioner sideOffset={6}>
            <MenubarContent>
              <MenubarItem onClick={handleClick}>Cut</MenubarItem>
              <MenubarItem onClick={handleClick}>Copy</MenubarItem>
              <MenubarItem onClick={handleClick}>Paste</MenubarItem>
            </MenubarContent>
          </MenubarPositioner>
        </MenubarPortal>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarPortal>
          <MenubarPositioner sideOffset={6}>
            <MenubarContent>
              <MenubarItem onClick={handleClick}>Zoom In</MenubarItem>
              <MenubarItem onClick={handleClick}>Zoom Out</MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>
                  Layout
                  <ChevronRightIcon />
                </MenubarSubTrigger>
                <MenubarPortal>
                  <MenubarPositioner alignOffset={-4}>
                    <MenubarSubContent>
                      <MenubarItem onClick={handleClick}>
                        Single Page
                      </MenubarItem>
                      <MenubarItem onClick={handleClick}>Two Pages</MenubarItem>
                      <MenubarItem onClick={handleClick}>
                        Continuous
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarPositioner>
                </MenubarPortal>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem onClick={handleClick}>Full Screen</MenubarItem>
            </MenubarContent>
          </MenubarPositioner>
        </MenubarPortal>
      </MenubarMenu>

      <MenubarMenu disabled>
        <MenubarTrigger>Help</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
    <Separator/>
    <MenubarInstallation/>
    </div>
  );
}

function handleClick(event: React.MouseEvent<HTMLElement>) {
  alert(`${event.currentTarget.textContent} clicked`);
}

function ChevronRightIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" {...props}>
      <title>Open submenu</title>
      <path
        d="M6 12L10 8L6 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
