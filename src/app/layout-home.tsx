import type { Metadata } from 'next';
import { generateHomeMetadata } from '@/lib/generate-metadata';

export const metadata: Metadata = generateHomeMetadata();

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
