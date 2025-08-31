import { Button } from '@/components/ui/button';
import { ButtonInstallation } from '../installation/button-installation';
import { Separator } from '../ui/separator';

export function ButtonDemo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-lg">Button Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-lg">Button Sizes</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <svg
                className="h-4 w-4"
                fill="none"
                height="15"
                viewBox="0 0 15 15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-lg">Disabled States</h3>
          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled Default</Button>
            <Button disabled variant="secondary">
              Disabled Secondary
            </Button>
            <Button disabled variant="destructive">
              Disabled Destructive
            </Button>
            <Button disabled variant="outline">
              Disabled Outline
            </Button>
            <Button disabled variant="ghost">
              Disabled Ghost
            </Button>
            <Button disabled variant="link">
              Disabled Link
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-lg">With Icons</h3>
          <div className="flex flex-wrap gap-4">
            <Button>
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                height="15"
                viewBox="0 0 15 15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
              Add Item
            </Button>
            <Button variant="outline">
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                height="15"
                viewBox="0 0 15 15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M11.25 3.75C11.25 3.33579 10.9142 3 10.5 3H4.5C4.08579 3 3.75 3.33579 3.75 3.75V11.25C3.75 11.6642 4.08579 12 4.5 12H10.5C10.9142 12 11.25 11.6642 11.25 11.25V3.75ZM4.5 2C3.67157 2 3 2.67157 3 3.5V11.5C3 12.3284 3.67157 13 4.5 13H10.5C11.3284 13 12 12.3284 12 11.5V3.5C12 2.67157 11.3284 2 10.5 2H4.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d="M6 5.5C6 5.22386 6.22386 5 6.5 5H8.5C8.77614 5 9 5.22386 9 5.5C9 5.77614 8.77614 6 8.5 6H6.5C6.22386 6 6 5.77614 6 5.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d="M6 7.5C6 7.22386 6.22386 7 6.5 7H8.5C8.77614 7 9 7.22386 9 7.5C9 7.77614 8.77614 8 8.5 8H6.5C6.22386 8 6 7.77614 6 7.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d="M6 9.5C6 9.22386 6.22386 9 6.5 9H8.5C8.77614 9 9 9.22386 9 9.5C9 9.77614 8.77614 10 8.5 10H6.5C6.22386 10 6 9.77614 6 9.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
              View Details
            </Button>
            <Button variant="destructive">
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                height="15"
                viewBox="0 0 15 15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V11.5C11 12.8807 9.88071 14 8.5 14H6.5C5.11929 14 4 12.8807 4 11.5V4H3.5C3.22386 4 3 3.77614 3 3.5ZM5 4V11.5C5 12.3284 5.67157 13 6.5 13H8.5C9.32843 13 10 12.3284 10 11.5V4H5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d="M7.5 6C7.22386 6 7 6.22386 7 6.5V10.5C7 10.7761 7.22386 11 7.5 11C7.77614 11 8 10.7761 8 10.5V6.5C8 6.22386 7.77614 6 7.5 6Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d="M10 6.5C10 6.22386 9.77614 6 9.5 6C9.22386 6 9 6.22386 9 6.5V10.5C9 10.7761 9.22386 11 9.5 11C9.77614 11 10 10.7761 10 10.5V6.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d="M6 6.5C6 6.22386 5.77614 6 5.5 6C5.22386 6 5 6.22386 5 6.5V10.5C5 10.7761 5.22386 11 5.5 11C5.77614 11 6 10.7761 6 10.5V6.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
              Delete
            </Button>
          </div>
        </div>
      </div>
      <Separator />
      <ButtonInstallation />
    </div>
  );
}
