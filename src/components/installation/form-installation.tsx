import CodeBlock from '../code-block';

export function FormInstallation() {
  return (
    <>
      <p>Adding registry to components.json</p>
      <p>
        Head over to <kbd>components.json</kbd> and add the following:
      </p>
      <CodeBlock
        code={`{
  "tailwind": {
    // code
  },
  "aliases": {
    // code
  },

  // add the following
  "registries": {
    "@heseui": "https://www.heseui.com/r/{name}.json"
  }
}`}
        lang="json"
      />
      <p>Install component using the CLI</p>
      <CodeBlock
        code={'pnpm dlx shadcn@latest add @heseui/form'}
        lang="package-install"
      />
      <p>example usage</p>
      <CodeBlock
        code={`import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldControl,
  FieldError,
  FieldLabel,
} from '@/components/ui/field';
import { Form } from '@/components/ui/form';`}
        lang="tsx"
      />

      <CodeBlock
        code={`const SERVER_DELAY_MS = 1000;
const MIN_AGE = 18;
const MAX_AGE = 120;
const EMAIL_REGEX = /^[^s@]+@[^s@]+.[^s@]+$/;

async function submitForm(value: string) {
  await new Promise((resolve) => {
    setTimeout(resolve, SERVER_DELAY_MS);
  });

  try {
    const url = new URL(value);

    if (url.hostname.endsWith('example.com')) {
      return { error: 'The example domain is not allowed' };
    }
  } catch {
    return { error: 'This is not a valid URL' };
  }

  return { success: true };
}

// Mock Zod-like validation
function validateFormData(formData: FormData) {
  const name = formData.get('name') as string;
  const age = formData.get('age') as string;
  const email = formData.get('email') as string;

  const errors: Record<string, string> = {};

  if (!name || name.trim().length === 0) {
    errors.name = 'Name is required';
  } else if (name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!age || Number.isNaN(Number(age))) {
    errors.age = 'Age must be a number';
  } else if (Number(age) < MIN_AGE) {
    errors.age = 'You must be at least 18 years old';
  } else if (Number(age) > MAX_AGE) {
    errors.age = 'Please enter a valid age';
  }

  if (!email) {
    errors.email = 'Email is required';
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = 'Please enter a valid email address';
  }

  return errors;
}

export function FormDemo() {
  const [urlErrors, setUrlErrors] = React.useState({});
  const [urlLoading, setUrlLoading] = React.useState(false);
  const [validationErrors, setValidationErrors] = React.useState({});
  const [validationLoading, setValidationLoading] = React.useState(false);

  return (
    <div className="flex flex-wrap gap-8">
      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">URL Validation Form</h3>
        <Form
          className="w-full max-w-64"
          errors={urlErrors}
          onClearErrors={setUrlErrors}
          onSubmit={async (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const value = formData.get('url') as string;

            setUrlLoading(true);
            const response = await submitForm(value);
            const serverErrors = {
              url: response.error,
            };

            setUrlErrors(serverErrors);
            setUrlLoading(false);
          }}
        >
          <Field className="flex flex-col items-start gap-1" name="url">
            <FieldLabel>Homepage</FieldLabel>
            <FieldControl
              defaultValue="https://example.com"
              pattern="https?://.*"
              placeholder="https://example.com"
              required
              type="url"
            />
            <FieldError />
          </Field>
          <Button className="w-full" disabled={urlLoading} type="submit">
            {urlLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </Form>
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Multi-Field Validation</h3>
        <Form
          className="w-full max-w-64"
          errors={validationErrors}
          onClearErrors={setValidationErrors}
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);

            setValidationLoading(true);
            const errors = validateFormData(formData);
            setValidationErrors(errors);
            setValidationLoading(false);

            if (Object.keys(errors).length === 0) {
              alert('Form submitted successfully!');
            }
          }}
        >
          <Field className="flex flex-col items-start gap-1" name="name">
            <FieldLabel>Full Name</FieldLabel>
            <FieldControl placeholder="Enter your full name" required />
            <FieldError />
          </Field>

          <Field className="flex flex-col items-start gap-1" name="age">
            <FieldLabel>Age</FieldLabel>
            <FieldControl
              max={120}
              min={18}
              placeholder="Enter your age"
              required
              type="number"
            />
            <FieldError />
          </Field>

          <Field className="flex flex-col items-start gap-1" name="email">
            <FieldLabel>Email</FieldLabel>
            <FieldControl
              placeholder="Enter your email"
              required
              type="email"
            />
            <FieldError />
          </Field>

          <Button className="w-full" disabled={validationLoading} type="submit">
            {validationLoading ? 'Validating...' : 'Submit'}
          </Button>
        </Form>
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Contact Form</h3>
        <Form
          className="w-full max-w-64"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const _data = Object.fromEntries(formData);
            alert('Contact form submitted! Check console for data.');
          }}
        >
          <Field className="flex flex-col items-start gap-1" name="firstName">
            <FieldLabel>First Name</FieldLabel>
            <FieldControl placeholder="Enter your first name" required />
            <FieldError />
          </Field>

          <Field className="flex flex-col items-start gap-1" name="lastName">
            <FieldLabel>Last Name</FieldLabel>
            <FieldControl placeholder="Enter your last name" required />
            <FieldError />
          </Field>

          <Field className="flex flex-col items-start gap-1" name="message">
            <FieldLabel>Message</FieldLabel>
            <FieldControl placeholder="Enter your message" required />
            <FieldError />
          </Field>

          <Button className="w-full" type="submit">
            Send Message
          </Button>
        </Form>
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Registration Form</h3>
        <Form
          className="w-full max-w-64"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const _data = Object.fromEntries(formData);
            alert('Registration successful! Check console for data.');
          }}
        >
          <Field className="flex flex-col items-start gap-1" name="username">
            <FieldLabel>Username</FieldLabel>
            <FieldControl
              minLength={3}
              placeholder="Choose a username"
              required
            />
            <FieldError />
          </Field>

          <Field className="flex flex-col items-start gap-1" name="password">
            <FieldLabel>Password</FieldLabel>
            <FieldControl
              minLength={8}
              placeholder="Enter your password"
              required
              type="password"
            />
            <FieldError />
          </Field>

          <Field
            className="flex flex-col items-start gap-1"
            name="confirmPassword"
          >
            <FieldLabel>Confirm Password</FieldLabel>
            <FieldControl
              placeholder="Confirm your password"
              required
              type="password"
            />
            <FieldError />
          </Field>

          <Button className="w-full" type="submit">
            Create Account
          </Button>
        </Form>
      </div>
    </div>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
