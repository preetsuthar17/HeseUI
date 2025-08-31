import { Metadata } from 'next';
import { getComponentMetadata } from './component-metadata';

export function generateComponentMetadata(componentId: string): Metadata {
  const metadata = getComponentMetadata(componentId);

  if (!metadata) {
    return {
      title: 'Component Not Found - HeseUI',
      description: 'The requested component could not be found.',
      openGraph: {
        title: 'Component Not Found - HeseUI',
        description: 'The requested component could not be found.',
        images: [
          {
            url: 'https://5xfmztgsig.ufs.sh/f/ZzCwT4wrsqrVnolNrseJFwZ6Ir5BcQLEugXSasRhNKymtCf8',
            width: 1200,
            height: 630,
            alt: 'HeseUI Component Not Found',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Component Not Found - HeseUI',
        description: 'The requested component could not be found.',
        images: [
          'https://5xfmztgsig.ufs.sh/f/ZzCwT4wrsqrVnolNrseJFwZ6Ir5BcQLEugXSasRhNKymtCf8',
        ],
      },
    };
  }

  const ogImageUrl = `/api/og?component=${componentId}`;
  const pageUrl = `https://www.heseui.com/components/${componentId}`;

  return {
    title: `${metadata.title}`,
    description: metadata.description,
    keywords: [
      ...metadata.keywords,
      'heseui',
      'react components',
      'ui library',
      'typescript',
      'tailwind css',
      'shadcn',
      'base ui',
    ],
    authors: [{ name: 'Preet Suthar', url: 'https://preetsuthar.me' }],
    creator: 'Preet Suthar - HeseUI',
    publisher: 'HeseUI Component Library',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://www.heseui.com'),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: pageUrl,
      siteName: 'HeseUI - Component Library',
      title: `${metadata.title} - HeseUI`,
      description: metadata.description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${metadata.title} - ${metadata.ogImage.subtitle}`,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@HeseUI',
      creator: '@preetsuthar17',
      title: `${metadata.title} - HeseUI`,
      description: metadata.description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'theme-color': '#ffffff',
      'color-scheme': 'light dark',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'apple-mobile-web-app-title': 'HeseUI',
      'application-name': 'HeseUI',
      'msapplication-TileColor': '#ffffff',
      'msapplication-config': '/browserconfig.xml',
    },
  };
}

export function generateHomeMetadata(): Metadata {
  return {
    title: {
      default:
        'HeseUI - Foundation components built on top of Base UI using shadcn design system for modern web applications.',
      template: '%s - HeseUI',
    },
    description:
      'Foundation components built on top of Base UI using shadcn design system for modern web applications.',
    applicationName: 'HeseUI',
    authors: [{ name: 'Preet Suthar', url: 'https://preetsuthar.me' }],
    creator: 'Preet Suthar - HeseUI',
    publisher: 'HeseUI Component Library',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://www.heseui.com'),
    alternates: {
      canonical: 'https://www.heseui.com',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://www.heseui.com',
      siteName: 'HeseUI - Component Library',
      title: 'HeseUI - Production-Ready Components Built on Base UI & Shadcn',
      description:
        'Foundation components built on top of Base UI using shadcn design system for modern web applications.',
      images: [
        {
          url: 'https://5xfmztgsig.ufs.sh/f/ZzCwT4wrsqrVnolNrseJFwZ6Ir5BcQLEugXSasRhNKymtCf8',
          width: 1200,
          height: 630,
          alt: 'HeseUI Component Library - Modern UI Components with shadcn Design System',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@HeseUI',
      creator: '@preetsuthar17',
      title: 'HeseUI - Modern Component Library with shadcn & Base UI',
      description:
        'Foundation components built on top of Base UI using shadcn design system for modern web applications.',
      images: [
        'https://5xfmztgsig.ufs.sh/f/ZzCwT4wrsqrVnolNrseJFwZ6Ir5BcQLEugXSasRhNKymtCf8',
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add these when you have them
      // google: 'your-google-site-verification-code',
      // yandex: 'your-yandex-verification-code',
      // yahoo: 'your-yahoo-site-verification-code',
    },
    icons: {
      icon: [{ url: '/favicon.ico' }],
    },
    keywords: [
      // Primary brand keywords
      'HeseUI',
      'hese ui',
      'heseui components',
      'heseui react',

      // React component library keywords
      'react component library',
      'react ui library',
      'react components',
      'react ui components',
      'react component framework',
      'react design system',
      'react ui framework',
      'modern react components',
      'production ready react components',
      'custom react components',
      'reusable react components',
      'react component collection',
      'enterprise react components',

      // Base UI related keywords
      'base ui components',
      'base ui react',
      'mui base components',
      'headless ui components',
      'unstyled react components',
      'accessible react components',
      'base ui library',

      // Shadcn related keywords
      'shadcn ui',
      'shadcn components',
      'shadcn react',
      'shadcn design system',
      'shadcn ui components',
      'shadcn library',
      'shadcn tailwind',
      'shadcn typescript',
      'shadcn/ui components',
      'shadcn clone',
      'shadcn alternative',

      // Tailwind CSS keywords
      'tailwind components',
      'tailwind ui',
      'tailwindcss components',
      'tailwind react components',
      'tailwind design system',
      'tailwind ui library',
      'tailwind css framework',
      'responsive tailwind components',
      'tailwind utility classes',
      'tailwind styled components',

      // TypeScript keywords
      'typescript react components',
      'typescript ui library',
      'typed react components',
      'typescript component library',
      'react typescript ui',
      'typescript design system',

      // UI/UX and Design System keywords
      'design system',
      'ui design system',
      'component design system',
      'design tokens',
      'ui kit',
      'component library',
      'design library',
      'style guide',
      'pattern library',
      'atomic design',
      'design components',
      'ui elements',
      'interface components',

      // Accessibility keywords
      'accessible components',
      'wcag compliant components',
      'aria compliant ui',
      'screen reader compatible',
      'keyboard navigation',
      'inclusive design',
      'accessibility first components',
      'a11y components',

      // Features and functionality
      'dark mode components',
      'theme support',
      'customizable components',
      'responsive components',
      'mobile first components',
      'cross browser components',
      'lightweight components',
      'performance optimized',
      'tree shakable components',
      'modular components',

      // Development keywords
      'frontend components',
      'web components',
      'javascript components',
      'es6 components',
      'modern web development',
      'component driven development',
      'rapid prototyping',
      'developer tools',
      'development framework',
      'build tools',

      // Alternative and competitive keywords
      'material ui alternative',
      'ant design alternative',
      'chakra ui alternative',
      'mantine alternative',
      'bootstrap alternative',
      'semantic ui alternative',
      'react bootstrap alternative',
      'blueprint js alternative',

      // Specific component types
      'button components',
      'form components',
      'modal components',
      'table components',
      'navigation components',
      'card components',
      'input components',
      'dropdown components',
      'tooltip components',
      'accordion components',
      'tabs components',
      'slider components',
      'datepicker components',
      'chart components',
      'layout components',

      // Industry and use case keywords
      'web application ui',
      'dashboard components',
      'admin panel components',
      'saas ui components',
      'enterprise ui',
      'startup ui kit',
      'mvp components',
      'prototype components',
      'landing page components',
      'website components',

      // Technology stack keywords
      'next.js components',
      'vite components',
      'webpack components',
      'rollup components',
      'gatsby components',
      'remix components',
      'react 18 components',
      'react hooks',

      // Quality and trust signals
      'open source ui',
      'free react components',
      'production tested',
      'battle tested components',
      'enterprise grade',
      'scalable components',
      'maintainable code',
      'clean code',

      // Long-tail SEO phrases
      'how to build react component library',
      'best react ui libraries 2024',
      'react component library tutorial',
      'custom design system react',
      'headless ui component library',
      'typescript react ui framework',
      'accessible react design system',
      'modern ui component architecture',
    ],
    category: 'Web Development Tools',
    classification: 'Software Development Tools',
    other: {
      'theme-color': '#ffffff',
      'color-scheme': 'light dark',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'apple-mobile-web-app-title': 'HeseUI',
      'application-name': 'HeseUI',
      'msapplication-TileColor': '#ffffff',
      'msapplication-config': '/browserconfig.xml',
    },
  };
}
