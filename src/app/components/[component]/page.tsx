'use client';

import { Loader, ArrowUp, ArrowLeft } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ComponentSection } from '@/components/component-section';
import { LazyMount } from '@/components/lazy-mount';
import { useEffect, useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';
import { getComponentMetadata } from '@/lib/component-metadata';

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

const componentConfigs = {
  accordion: {
    title: 'Accordion',
    component: dynamic(
      () =>
        import('@/components/usage/accordion-usage').then(
          (m) => m.AccordionDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/accordion',
    docs_ref: 'https://base-ui.com/react/components/accordion#api-reference',
    v0_url: 'https://heseui.com/r/accordion.json',
  },
  'alert-dialog': {
    title: 'Alert Dialog',
    component: dynamic(
      () =>
        import('@/components/usage/alertdialog-usage').then(
          (m) => m.AlertDialogDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/alert-dialog',
    docs_ref: 'https://base-ui.com/react/components/alert-dialog#api-reference',
    v0_url: 'https://heseui.com/r/alert-dialog.json',
  },
  avatar: {
    title: 'Avatar',
    component: dynamic(
      () => import('@/components/usage/avatar-usage').then((m) => m.AvatarDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/avatar',
    docs_ref: 'https://base-ui.com/react/components/avatar#api-reference',
    v0_url: 'https://heseui.com/r/avatar.json',
  },
  button: {
    title: 'Button',
    component: dynamic(
      () => import('@/components/usage/button-usage').then((m) => m.ButtonDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    v0_url: 'https://heseui.com/r/button.json',
  },
  checkbox: {
    title: 'Checkbox',
    component: dynamic(
      () =>
        import('@/components/usage/checkbox-usage').then((m) => m.CheckboxDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/checkbox',
    docs_ref: 'https://base-ui.com/react/components/checkbox#api-reference',
    v0_url: 'https://heseui.com/r/checkbox.json',
  },
  'checkbox-group': {
    title: 'Checkbox Group',
    component: dynamic(
      () =>
        import('@/components/usage/checkbox-group-usage').then(
          (m) => m.CheckboxGroupDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/checkbox-group',
    docs_ref:
      'https://base-ui.com/react/components/checkbox-group#api-reference',
    v0_url: 'https://heseui.com/r/checkbox-group.json',
  },
  collapsible: {
    title: 'Collapsible',
    component: dynamic(
      () =>
        import('@/components/usage/collapsible-usage').then(
          (m) => m.CollapsibleDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/collapsible',
    docs_ref: 'https://base-ui.com/react/components/collapsible#api-reference',
    v0_url: 'https://heseui.com/r/collapsible.json',
  },
  'context-menu': {
    title: 'Context Menu',
    component: dynamic(
      () =>
        import('@/components/usage/context-menu-usage').then(
          (m) => m.ContextMenuDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/context-menu',
    docs_ref: 'https://base-ui.com/react/components/context-menu#api-reference',
    v0_url: 'https://heseui.com/r/context-menu.json',
  },
  dialog: {
    title: 'Dialog',
    component: dynamic(
      () => import('@/components/usage/dialog-usage').then((m) => m.DialogDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/dialog',
    docs_ref: 'https://base-ui.com/react/components/dialog#api-reference',
    v0_url: 'https://heseui.com/r/dialog.json',
  },
  field: {
    title: 'Field',
    component: dynamic(
      () => import('@/components/usage/field-usage').then((m) => m.FieldDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/field',
    docs_ref: 'https://base-ui.com/react/components/field#api-reference',
    v0_url: 'https://heseui.com/r/field.json',
  },
  fieldset: {
    title: 'Fieldset',
    component: dynamic(
      () =>
        import('@/components/usage/fieldset-usage').then((m) => m.FieldsetDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/fieldset',
    docs_ref: 'https://base-ui.com/react/components/fieldset#api-reference',
    v0_url: 'https://heseui.com/r/fieldset.json',
  },
  form: {
    title: 'Form',
    component: dynamic(
      () => import('@/components/usage/form-usage').then((m) => m.FormDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/form',
    docs_ref: 'https://base-ui.com/react/components/form#api-reference',
    v0_url: 'https://heseui.com/r/form.json',
  },
  input: {
    title: 'Input',
    component: dynamic(
      () => import('@/components/usage/input-usage').then((m) => m.InputDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/input',
    docs_ref: 'https://base-ui.com/react/components/input#api-reference',
    v0_url: 'https://heseui.com/r/input.json',
  },
  menu: {
    title: 'Menu',
    component: dynamic(
      () => import('@/components/usage/menu-usage').then((m) => m.MenuDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/menu',
    docs_ref: 'https://base-ui.com/react/components/menu#api-reference',
    v0_url: 'https://heseui.com/r/menu.json',
  },
  menubar: {
    title: 'Menubar',
    component: dynamic(
      () =>
        import('@/components/usage/menubar-usage').then((m) => m.MenubarDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/menubar',
    docs_ref: 'https://base-ui.com/react/components/menubar#api-reference',
    v0_url: 'https://heseui.com/r/menubar.json',
  },
  meter: {
    title: 'Meter',
    component: dynamic(
      () => import('@/components/usage/meter-usage').then((m) => m.MeterDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/meter',
    docs_ref: 'https://base-ui.com/react/components/meter#api-reference',
    v0_url: 'https://heseui.com/r/meter.json',
  },
  'navigation-menu': {
    title: 'Navigation Menu',
    component: dynamic(
      () =>
        import('@/components/usage/navigationmenu-usage').then(
          (m) => m.NavigationMenuDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/navigation-menu',
    docs_ref:
      'https://base-ui.com/react/components/navigation-menu#api-reference',
    v0_url: 'https://heseui.com/r/navigation%20menu.json',
  },
  'number-field': {
    title: 'Number Field',
    component: dynamic(
      () =>
        import('@/components/usage/numberfield-usage').then(
          (m) => m.NumberFieldDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/number-field',
    docs_ref: 'https://base-ui.com/react/components/number-field#api-reference',
    v0_url: 'https://heseui.com/r/number%20field.json',
  },
  popover: {
    title: 'Popover',
    component: dynamic(
      () =>
        import('@/components/usage/popover-usage').then((m) => m.PopoverDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/popover',
    docs_ref: 'https://base-ui.com/react/components/popover#api-reference',
    v0_url: 'https://heseui.com/r/popover.json',
  },
  'preview-card': {
    title: 'Preview Card',
    component: dynamic(
      () =>
        import('@/components/usage/preview-card-usage').then(
          (m) => m.PreviewCardDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/preview-card',
    docs_ref: 'https://base-ui.com/react/components/preview-card#api-reference',
    v0_url: 'https://heseui.com/r/preview-card.json',
  },
  progress: {
    title: 'Progress',
    component: dynamic(
      () =>
        import('@/components/usage/progress-usage').then((m) => m.ProgressDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/progress',
    docs_ref: 'https://base-ui.com/react/components/progress#api-reference',
    v0_url: 'https://heseui.com/r/progress.json',
  },
  radio: {
    title: 'Radio',
    component: dynamic(
      () =>
        import('@/components/usage/radio-usage').then((m) => m.RadioGroupDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/radio',
    docs_ref: 'https://base-ui.com/react/components/radio#api-reference',
    v0_url: 'https://heseui.com/r/radio.json',
  },
  'scroll-area': {
    title: 'Scroll Area',
    component: dynamic(
      () =>
        import('@/components/usage/scrollarea-usage').then(
          (m) => m.ScrollAreaDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/scroll-area',
    docs_ref: 'https://base-ui.com/react/components/scroll-area#api-reference',
    v0_url: 'https://heseui.com/r/scrollarea.json',
  },
  select: {
    title: 'Select',
    component: dynamic(
      () => import('@/components/usage/select-usage').then((m) => m.SelectDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/select',
    docs_ref: 'https://base-ui.com/react/components/select#api-reference',
    v0_url: 'https://heseui.com/r/select.json',
  },
  separator: {
    title: 'Separator',
    component: dynamic(
      () =>
        import('@/components/usage/separator-usage').then(
          (m) => m.SeparatorDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/separator',
    docs_ref: 'https://base-ui.com/react/components/separator#api-reference',
    v0_url: 'https://heseui.com/r/separator.json',
  },
  slider: {
    title: 'Slider',
    component: dynamic(
      () => import('@/components/usage/slider-usage').then((m) => m.SliderDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/slider',
    docs_ref: 'https://base-ui.com/react/components/slider#api-reference',
    v0_url: 'https://heseui.com/r/slider.json',
  },
  switch: {
    title: 'Switch',
    component: dynamic(
      () => import('@/components/usage/switch-usage').then((m) => m.SwitchDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/switch',
    docs_ref: 'https://base-ui.com/react/components/switch#api-reference',
    v0_url: 'https://heseui.com/r/switch.json',
  },
  tabs: {
    title: 'Tabs',
    component: dynamic(
      () => import('@/components/usage/tabs-usage').then((m) => m.TabsDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/tabs',
    docs_ref: 'https://base-ui.com/react/components/tabs#api-reference',
    v0_url: 'https://heseui.com/r/tabs.json',
  },
  toast: {
    title: 'Toast',
    component: dynamic(
      () => import('@/components/usage/toast-usage').then((m) => m.ToastDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/toast',
    docs_ref: 'https://base-ui.com/react/components/toast#api-reference',
    v0_url: 'https://heseui.com/r/toast.json',
  },
  toggle: {
    title: 'Toggle',
    component: dynamic(
      () => import('@/components/usage/toggle-usage').then((m) => m.ToggleDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/toggle',
    docs_ref: 'https://base-ui.com/react/components/toggle#api-reference',
    v0_url: 'https://heseui.com/r/toggle.json',
  },
  'toggle-group': {
    title: 'Toggle Group',
    component: dynamic(
      () =>
        import('@/components/usage/togglegroup-usage').then(
          (m) => m.ToggleGroupDemo
        ),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/toggle-group',
    docs_ref: 'https://base-ui.com/react/components/toggle-group#api-reference',
    v0_url: 'https://heseui.com/r/togglegroup.json',
  },
  toolbar: {
    title: 'Toolbar',
    component: dynamic(
      () =>
        import('@/components/usage/toolbar-usage').then((m) => m.ToolbarDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/toolbar',
    docs_ref: 'https://base-ui.com/react/components/toolbar#api-reference',
    v0_url: 'https://heseui.com/r/toolbar.json',
  },
  tooltip: {
    title: 'Tooltip',
    component: dynamic(
      () =>
        import('@/components/usage/tooltip-usage').then((m) => m.TooltipDemo),
      { ssr: false, loading: () => <RectanglePlaceholder /> }
    ),
    api_ref: 'https://base-ui.com/react/components/tooltip',
    docs_ref: 'https://base-ui.com/react/components/tooltip#api-reference',
    v0_url: 'https://heseui.com/r/tooltip.json',
  },
} as const;

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

export default function ComponentPage() {
  const params = useParams();
  const componentId = params.component as string;

  const componentConfig =
    componentConfigs[componentId as keyof typeof componentConfigs];

  if (!componentConfig) {
    return (
      <div className="mx-auto min-h-dvh">
        <div className="relative flex min-w-0 flex-col gap-8 py-12">
          <header className="px-4 md:px-12 flex w-full flex-wrap justify-center gap-4 md:justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="size-4" />
                </Button>
              </Link>
              <h1 className="text-2xl font-semibold">Component Not Found</h1>
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
          <main className="px-4 md:px-12">
            <div className="text-center py-12">
              <h2 className="text-xl font-medium mb-2">Component not found</h2>
              <p className="text-muted-foreground mb-4">
                The component "{componentId}" doesn't exist.
              </p>
              <Link href="/">
                <Button>Back to Components</Button>
              </Link>
            </div>
          </main>
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
        </div>
      </div>
    );
  }

  const {
    title,
    component: Component,
    api_ref,
    docs_ref,
    v0_url,
  } = componentConfig as any;

  return (
    <>
      <div className="relative flex min-w-0 min-h-dvh flex-col gap-8 py-12 max-w-screen-xl mx-auto w-full">
        <SideDivider position="left" />
        <SideDivider position="right" />
        <header className="px-4 md:px-12 flex w-full flex-wrap justify-between gap-4 ">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Link href="/">
                <ArrowLeft className="size-4" />
              </Link>
            </Button>
            <h1 className="text-2xl font-semibold">{title}</h1>
          </div>
          <ThemeToggle />
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

        <main className="px-4 md:px-12">
          <ComponentSection
            id={componentId}
            title={title}
            api_ref={api_ref}
            docs_ref={docs_ref}
            v0_url={v0_url}
          >
            <LazyMount
              fallback={
                <div className="h-48 animate-pulse rounded border border-border" />
              }
            >
              <Component />
            </LazyMount>
          </ComponentSection>
        </main>
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
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Sponsor
              </Link>
            </div>
          </div>
        </footer>
      </div>
      <ScrollToTopButton />
    </>
  );
}
