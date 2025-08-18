'use client';

import NextLink from 'next/link';
import type React from 'react';
import {
  NavigationMenu,
  NavigationMenuArrow,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPopup,
  NavigationMenuPortal,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigationmenu';
import { NavigationMenuInstallation } from '../installation/navigationmenu-installation';
import { Separator } from '../ui/separator';

const components = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
] as const;

export function NavigationMenuDemo() {
  const triggerCls = navigationMenuTriggerStyle();

  return (
    <div className='flex flex-col gap-8'>
      <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink
                  className="flex h-full w-full select-none flex-col justify-end gap-2 rounded bg-secondary p-6 no-underline outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  render={<NextLink href="/" />}
                >
                  <div className="font-medium text-lg">basecn/ui</div>
                  <p className="text-muted-foreground text-sm leading-tight">
                    Beautifully designed components built with Tailwind CSS.
                  </p>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Base UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  href={component.href}
                  key={component.title}
                  title={component.title}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className={triggerCls}
            render={<NextLink href="/docs" />}
          >
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuPortal>
        <NavigationMenuPositioner
          className="z-50 box-border h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)] transition-[top,left,right,bottom] [--duration:0.35s] [--easing:cubic-bezier(0.22,1,0.36,1)] before:absolute before:content-[''] data-[instant]:transition-none data-[side=bottom]:before:top-[-10px] data-[side=left]:before:top-0 data-[side=right]:before:top-0 data-[side=bottom]:before:right-0 data-[side=left]:before:right-[-10px] data-[side=top]:before:right-0 data-[side=left]:before:bottom-0 data-[side=right]:before:bottom-0 data-[side=top]:before:bottom-[-10px] data-[side=bottom]:before:left-0 data-[side=right]:before:left-[-10px] data-[side=top]:before:left-0 data-[side=bottom]:before:h-2.5 data-[side=top]:before:h-2.5 data-[side=left]:before:w-2.5 data-[side=right]:before:w-2.5"
          collisionAvoidance={{ side: 'none' }}
          collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
          sideOffset={10}
        >
          <NavigationMenuPopup className="relative z-50 h-[var(--popup-height)] w-[var(--popup-width)] origin-[var(--transform-origin)] rounded border border-border bg-popover text-popover-foreground transition-[opacity,transform,width,height,scale,translate] duration-[var(--duration)] ease-[var(--easing)] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0">
            <NavigationMenuArrow className="data-[side=right]:-rotate-90 flex transition-[left] duration-[var(--duration)] ease-[var(--easing)] data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=top]:bottom-[-8px] data-[side=right]:left-[-13px] data-[side=left]:rotate-90 data-[side=top]:rotate-180" />
            <NavigationMenuViewport className="relative h-full w-full overflow-hidden" />
          </NavigationMenuPopup>
        </NavigationMenuPositioner>
      </NavigationMenuPortal>
    </NavigationMenu>
    <Separator/>
    <NavigationMenuInstallation/>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        className="block flex flex-col gap-2"
        render={<NextLink href={href} />}
      >
        <div className="font-medium text-sm leading-none">{title}</div>
        <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  );
}
