import { getAllComponentMetadata } from "@/lib/component-metadata";
import { ComponentPageClient } from "./component-page-client";

export async function generateStaticParams() {
  const allComponents = getAllComponentMetadata();
  return allComponents.map((component) => ({
    component: component.id,
  }));
}

export default function ComponentPage() {
  return <ComponentPageClient />;
}
