'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Input } from './ui/input';

type ComponentNavigationProps = {
  onItemClick?: () => void;
};

const components = [
  { id: 'accordion', name: 'Accordion' },
  { id: 'alert-dialog', name: 'Alert Dialog' },
  { id: 'avatar', name: 'Avatar' },
  { id: 'button', name: 'Button' },
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
  search,
  focusedIndex,
  setFocusedIndex,
}: {
  activeSection: string;
  onItemClick?: () => void;
  setActiveSection: (id: string) => void;
  toggleSection: (componentId: string) => void;
  search: string;
  focusedIndex: number;
  setFocusedIndex: (index: number) => void;
}) {
  const handleClick = useCallback(
    (componentId: string) => {
      setActiveSection(componentId);
      toggleSection(componentId);
      if (onItemClick) {
        onItemClick();
      }
    },
    [setActiveSection, toggleSection, onItemClick]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, componentId: string, index: number) => {
      switch (event.key) {
        case 'Enter':
        case ' ':
          event.preventDefault();
          handleClick(componentId);
          break;
        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex(Math.min(index + 1, filteredComponents.length - 1));
          break;
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex(Math.max(index - 1, 0));
          break;
      }
    },
    [handleClick, setFocusedIndex]
  );

  const filteredComponents = useMemo(() => {
    if (!search.trim()) return components;

    const searchLower = search.toLowerCase();
    return components.filter(
      (component) =>
        component.name.toLowerCase().includes(searchLower) ||
        component.id.toLowerCase().includes(searchLower)
    );
  }, [search]);

  if (filteredComponents.length === 0) {
    return (
      <div className="px-2 py-2 text-muted-foreground text-sm">
        No components found
      </div>
    );
  }

  return (
    <div
      className="flex flex-col gap-1"
      role="listbox"
      aria-label="Component navigation"
    >
      {filteredComponents.map((component, index) => (
        <button
          className={`w-full px-2 py-1 text-left text-sm transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
            activeSection === component.id
              ? 'font-medium text-foreground bg-accent'
              : focusedIndex === index
                ? 'text-foreground bg-accent/50'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent/30'
          }`}
          key={component.id}
          onClick={() => handleClick(component.id)}
          onKeyDown={(e) => handleKeyDown(e, component.id, index)}
          onFocus={() => setFocusedIndex(index)}
          onMouseEnter={() => setFocusedIndex(index)}
          type="button"
          role="option"
          aria-selected={activeSection === component.id}
          tabIndex={focusedIndex === index ? 0 : -1}
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
  const [search, setSearch] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const isMac = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  }, []);

  const keyboardShortcut = isMac ? '⌘K' : 'Ctrl+K';

  const handleGlobalKeyDown = useCallback((event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      searchInputRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => {
      document.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, [handleGlobalKeyDown]);

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

    const throttledHandleScroll = throttle(handleScroll, 16);
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll();

    timeoutRef.current = setTimeout(
      () => setIsLoading(false),
      LOADING_TIMEOUT_MS
    );

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const toggleSection = useCallback((componentId: string) => {
    const section = document.querySelector(
      `[data-component-section="${componentId}"]`
    ) as HTMLElement | null;

    if (!section) return;

    const trigger = section.querySelector(
      '[data-panel-open], button, h2'
    ) as HTMLElement | null;

    if (trigger) {
      trigger.click();
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      setFocusedIndex(0);
    },
    []
  );

  const handleSearchKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSearch('');
      searchInputRef.current?.blur();
    }
  }, []);

  return (
    <nav className="flex max-h-screen flex-col p-4">
      <div className="mb-3 relative">
        <Input
          ref={searchInputRef}
          aria-label="Search components"
          onChange={handleSearchChange}
          onKeyDown={handleSearchKeyDown}
          placeholder={`Search components...`}
          type="text"
          value={search}
        />
        <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground">
          {isMac ? (
            <>
              <span className="text-xs">⌘</span>K
            </>
          ) : (
            <>Ctrl+K</>
          )}
        </kbd>
      </div>
      {isLoading ? (
        <NavigationSkeleton />
      ) : (
        <NavigationLinks
          activeSection={activeSection}
          focusedIndex={focusedIndex}
          onItemClick={onItemClick}
          search={search}
          setActiveSection={setActiveSection}
          setFocusedIndex={setFocusedIndex}
          toggleSection={toggleSection}
        />
      )}
    </nav>
  );
}

function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
