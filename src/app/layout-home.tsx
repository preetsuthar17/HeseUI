import { generateHomeMetadata } from '@/lib/generate-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generateHomeMetadata();

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
