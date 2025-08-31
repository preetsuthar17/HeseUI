export interface ComponentMetadata {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  category: string;
  features: string[];
  usage: string;
  ogImage: {
    title: string;
    subtitle: string;
    color: string;
  };
}

export const componentMetadata: Record<string, ComponentMetadata> = {
  accordion: {
    id: 'accordion',
    title: 'Accordion',
    description:
      'Collapsible content sections with smooth animations and keyboard navigation. Perfect for organizing related content into expandable panels.',
    keywords: [
      'accordion',
      'collapsible',
      'expandable',
      'content sections',
      'faq',
      'navigation',
      'ui components',
    ],
    category: 'Layout & Navigation',
    features: [
      'Keyboard navigation',
      'Smooth animations',
      'Accessible',
      'Customizable styling',
      'Multiple variants',
    ],
    usage:
      'Use for FAQs, content organization, and collapsible navigation menus.',
    ogImage: {
      title: 'Accordion',
      subtitle: 'Collapsible Content Sections',
      color: '#3b82f6',
    },
  },
  'alert-dialog': {
    id: 'alert-dialog',
    title: 'Alert Dialog',
    description:
      'Modal dialogs for important actions requiring user confirmation. Built with accessibility in mind for critical user interactions.',
    keywords: [
      'alert dialog',
      'modal',
      'confirmation',
      'popup',
      'user interaction',
      'accessibility',
    ],
    category: 'Feedback & Interaction',
    features: [
      'Focus management',
      'Keyboard navigation',
      'Screen reader support',
      'Backdrop click handling',
      'Escape key support',
    ],
    usage:
      'Use for delete confirmations, important warnings, and critical user decisions.',
    ogImage: {
      title: 'Alert Dialog',
      subtitle: 'Modal Confirmation Dialogs',
      color: '#ef4444',
    },
  },
  avatar: {
    id: 'avatar',
    title: 'Avatar',
    description:
      'User profile images with fallback support and customizable styling. Perfect for user interfaces and social applications.',
    keywords: [
      'avatar',
      'profile picture',
      'user image',
      'fallback',
      'social media',
      'user interface',
    ],
    category: 'Data Display',
    features: [
      'Image fallbacks',
      'Customizable sizes',
      'Border radius options',
      'Loading states',
      'Error handling',
    ],
    usage:
      'Use for user profiles, team member displays, and social media interfaces.',
    ogImage: {
      title: 'Avatar',
      subtitle: 'User Profile Images',
      color: '#8b5cf6',
    },
  },
  button: {
    id: 'button',
    title: 'Button',
    description:
      'Interactive buttons with various styles, sizes, and states. The foundation for all user interactions in your application.',
    keywords: [
      'button',
      'interactive',
      'click',
      'action',
      'primary',
      'secondary',
      'ghost',
      'outline',
    ],
    category: 'Interactive Elements',
    features: [
      'Multiple variants',
      'Different sizes',
      'Loading states',
      'Disabled states',
      'Icon support',
    ],
    usage:
      'Use for form submissions, navigation, and any user-triggered actions.',
    ogImage: {
      title: 'Button',
      subtitle: 'Interactive Action Elements',
      color: '#10b981',
    },
  },
  checkbox: {
    id: 'checkbox',
    title: 'Checkbox',
    description:
      'Single selection controls with customizable styling and accessibility features. Perfect for forms and settings.',
    keywords: [
      'checkbox',
      'selection',
      'form control',
      'boolean input',
      'settings',
      'options',
    ],
    category: 'Form Controls',
    features: [
      'Keyboard navigation',
      'Screen reader support',
      'Custom styling',
      'Indeterminate state',
      'Form integration',
    ],
    usage:
      'Use for single boolean selections, settings toggles, and form inputs.',
    ogImage: {
      title: 'Checkbox',
      subtitle: 'Single Selection Control',
      color: '#f59e0b',
    },
  },
  'checkbox-group': {
    id: 'checkbox-group',
    title: 'Checkbox Group',
    description:
      'Multiple selection controls for managing groups of related options. Ideal for filtering and multi-select scenarios.',
    keywords: [
      'checkbox group',
      'multiple selection',
      'filtering',
      'multi-select',
      'options',
      'form controls',
    ],
    category: 'Form Controls',
    features: [
      'Multiple selections',
      'Group management',
      'Keyboard navigation',
      'Accessibility',
      'Custom styling',
    ],
    usage:
      'Use for filtering interfaces, multi-select forms, and preference settings.',
    ogImage: {
      title: 'Checkbox Group',
      subtitle: 'Multiple Selection Controls',
      color: '#06b6d4',
    },
  },
  collapsible: {
    id: 'collapsible',
    title: 'Collapsible',
    description:
      'Expandable content areas with smooth animations. Great for organizing content and creating interactive layouts.',
    keywords: [
      'collapsible',
      'expandable',
      'content organization',
      'animation',
      'layout',
      'interactive',
    ],
    category: 'Layout & Navigation',
    features: [
      'Smooth animations',
      'Keyboard support',
      'Customizable triggers',
      'Accessibility',
      'Flexible content',
    ],
    usage:
      'Use for content organization, progressive disclosure, and interactive layouts.',
    ogImage: {
      title: 'Collapsible',
      subtitle: 'Expandable Content Areas',
      color: '#84cc16',
    },
  },
  'context-menu': {
    id: 'context-menu',
    title: 'Context Menu',
    description:
      'Right-click context menus with keyboard navigation and accessibility features. Perfect for contextual actions.',
    keywords: [
      'context menu',
      'right click',
      'contextual actions',
      'popup menu',
      'keyboard navigation',
    ],
    category: 'Navigation',
    features: [
      'Right-click trigger',
      'Keyboard navigation',
      'Accessibility',
      'Custom positioning',
      'Action grouping',
    ],
    usage:
      'Use for contextual actions, file operations, and secondary navigation.',
    ogImage: {
      title: 'Context Menu',
      subtitle: 'Right-Click Actions',
      color: '#ec4899',
    },
  },
  dialog: {
    id: 'dialog',
    title: 'Dialog',
    description:
      'Modal dialogs and overlays for focused user interactions. Built with accessibility and focus management.',
    keywords: [
      'dialog',
      'modal',
      'overlay',
      'popup',
      'focus management',
      'accessibility',
    ],
    category: 'Feedback & Interaction',
    features: [
      'Focus trapping',
      'Backdrop handling',
      'Keyboard navigation',
      'Screen reader support',
      'Custom positioning',
    ],
    usage: 'Use for forms, content display, and focused user interactions.',
    ogImage: {
      title: 'Dialog',
      subtitle: 'Modal Overlays',
      color: '#6366f1',
    },
  },
  field: {
    id: 'field',
    title: 'Field',
    description:
      'Form field containers with labels, descriptions, and error states. The foundation for accessible form design.',
    keywords: [
      'field',
      'form',
      'label',
      'input wrapper',
      'validation',
      'accessibility',
    ],
    category: 'Form Controls',
    features: [
      'Label association',
      'Error handling',
      'Description support',
      'Accessibility',
      'Flexible content',
    ],
    usage:
      'Use as containers for form inputs with proper labeling and validation.',
    ogImage: {
      title: 'Field',
      subtitle: 'Form Field Containers',
      color: '#14b8a6',
    },
  },
  fieldset: {
    id: 'fieldset',
    title: 'Fieldset',
    description:
      'Grouped form fields with legends and validation. Perfect for organizing related form controls.',
    keywords: [
      'fieldset',
      'form group',
      'legend',
      'grouped inputs',
      'validation',
      'form organization',
    ],
    category: 'Form Controls',
    features: [
      'Group management',
      'Legend support',
      'Validation',
      'Accessibility',
      'Flexible layout',
    ],
    usage:
      'Use for grouping related form fields and creating structured forms.',
    ogImage: {
      title: 'Fieldset',
      subtitle: 'Grouped Form Fields',
      color: '#f97316',
    },
  },
  form: {
    id: 'form',
    title: 'Form',
    description:
      'Form handling and validation with React Hook Form integration. Streamlined form management for complex applications.',
    keywords: [
      'form',
      'validation',
      'react hook form',
      'form handling',
      'submission',
      'data collection',
    ],
    category: 'Form Controls',
    features: [
      'React Hook Form integration',
      'Validation',
      'Error handling',
      'Submission management',
      'TypeScript support',
    ],
    usage: 'Use for data collection, user input, and form-based workflows.',
    ogImage: {
      title: 'Form',
      subtitle: 'Form Handling & Validation',
      color: '#0ea5e9',
    },
  },
  input: {
    id: 'input',
    title: 'Input',
    description:
      'Text input controls with various types and validation states. The core building block for user data entry.',
    keywords: [
      'input',
      'text input',
      'form control',
      'data entry',
      'validation',
      'user input',
    ],
    category: 'Form Controls',
    features: [
      'Multiple types',
      'Validation states',
      'Accessibility',
      'Custom styling',
      'Form integration',
    ],
    usage: 'Use for text entry, data input, and form controls.',
    ogImage: {
      title: 'Input',
      subtitle: 'Text Input Controls',
      color: '#22c55e',
    },
  },
  menu: {
    id: 'menu',
    title: 'Menu',
    description:
      'Dropdown menus with keyboard navigation and accessibility features. Perfect for navigation and action menus.',
    keywords: [
      'menu',
      'dropdown',
      'navigation',
      'actions',
      'keyboard navigation',
      'accessibility',
    ],
    category: 'Navigation',
    features: [
      'Keyboard navigation',
      'Accessibility',
      'Custom positioning',
      'Action grouping',
      'Trigger options',
    ],
    usage:
      'Use for navigation menus, action dropdowns, and contextual options.',
    ogImage: {
      title: 'Menu',
      subtitle: 'Dropdown Navigation',
      color: '#a855f7',
    },
  },
  menubar: {
    id: 'menubar',
    title: 'Menubar',
    description:
      'Horizontal menu bars with nested navigation and keyboard shortcuts. Ideal for application navigation.',
    keywords: [
      'menubar',
      'horizontal menu',
      'navigation',
      'keyboard shortcuts',
      'application menu',
    ],
    category: 'Navigation',
    features: [
      'Horizontal layout',
      'Nested menus',
      'Keyboard shortcuts',
      'Accessibility',
      'Application-style',
    ],
    usage:
      'Use for application navigation, desktop-style interfaces, and complex menu structures.',
    ogImage: {
      title: 'Menubar',
      subtitle: 'Horizontal Menu Navigation',
      color: '#eab308',
    },
  },
  meter: {
    id: 'meter',
    title: 'Meter',
    description:
      'Progress indicators and gauges for displaying values within ranges. Perfect for metrics and progress visualization.',
    keywords: [
      'meter',
      'progress',
      'gauge',
      'indicator',
      'metrics',
      'visualization',
    ],
    category: 'Data Display',
    features: [
      'Range visualization',
      'Custom styling',
      'Accessibility',
      'Value display',
      'Color coding',
    ],
    usage:
      'Use for progress indicators, metric displays, and value visualization.',
    ogImage: {
      title: 'Meter',
      subtitle: 'Progress Indicators',
      color: '#f43f5e',
    },
  },
  'navigation-menu': {
    id: 'navigation-menu',
    title: 'Navigation Menu',
    description:
      'Multi-level navigation with dropdowns and keyboard navigation. Perfect for complex website navigation.',
    keywords: [
      'navigation menu',
      'multi-level',
      'dropdown navigation',
      'website navigation',
      'keyboard navigation',
    ],
    category: 'Navigation',
    features: [
      'Multi-level navigation',
      'Dropdown support',
      'Keyboard navigation',
      'Accessibility',
      'Responsive design',
    ],
    usage:
      'Use for website navigation, complex menu structures, and hierarchical navigation.',
    ogImage: {
      title: 'Navigation Menu',
      subtitle: 'Multi-Level Navigation',
      color: '#0891b2',
    },
  },
  'number-field': {
    id: 'number-field',
    title: 'Number Field',
    description:
      'Numeric input controls with validation and formatting. Perfect for quantity inputs and numeric data entry.',
    keywords: [
      'number field',
      'numeric input',
      'quantity',
      'validation',
      'form control',
      'data entry',
    ],
    category: 'Form Controls',
    features: [
      'Numeric validation',
      'Range constraints',
      'Formatting',
      'Accessibility',
      'Increment/decrement',
    ],
    usage:
      'Use for quantity inputs, numeric data entry, and form controls requiring numbers.',
    ogImage: {
      title: 'Number Field',
      subtitle: 'Numeric Input Controls',
      color: '#7c3aed',
    },
  },
  popover: {
    id: 'popover',
    title: 'Popover',
    description:
      'Floating content overlays with positioning and accessibility. Great for tooltips and contextual information.',
    keywords: [
      'popover',
      'floating content',
      'overlay',
      'positioning',
      'contextual',
      'tooltip',
    ],
    category: 'Feedback & Interaction',
    features: [
      'Smart positioning',
      'Accessibility',
      'Trigger options',
      'Custom content',
      'Focus management',
    ],
    usage:
      'Use for tooltips, contextual information, and floating content displays.',
    ogImage: {
      title: 'Popover',
      subtitle: 'Floating Content Overlays',
      color: '#059669',
    },
  },
  'preview-card': {
    id: 'preview-card',
    title: 'Preview Card',
    description:
      'Content preview cards with images, text, and actions. Perfect for content listings and product displays.',
    keywords: [
      'preview card',
      'content card',
      'product card',
      'listing',
      'preview',
      'content display',
    ],
    category: 'Data Display',
    features: [
      'Image support',
      'Text content',
      'Action buttons',
      'Responsive design',
      'Customizable layout',
    ],
    usage: 'Use for content listings, product displays, and preview cards.',
    ogImage: {
      title: 'Preview Card',
      subtitle: 'Content Preview Cards',
      color: '#dc2626',
    },
  },
  progress: {
    id: 'progress',
    title: 'Progress',
    description:
      'Progress bars and indicators for showing completion status. Essential for user feedback and loading states.',
    keywords: [
      'progress',
      'progress bar',
      'loading',
      'completion',
      'status',
      'feedback',
    ],
    category: 'Data Display',
    features: [
      'Progress indication',
      'Custom styling',
      'Accessibility',
      'Animation',
      'Value display',
    ],
    usage:
      'Use for loading states, completion indicators, and progress visualization.',
    ogImage: {
      title: 'Progress',
      subtitle: 'Progress Bars & Indicators',
      color: '#2563eb',
    },
  },
  radio: {
    id: 'radio',
    title: 'Radio',
    description:
      'Single choice selection controls with accessibility features. Perfect for mutually exclusive options.',
    keywords: [
      'radio',
      'single choice',
      'selection',
      'mutually exclusive',
      'form control',
      'options',
    ],
    category: 'Form Controls',
    features: [
      'Single selection',
      'Group management',
      'Accessibility',
      'Custom styling',
      'Form integration',
    ],
    usage:
      'Use for single choice selections, mutually exclusive options, and form controls.',
    ogImage: {
      title: 'Radio',
      subtitle: 'Single Choice Selection',
      color: '#9333ea',
    },
  },
  'scroll-area': {
    id: 'scroll-area',
    title: 'Scroll Area',
    description:
      'Custom scrollable areas with styled scrollbars and accessibility. Perfect for content overflow management.',
    keywords: [
      'scroll area',
      'scrollable',
      'custom scrollbar',
      'overflow',
      'content management',
    ],
    category: 'Layout & Navigation',
    features: [
      'Custom scrollbars',
      'Accessibility',
      'Responsive design',
      'Flexible content',
      'Smooth scrolling',
    ],
    usage:
      'Use for content overflow, custom scrollable areas, and layout management.',
    ogImage: {
      title: 'Scroll Area',
      subtitle: 'Custom Scrollable Areas',
      color: '#ea580c',
    },
  },
  select: {
    id: 'select',
    title: 'Select',
    description:
      'Dropdown selection controls with search and keyboard navigation. Perfect for option selection from lists.',
    keywords: [
      'select',
      'dropdown',
      'selection',
      'options',
      'search',
      'keyboard navigation',
    ],
    category: 'Form Controls',
    features: [
      'Search functionality',
      'Keyboard navigation',
      'Accessibility',
      'Custom styling',
      'Option grouping',
    ],
    usage:
      'Use for option selection, dropdown menus, and form controls with predefined options.',
    ogImage: {
      title: 'Select',
      subtitle: 'Dropdown Selection Controls',
      color: '#16a34a',
    },
  },
  separator: {
    id: 'separator',
    title: 'Separator',
    description:
      'Visual dividers and separators for content organization. Essential for clean layout and visual hierarchy.',
    keywords: [
      'separator',
      'divider',
      'visual separation',
      'layout',
      'content organization',
      'visual hierarchy',
    ],
    category: 'Layout & Navigation',
    features: [
      'Visual separation',
      'Custom styling',
      'Orientation options',
      'Accessibility',
      'Flexible usage',
    ],
    usage:
      'Use for content separation, visual hierarchy, and layout organization.',
    ogImage: {
      title: 'Separator',
      subtitle: 'Visual Dividers',
      color: '#6b7280',
    },
  },
  slider: {
    id: 'slider',
    title: 'Slider',
    description:
      'Range selection controls with smooth interaction and accessibility. Perfect for value selection within ranges.',
    keywords: [
      'slider',
      'range',
      'value selection',
      'interactive',
      'accessibility',
      'form control',
    ],
    category: 'Form Controls',
    features: [
      'Range selection',
      'Smooth interaction',
      'Accessibility',
      'Custom styling',
      'Value display',
    ],
    usage:
      'Use for range selection, value inputs, and interactive form controls.',
    ogImage: {
      title: 'Slider',
      subtitle: 'Range Selection Controls',
      color: '#be185d',
    },
  },
  switch: {
    id: 'switch',
    title: 'Switch',
    description:
      'Toggle switch controls for boolean states. Perfect for settings and feature toggles.',
    keywords: [
      'switch',
      'toggle',
      'boolean',
      'settings',
      'feature toggle',
      'on/off',
    ],
    category: 'Form Controls',
    features: [
      'Toggle functionality',
      'Accessibility',
      'Custom styling',
      'Form integration',
      'Animation',
    ],
    usage:
      'Use for settings toggles, feature switches, and boolean state controls.',
    ogImage: {
      title: 'Switch',
      subtitle: 'Toggle Switch Controls',
      color: '#0d9488',
    },
  },
  tabs: {
    id: 'tabs',
    title: 'Tabs',
    description:
      'Tabbed content organization with keyboard navigation and accessibility. Perfect for organizing related content.',
    keywords: [
      'tabs',
      'tabbed content',
      'content organization',
      'navigation',
      'keyboard navigation',
    ],
    category: 'Layout & Navigation',
    features: [
      'Content organization',
      'Keyboard navigation',
      'Accessibility',
      'Custom styling',
      'Flexible content',
    ],
    usage:
      'Use for content organization, feature sections, and related content grouping.',
    ogImage: {
      title: 'Tabs',
      subtitle: 'Tabbed Content Organization',
      color: '#1d4ed8',
    },
  },
  toast: {
    id: 'toast',
    title: 'Toast',
    description:
      'Notification messages with various types and auto-dismiss functionality. Essential for user feedback.',
    keywords: [
      'toast',
      'notification',
      'message',
      'feedback',
      'alert',
      'user notification',
    ],
    category: 'Feedback & Interaction',
    features: [
      'Auto-dismiss',
      'Multiple types',
      'Accessibility',
      'Custom positioning',
      'Queue management',
    ],
    usage:
      'Use for user notifications, success/error messages, and system feedback.',
    ogImage: {
      title: 'Toast',
      subtitle: 'Notification Messages',
      color: '#ca8a04',
    },
  },
  toggle: {
    id: 'toggle',
    title: 'Toggle',
    description:
      'Toggle button controls for state switching. Perfect for mode switching and feature toggles.',
    keywords: [
      'toggle',
      'toggle button',
      'state switching',
      'mode switch',
      'feature toggle',
    ],
    category: 'Interactive Elements',
    features: [
      'State switching',
      'Accessibility',
      'Custom styling',
      'Icon support',
      'Form integration',
    ],
    usage:
      'Use for mode switching, feature toggles, and state-based interactions.',
    ogImage: {
      title: 'Toggle',
      subtitle: 'Toggle Button Controls',
      color: '#7c2d12',
    },
  },
  'toggle-group': {
    id: 'toggle-group',
    title: 'Toggle Group',
    description:
      'Grouped toggle buttons for related options. Perfect for filter controls and option groups.',
    keywords: [
      'toggle group',
      'grouped toggles',
      'filter controls',
      'option groups',
      'related options',
    ],
    category: 'Interactive Elements',
    features: [
      'Group management',
      'Multiple selection',
      'Accessibility',
      'Custom styling',
      'Form integration',
    ],
    usage:
      'Use for filter controls, option groups, and related toggle selections.',
    ogImage: {
      title: 'Toggle Group',
      subtitle: 'Grouped Toggle Buttons',
      color: '#be123c',
    },
  },
  toolbar: {
    id: 'toolbar',
    title: 'Toolbar',
    description:
      'Toolbar with action buttons and grouped controls. Perfect for document editors and content management.',
    keywords: [
      'toolbar',
      'action buttons',
      'controls',
      'document editor',
      'content management',
    ],
    category: 'Interactive Elements',
    features: [
      'Action grouping',
      'Button organization',
      'Accessibility',
      'Custom styling',
      'Flexible layout',
    ],
    usage:
      'Use for document editors, content management interfaces, and action toolbars.',
    ogImage: {
      title: 'Toolbar',
      subtitle: 'Action Button Groups',
      color: '#1e40af',
    },
  },
  tooltip: {
    id: 'tooltip',
    title: 'Tooltip',
    description:
      'Hover information tooltips with positioning and accessibility. Perfect for additional context and help text.',
    keywords: [
      'tooltip',
      'hover',
      'information',
      'help text',
      'context',
      'positioning',
    ],
    category: 'Feedback & Interaction',
    features: [
      'Hover trigger',
      'Smart positioning',
      'Accessibility',
      'Custom content',
      'Delay options',
    ],
    usage:
      'Use for help text, additional information, and contextual guidance.',
    ogImage: {
      title: 'Tooltip',
      subtitle: 'Hover Information Tooltips',
      color: '#9d174d',
    },
  },
};

export function getComponentMetadata(
  componentId: string
): ComponentMetadata | null {
  return componentMetadata[componentId] || null;
}

export function getAllComponentMetadata(): ComponentMetadata[] {
  return Object.values(componentMetadata);
}
