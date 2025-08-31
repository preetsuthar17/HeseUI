'use client';

import { ArrowUp, Loader } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { PersistentSidebar } from '@/components/persistent-sidebar';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Footer } from './components/footer';

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
      aria-label="Scroll to top"
      className={`fixed right-6 bottom-6 z-50 rounded-full p-2 transition-opacity duration-300 ${
        visible
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      }`}
      onClick={scrollToTop}
      size="icon"
      type="button"
      variant="default"
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
        <main className="relative flex min-w-0 flex-col gap-8 py-8">
          <SideDivider position="left" />
          <SideDivider position="right" />
          <header className="flex w-full flex-wrap justify-center gap-4 px-4 md:justify-between md:px-12">
            <div className="flex flex-col gap-2">
              <h1 className="flex flex-wrap items-center justify-center gap-2 text-balance font-semibold text-3xl tracking-tight sm:text-4xl md:justify-start">
                HeseUI
              </h1>
              <p className="text-center text-lg text-muted-foreground md:text-left">
                Foundation components built on top of Base UI using shadcn
                <span className="inline-flex w-fit items-center px-2 align-middle">
                  <Image
                    alt="shadcn"
                    className="inline-block rounded-full align-middle"
                    height={24}
                    src="https://github.com/shadcn.png"
                    style={{
                      verticalAlign: 'middle',
                      display: 'inline',
                      lineHeight: 1,
                    }}
                    width={24}
                  />
                </span>
                design system for modern web applications
              </p>
            </div>
            <div className="flex h-fit flex-row flex-wrap items-center justify-center gap-1">
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
              <h2 className="mb-2 font-semibold text-2xl">Components</h2>
              <p className="text-muted-foreground">
                Explore our collection of accessible and customizable UI
                components
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
              {components.map((component) => (
                <Link
                  className="group rounded-lg border border-border p-4 text-center transition-all duration-200 hover:border-primary/50 hover:bg-accent/50"
                  href={`/components/${component.id}`}
                  key={component.id}
                >
                  <div className="font-medium text-sm transition-colors group-hover:text-primary">
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

          <Footer />
        </main>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
