import { generateComponentMetadata } from '@/lib/generate-metadata';
import type { Metadata } from 'next';

interface ComponentLayoutProps {
  children: React.ReactNode;
  params: Promise<{ component: string }>;
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
