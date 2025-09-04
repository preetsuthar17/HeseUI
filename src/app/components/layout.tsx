"use client";

import { PersistentSidebar } from "@/components/persistent-sidebar";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto min-h-dvh">
      <div className="relative grid grid-cols-1 gap-2 lg:grid-cols-[270px_minmax(0,1fr)]">
        <PersistentSidebar />
        <main className="relative flex min-w-0 flex-col">{children}</main>
      </div>
    </div>
  );
}
