'use client';

import { Loader, ArrowUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { PersistentSidebar } from '@/components/persistent-sidebar';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';

const components = [
  {
    id: 'accordion',
    name: 'Accordion',
    description: 'Collapsible content sections',
  },
  {
    id: 'alert-dialog',
    name: 'Alert Dialog',
    description: 'Modal dialogs for important actions',
  },
  {
    id: 'avatar',
    name: 'Avatar',
    description: 'User profile images and fallbacks',
  },
  {
    id: 'button',
    name: 'Button',
    description: 'Interactive buttons with various styles',
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    description: 'Single selection controls',
  },
  {
    id: 'checkbox-group',
    name: 'Checkbox Group',
    description: 'Multiple selection controls',
  },
  {
    id: 'collapsible',
    name: 'Collapsible',
    description: 'Expandable content areas',
  },
  {
    id: 'context-menu',
    name: 'Context Menu',
    description: 'Right-click context menus',
  },
  { id: 'dialog', name: 'Dialog', description: 'Modal dialogs and overlays' },
  {
    id: 'field',
    name: 'Field',
    description: 'Form field containers with labels',
  },
  { id: 'fieldset', name: 'Fieldset', description: 'Grouped form fields' },
  { id: 'form', name: 'Form', description: 'Form handling and validation' },
  { id: 'input', name: 'Input', description: 'Text input fields' },
  { id: 'menu', name: 'Menu', description: 'Dropdown menu components' },
  { id: 'menubar', name: 'Menubar', description: 'Horizontal menu bars' },
  { id: 'meter', name: 'Meter', description: 'Progress indicators and gauges' },
  {
    id: 'navigation-menu',
    name: 'Navigation Menu',
    description: 'Multi-level navigation',
  },
  {
    id: 'number-field',
    name: 'Number Field',
    description: 'Numeric input controls',
  },
  { id: 'popover', name: 'Popover', description: 'Floating content overlays' },
  {
    id: 'preview-card',
    name: 'Preview Card',
    description: 'Content preview cards',
  },
  {
    id: 'progress',
    name: 'Progress',
    description: 'Progress bars and indicators',
  },
  { id: 'radio', name: 'Radio', description: 'Single choice selection' },
  {
    id: 'scroll-area',
    name: 'Scroll Area',
    description: 'Custom scrollable areas',
  },
  { id: 'select', name: 'Select', description: 'Dropdown selection controls' },
  {
    id: 'separator',
    name: 'Separator',
    description: 'Visual dividers and separators',
  },
  { id: 'slider', name: 'Slider', description: 'Range selection controls' },
  { id: 'switch', name: 'Switch', description: 'Toggle switch controls' },
  { id: 'tabs', name: 'Tabs', description: 'Tabbed content organization' },
  { id: 'toast', name: 'Toast', description: 'Notification messages' },
  { id: 'toggle', name: 'Toggle', description: 'Toggle button controls' },
  {
    id: 'toggle-group',
    name: 'Toggle Group',
    description: 'Grouped toggle buttons',
  },
  {
    id: 'toolbar',
    name: 'Toolbar',
    description: 'Toolbar with action buttons',
  },
  { id: 'tooltip', name: 'Tooltip', description: 'Hover information tooltips' },
] as const;

function SideDivider({ position = 'left' }: { position?: 'left' | 'right' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-0 ${position === 'left' ? 'left-0' : 'right-0'} z-10 block h-full w-2 border-r border-l md:w-6`}
    >
      <div
        className="h-full w-full"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, var(--muted) 0 1px, transparent 1px 10px)',
          opacity: 1,
        }}
      />
    </div>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 200);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Button
      type="button"
      size="icon"
      variant="default"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 rounded-full p-2 duration-300 transition-opacity ${
        visible
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      }`}
    >
      <ArrowUp className="size-5" />
    </Button>
  );
}

export default function Home() {
  return (
    <div className="mx-auto min-h-dvh">
      <div className="relative grid grid-cols-1 gap-2 lg:grid-cols-[270px_minmax(0,1fr)]">
        <PersistentSidebar />
        <main className="relative flex min-w-0 flex-col gap-8 py-12">
          <SideDivider position="left" />
          <SideDivider position="right" />
          <header className="px-4 md:px-12 flex w-full flex-wrap justify-center gap-4 md:justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="flex flex-wrap items-center justify-center gap-2 text-balance font-semibold text-3xl tracking-tight sm:text-4xl md:justify-start">
                HeseUI
              </h1>
              <p className="text-muted-foreground md:text-left text-center text-lg">
                Foundation components built on top of Base UI using shadcn
                <span className="inline-flex items-center align-middle w-fit px-2">
                  <Image
                    src="https://github.com/shadcn.png"
                    className="rounded-full inline-block align-middle"
                    alt="shadcn"
                    width={24}
                    height={24}
                    style={{
                      verticalAlign: 'middle',
                      display: 'inline',
                      lineHeight: 1,
                    }}
                  />
                </span>
                design system for modern web applications
              </p>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center h-fit gap-1">
              <Button size="icon" variant="ghost">
                <Link href="/github">
                  <FaGithub className="size-4 shrink-0" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost">
                <Link href="/twitter">
                  <FaXTwitter className="size-4 shrink-0" />
                </Link>
              </Button>
              <ThemeToggle />
            </div>
          </header>

          <div className="relative h-6 border-y">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(-45deg, var(--muted) 0 1px, transparent 1px 10px)',
                opacity: 1,
              }}
            />
          </div>

          <div className="px-4 md:px-12">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Components</h2>
              <p className="text-muted-foreground">
                Explore our collection of accessible and customizable UI
                components
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {components.map((component) => (
                <Link
                  key={component.id}
                  href={`/components/${component.id}`}
                  className="group p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/50 transition-all duration-200 text-center"
                >
                  <div className="text-sm font-medium group-hover:text-primary transition-colors">
                    {component.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative h-6 border-y">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(-45deg, var(--muted) 0 1px, transparent 1px 10px)',
                opacity: 1,
              }}
            />
          </div>

          <footer className="px-4 md:px-12">
            <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
              <p className="text-muted-foreground">
                Built with ❤️ and ☕ by{' '}
                <Link href="https://x.com/preetsuthar17" className="underline">
                  Preet Suthar
                </Link>
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/preetsuthar17"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </Link>
                <Link
                  href="https://x.com/preetsuthar17"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twitter
                </Link>
                <Link
                  href="https://www.preetsuthar.me/sponsor"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sponsor
                </Link>
              </div>
            </div>
          </footer>
        </main>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
