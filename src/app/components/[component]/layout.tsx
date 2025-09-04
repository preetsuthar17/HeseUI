import type { Metadata } from "next";
import { getAllComponentMetadata } from "@/lib/component-metadata";
import { generateComponentMetadata } from "@/lib/generate-metadata";

type ComponentLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ component: string }>;
};

export async function generateStaticParams() {
  const allComponents = getAllComponentMetadata();
  return allComponents.map((component) => ({
    component: component.id,
  }));
}

export async function generateMetadata({
  params,
}: ComponentLayoutProps): Promise<Metadata> {
  const { component } = await params;
  return generateComponentMetadata(component);
}

export default function ComponentLayout({ children }: ComponentLayoutProps) {
  return children;
}
