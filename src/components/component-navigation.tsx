'use client';

import { useEffect, useRef, useState } from 'react';

type ComponentNavigationProps = {
  onItemClick?: () => void;
};

const components = [
  { id: 'accordion', name: 'Accordion' },
  { id: 'alert-dialog', name: 'Alert Dialog' },
  { id: 'avatar', name: 'Avatar' },
  { id: 'checkbox', name: 'Checkbox' },
  { id: 'checkbox-group', name: 'Checkbox Group' },
  { id: 'collapsible', name: 'Collapsible' },
  { id: 'context-menu', name: 'Context Menu' },
  { id: 'dialog', name: 'Dialog' },
  { id: 'field', name: 'Field' },
  { id: 'fieldset', name: 'Fieldset' },
  { id: 'form', name: 'Form' },
  { id: 'input', name: 'Input' },
  { id: 'menu', name: 'Menu' },
  { id: 'menubar', name: 'Menubar' },
  { id: 'meter', name: 'Meter' },
  { id: 'navigationmenu', name: 'Navigation Menu' },
  { id: 'numberfield', name: 'Number Field' },
  { id: 'popover', name: 'Popover' },
  { id: 'previewcard', name: 'Preview Card' },
  { id: 'progress', name: 'Progress' },
  { id: 'radio', name: 'Radio' },
  { id: 'scrollarea', name: 'Scroll Area' },
  { id: 'select', name: 'Select' },
  { id: 'separator', name: 'Separator' },
  { id: 'slider', name: 'Slider' },
  { id: 'switch', name: 'Switch' },
  { id: 'tabs', name: 'Tabs' },
  { id: 'toast', name: 'Toast' },
  { id: 'toggle', name: 'Toggle' },
  { id: 'togglegroup', name: 'Toggle Group' },
  { id: 'toolbar', name: 'Toolbar' },
  { id: 'tooltip', name: 'Tooltip' },
] as const;

const SCROLL_OFFSET = 100;
const SKELETON_COUNT = 30;
const LOADING_TIMEOUT_MS = 600;

function NavigationSkeleton() {
  return (
    <div className="flex flex-col gap-1">
      {Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
        <div
          aria-hidden="true"
          className="h-6 w-full animate-pulse rounded bg-muted"
          key={`skeleton-${components.at(idx)?.id ?? idx}`}
        />
      ))}
    </div>
  );
}

function NavigationLinks({
  activeSection,
  onItemClick,
  setActiveSection,
  toggleSection,
}: {
  activeSection: string;
  onItemClick?: () => void;
  setActiveSection: (id: string) => void;
  toggleSection: (componentId: string) => void;
}) {
  function handleClick(componentId: string) {
    setActiveSection(componentId);
    toggleSection(componentId);
    if (onItemClick) {
      onItemClick();
    }
  }

  return (
    <div className="flex flex-col gap-1">
      {components.map((component) => (
        <button
          className={`w-full px-2 py-1 text-left text-sm transition-colors ${
            activeSection === component.id
              ? 'font-medium text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
          key={component.id}
          onClick={() => handleClick(component.id)}
          type="button"
        >
          {component.name}
        </button>
      ))}
    </div>
  );
}

export function ComponentNavigation({ onItemClick }: ComponentNavigationProps) {
  const [activeSection, setActiveSection] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll('[data-component-section]');
      const scrollPosition = window.scrollY + SCROLL_OFFSET;
      for (const section of sections) {
        const element = section as HTMLElement;
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(element.dataset.componentSection ?? '');
          break;
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    timeoutRef.current = setTimeout(
      () => setIsLoading(false),
      LOADING_TIMEOUT_MS
    );

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function toggleSection(componentId: string) {
    const section = document.querySelector(
      `[data-component-section="${componentId}"]`
    ) as HTMLElement | null;
    if (!section) {
      return;
    }
    const trigger = section.querySelector(
      '[data-panel-open], button, h2'
    ) as HTMLElement | null;
    if (trigger) {
      trigger.click();
    }
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <nav className="flex max-h-screen flex-col p-4">
      {isLoading ? (
        <NavigationSkeleton />
      ) : (
        <NavigationLinks
          activeSection={activeSection}
          onItemClick={onItemClick}
          setActiveSection={setActiveSection}
          toggleSection={toggleSection}
        />
      )}
    </nav>
  );
}
