'use client';

import { Loader, X, ArrowUp } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ComponentNavigation } from '@/components/component-navigation';
import { ComponentSection } from '@/components/component-section';
import { LazyMount } from '@/components/lazy-mount';
import { MobileNavigation } from '@/components/mobile-navigation';
import { Button } from '@/components/ui/button';
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@/components/ui/scrollarea';
import { Separator } from '@/components/ui/separator';
import React, { useEffect, useState } from 'react';

function RectanglePlaceholder() {
  return (
    <div
      className="flex h-48 w-full animate-pulse items-center justify-center rounded"
      style={{
        minHeight: '12rem',
        maxWidth: '100%',
      }}
    >
      <Loader className="size-4 animate-spin" />
    </div>
  );
}

const componentSections = [
  {
    id: 'accordion',
    title: 'Accordion',
    component: dynamic(
      () =>
        import('@/components/usage/accordion-usage').then(
          (m) => m.AccordionDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'alert-dialog',
    title: 'Alert Dialog',
    component: dynamic(
      () =>
        import('@/components/usage/alertdialog-usage').then(
          (m) => m.AlertDialogDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'avatar',
    title: 'Avatar',
    component: dynamic(
      () => import('@/components/usage/avatar-usage').then((m) => m.AvatarDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'button',
    title: 'Button',
    component: dynamic(
      () => import('@/components/usage/button-usage').then((m) => m.ButtonDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'checkbox',
    title: 'Checkbox',
    component: dynamic(
      () =>
        import('@/components/usage/checkbox-usage').then((m) => m.CheckboxDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'checkbox-group',
    title: 'Checkbox Group',
    component: dynamic(
      () =>
        import('@/components/usage/checkbox-group-usage').then(
          (m) => m.CheckboxGroupDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'collapsible',
    title: 'Collapsible',
    component: dynamic(
      () =>
        import('@/components/usage/collapsible-usage').then(
          (m) => m.CollapsibleDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'context-menu',
    title: 'Context Menu',
    component: dynamic(
      () =>
        import('@/components/usage/context-menu-usage').then(
          (m) => m.ContextMenuDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'dialog',
    title: 'Dialog',
    component: dynamic(
      () => import('@/components/usage/dialog-usage').then((m) => m.DialogDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'field',
    title: 'Field',
    component: dynamic(
      () => import('@/components/usage/field-usage').then((m) => m.FieldDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'fieldset',
    title: 'Fieldset',
    component: dynamic(
      () =>
        import('@/components/usage/fieldset-usage').then((m) => m.FieldsetDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'form',
    title: 'Form',
    component: dynamic(
      () => import('@/components/usage/form-usage').then((m) => m.FormDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'input',
    title: 'Input',
    component: dynamic(
      () => import('@/components/usage/input-usage').then((m) => m.InputDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'menu',
    title: 'Menu',
    component: dynamic(
      () => import('@/components/usage/menu-usage').then((m) => m.MenuDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'menubar',
    title: 'Menubar',
    component: dynamic(
      () =>
        import('@/components/usage/menubar-usage').then((m) => m.MenubarDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'meter',
    title: 'Meter',
    component: dynamic(
      () => import('@/components/usage/meter-usage').then((m) => m.MeterDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'navigationmenu',
    title: 'Navigation Menu',
    component: dynamic(
      () =>
        import('@/components/usage/navigationmenu-usage').then(
          (m) => m.NavigationMenuDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'popover',
    title: 'Popover',
    component: dynamic(
      () =>
        import('@/components/usage/popover-usage').then((m) => m.PopoverDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'numberfield',
    title: 'Number Field',
    component: dynamic(
      () =>
        import('@/components/usage/numberfield-usage').then(
          (m) => m.NumberFieldDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'previewcard',
    title: 'Preview Card',
    component: dynamic(
      () =>
        import('@/components/usage/preview-card-usage').then(
          (m) => m.PreviewCardDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'progress',
    title: 'Progress',
    component: dynamic(
      () =>
        import('@/components/usage/progress-usage').then((m) => m.ProgressDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'radio',
    title: 'Radio',
    component: dynamic(
      () =>
        import('@/components/usage/radio-usage').then((m) => m.RadioGroupDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'scrollarea',
    title: 'Scroll Area',
    component: dynamic(
      () =>
        import('@/components/usage/scrollarea-usage').then(
          (m) => m.ScrollAreaDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'select',
    title: 'Select',
    component: dynamic(
      () => import('@/components/usage/select-usage').then((m) => m.SelectDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'separator',
    title: 'Separator',
    component: dynamic(
      () =>
        import('@/components/usage/separator-usage').then(
          (m) => m.SeparatorDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'slider',
    title: 'Slider',
    component: dynamic(
      () => import('@/components/usage/slider-usage').then((m) => m.SliderDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'switch',
    title: 'Switch',
    component: dynamic(
      () => import('@/components/usage/switch-usage').then((m) => m.SwitchDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'tabs',
    title: 'Tabs',
    component: dynamic(
      () => import('@/components/usage/tabs-usage').then((m) => m.TabsDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'toast',
    title: 'Toast',
    component: dynamic(
      () => import('@/components/usage/toast-usage').then((m) => m.ToastDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'toggle',
    title: 'Toggle',
    component: dynamic(
      () => import('@/components/usage/toggle-usage').then((m) => m.ToggleDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'togglegroup',
    title: 'Toggle Group',
    component: dynamic(
      () =>
        import('@/components/usage/togglegroup-usage').then(
          (m) => m.ToggleGroupDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'toolbar',
    title: 'Toolbar',
    component: dynamic(
      () =>
        import('@/components/usage/toolbar-usage').then((m) => m.ToolbarDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
  {
    id: 'tooltip',
    title: 'Tooltip',
    component: dynamic(
      () =>
        import('@/components/usage/tooltip-usage').then((m) => m.TooltipDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
  },
];

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
      size='icon'
      variant='default'
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 rounded-full p-2 transition-opacity duration-300 ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <ArrowUp className="size-5" />
    </Button>
  );
}

export default function Home() {
  return (
    <div className="mx-auto min-h-dvh max-w-screen-2xl px-4 py-6 sm:px-6 lg:px-8">
      <MobileNavigation />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="sticky top-0 hidden h-[calc(100dvh-1.5rem)] overflow-visible lg:block">
          <ScrollArea className="h-full">
            <ScrollAreaViewport className="h-full border-transparent p-4 pb-8 outline-transparent">
              <ScrollAreaContent>
                <ComponentNavigation />
              </ScrollAreaContent>
              <ScrollAreaScrollbar className="bg-transparent">
                <ScrollAreaThumb className="bg-secondary" />
              </ScrollAreaScrollbar>
            </ScrollAreaViewport>
          </ScrollArea>
        </aside>
        <main className="flex min-w-0 flex-col gap-8 py-12 md:p-8 md:text-left">
          <header className="flex w-full flex-wrap justify-center gap-4 md:justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="flex flex-wrap items-center justify-center gap-2 text-balance font-semibold text-2xl tracking-tight sm:text-3xl md:justify-start">
                HeseUI
              </h1>
              <p className="text-muted-foreground text-center">
                components built on top of Base UI using shadcn design system.
              </p>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-2">
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
            </div>
          </header>
          <Separator />
          {componentSections.map(
            ({ id, title, component: SectionComponent }, idx) => (
              <section className="min-w-0" key={id}>
                <div className="flex flex-col justify-center gap-8">
                  <ComponentSection id={id} title={title}>
                    <LazyMount
                      fallback={
                        <div className="h-48 animate-pulse rounded border border-border" />
                      }
                    >
                      <SectionComponent />
                    </LazyMount>
                  </ComponentSection>
                  {idx < componentSections.length - 1 && <Separator />}
                </div>
              </section>
            )
          )}
          <footer>  
            <p className='text-muted-foreground'>
              Built with ❤️ and ☕ by <Link href="https://x.com/preetsuthar17" className='underline'>Preet Suthar</Link>
            </p>
          </footer>
        </main>
      </div>
      <ScrollToTopButton />
    </div>
  );
}