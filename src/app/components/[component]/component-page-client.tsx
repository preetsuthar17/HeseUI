'use client';

import { ArrowLeft, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';
import { ComponentSection } from '@/components/component-section';
import { CopyAndAskButton } from '@/components/copy-and-ask-button';
import { LazyMount } from '@/components/lazy-mount';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { componentConfigs } from '@/lib/component-configs';
import { Footer } from '../footer';

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

export function ComponentPageClient() {
  const params = useParams();
  const componentId = params.component as string;

  const componentConfig =
    componentConfigs[componentId as keyof typeof componentConfigs];

  if (!componentConfig) {
    return (
      <div className="mx-auto min-h-dvh">
        <div className="relative flex min-w-0 flex-col gap-8">
          <header className="flex w-full flex-wrap justify-center gap-4 px-4 md:justify-between md:px-12">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button size="icon" variant="ghost">
                  <ArrowLeft className="size-4" />
                </Button>
              </Link>
              <h1 className="font-semibold text-2xl">Component Not Found</h1>
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
          <main className="px-4 md:px-12">
            <div className="py-12 text-center">
              <h2 className="mb-2 font-medium text-xl">Component not found</h2>
              <p className="text-muted-foreground">
                The component "{componentId}" does not exist.
              </p>
            </div>
          </main>
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
      <div className="relative mx-auto flex min-h-dvh w-full min-w-0 max-w-screen-xl flex-col gap-8 py-8">
        <SideDivider position="left" />
        <SideDivider position="right" />
        <header className="flex w-full flex-wrap justify-between gap-4 px-4 md:px-12">
          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost">
              <Link href="/">
                <ArrowLeft className="size-4" />
              </Link>
            </Button>
            <h1 className="font-semibold text-2xl">{title}</h1>
          </div>
          <div className="flex items-center gap-2">
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

        <main className="px-4 md:px-12">
          <ComponentSection
            api_ref={api_ref}
            copyButton={<CopyAndAskButton componentId={componentId} />}
            docs_ref={docs_ref}
            id={componentId}
            title={title}
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
        <Footer />
      </div>
      <ScrollToTopButton />
    </>
  );
}
