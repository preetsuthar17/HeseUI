"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Input } from "./ui/input";

const components = [
  { id: "accordion", name: "Accordion" },
  { id: "alert-dialog", name: "Alert Dialog" },
  { id: "avatar", name: "Avatar" },
  { id: "button", name: "Button" },
  { id: "checkbox", name: "Checkbox" },
  { id: "checkbox-group", name: "Checkbox Group" },
  { id: "collapsible", name: "Collapsible" },
  { id: "context-menu", name: "Context Menu" },
  { id: "dialog", name: "Dialog" },
  { id: "field", name: "Field" },
  { id: "fieldset", name: "Fieldset" },
  { id: "form", name: "Form" },
  { id: "input", name: "Input" },
  { id: "menu", name: "Menu" },
  { id: "menubar", name: "Menubar" },
  { id: "meter", name: "Meter" },
  { id: "navigation-menu", name: "Navigation Menu" },
  { id: "number-field", name: "Number Field" },
  { id: "popover", name: "Popover" },
  { id: "preview-card", name: "Preview Card" },
  { id: "progress", name: "Progress" },
  { id: "radio", name: "Radio" },
  { id: "scroll-area", name: "Scroll Area" },
  { id: "select", name: "Select" },
  { id: "separator", name: "Separator" },
  { id: "slider", name: "Slider" },
  { id: "switch", name: "Switch" },
  { id: "tabs", name: "Tabs" },
  { id: "toast", name: "Toast" },
  { id: "toggle", name: "Toggle" },
  { id: "toggle-group", name: "Toggle Group" },
  { id: "toolbar", name: "Toolbar" },
  { id: "tooltip", name: "Tooltip" },
] as const;

const SKELETON_COUNT = 30;
const LOADING_TIMEOUT_MS = 600;

const NavigationSkeleton = memo(function NavigationSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
        <div
          aria-hidden="true"
          className="h-6 w-full animate-pulse rounded bg-muted"
          key={`skeleton-${components.at(idx)?.id ?? idx}`}
        />
      ))}
    </div>
  );
});

const NavigationLinks = memo(function NavigationLinks({
  activeComponent,
  search,
  focusedIndex,
  setFocusedIndex,
}: {
  activeComponent: string;
  search: string;
  focusedIndex: number;
  setFocusedIndex: (index: number) => void;
}) {
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, _componentId: string, index: number) => {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          setFocusedIndex(Math.min(index + 1, filteredComponents.length - 1));
          break;
        case "ArrowUp":
          event.preventDefault();
          setFocusedIndex(Math.max(index - 1, 0));
          break;
      }
    },
    [setFocusedIndex, search]
  );

  const filteredComponents = useMemo(() => {
    if (!search.trim()) {
      return components;
    }

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
      aria-label="Component navigation"
      className="flex flex-col gap-1"
      role="listbox"
    >
      {filteredComponents.map((component, index) => (
        <Link
          aria-selected={activeComponent === component.id}
          className={`w-full rounded-sm px-2 py-1 text-left text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
            activeComponent === component.id
              ? "bg-accent font-medium text-foreground"
              : focusedIndex === index
                ? "bg-accent/50 text-foreground"
                : "text-muted-foreground hover:bg-accent/30 hover:text-foreground"
          }`}
          href={`/components/${component.id}`}
          key={component.id}
          onFocus={() => setFocusedIndex(index)}
          onKeyDown={(e) => handleKeyDown(e, component.id, index)}
          onMouseEnter={() => setFocusedIndex(index)}
          role="option"
          tabIndex={focusedIndex === index ? 0 : -1}
        >
          {component.name}
        </Link>
      ))}
    </div>
  );
});

const SearchInput = memo(function SearchInput({
  search,
  onSearchChange,
  onSearchKeyDown,
  searchInputRef,
  keyboardShortcut,
}: {
  search: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchKeyDown: (e: React.KeyboardEvent) => void;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
  keyboardShortcut: string;
}) {
  return (
    <div className="relative mb-3">
      <Input
        aria-label="Search components"
        onChange={onSearchChange}
        onKeyDown={onSearchKeyDown}
        placeholder={"Search components..."}
        ref={searchInputRef}
        type="text"
        value={search}
      />
      <kbd className="-translate-y-1/2 pointer-events-none absolute top-1/2 right-2 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-medium font-mono text-muted-foreground text-xs">
        {keyboardShortcut}
      </kbd>
    </div>
  );
});

export const ComponentNavigation = memo(function ComponentNavigation() {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  const activeComponent = useMemo(() => {
    const match = pathname.match(/\/components\/(.+)/);
    return match ? match[1] : "";
  }, [pathname]);

  const isMac = useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return navigator.platform.toUpperCase().indexOf("MAC") >= 0;
  }, []);

  const keyboardShortcut = useMemo(() => {
    return isMac ? "⌘K" : "Ctrl+K";
  }, [isMac]);

  const handleGlobalKeyDown = useCallback((event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      event.preventDefault();
      searchInputRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => {
      document.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [handleGlobalKeyDown]);

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () => setIsLoading(false),
      LOADING_TIMEOUT_MS
    );

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      setFocusedIndex(0);
    },
    []
  );

  const handleSearchKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setSearch("");
      searchInputRef.current?.blur();
    }
  }, []);

  return (
    <nav className="flex max-h-screen flex-col p-4">
      <SearchInput
        keyboardShortcut={keyboardShortcut}
        onSearchChange={handleSearchChange}
        onSearchKeyDown={handleSearchKeyDown}
        search={search}
        searchInputRef={searchInputRef}
      />
      {isLoading ? (
        <NavigationSkeleton />
      ) : (
        <NavigationLinks
          activeComponent={activeComponent}
          focusedIndex={focusedIndex}
          search={search}
          setFocusedIndex={setFocusedIndex}
        />
      )}
    </nav>
  );
});
