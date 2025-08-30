import CodeBlock from '../code-block';

export function FieldsetInstallation() {
  return (
    <>
      <p>Install component using the CLI</p>
      <CodeBlock
        code={
          'pnpm dlx shadcn@latest add @heseui/fieldset'
        }
        lang="bash"
      />
      <p>example usage</p>
      <CodeBlock
        code={`import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@/components/ui/field';
import { Fieldset, FieldsetLegend } from '@/components/ui/fieldset';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function FieldsetDemo() {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <Fieldset className="w-full max-w-64">
          <FieldsetLegend>Billing details</FieldsetLegend>

          <Field className="flex flex-col items-start gap-1">
            <FieldLabel>Company</FieldLabel>
            <FieldControl placeholder="Enter company name" />
          </Field>

          <Field className="flex flex-col items-start gap-1">
            <FieldLabel>Tax ID</FieldLabel>
            <FieldControl placeholder="Enter fiscal number" />
          </Field>
        </Fieldset>
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <Fieldset className="w-full max-w-64">
          <FieldsetLegend>Contact Information</FieldsetLegend>

          <Field className="flex flex-col items-start gap-1">
            <FieldLabel>Full Name</FieldLabel>
            <FieldControl placeholder="Enter your full name" required />
            <FieldError match="valueMissing">Please enter your name</FieldError>
          </Field>

          <Field className="flex flex-col items-start gap-1">
            <FieldLabel>Email</FieldLabel>
            <FieldControl
              placeholder="Enter your email"
              required
              type="email"
            />
            <FieldError match="valueMissing">
              Please enter your email
            </FieldError>
            <FieldError match="typeMismatch">
              Please enter a valid email
            </FieldError>
          </Field>

          <Field className="flex flex-col items-start gap-1">
            <FieldLabel>Phone</FieldLabel>
            <FieldControl placeholder="Enter your phone number" type="tel" />
            <FieldDescription>Optional</FieldDescription>
          </Field>
        </Fieldset>
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <Fieldset className="w-full max-w-64">
          <FieldsetLegend>Shipping Address</FieldsetLegend>

          <Field className="flex flex-col items-start gap-1">
            <FieldLabel>Street Address</FieldLabel>
            <FieldControl placeholder="Enter street address" required />
            <FieldError match="valueMissing">
              Please enter your address
            </FieldError>
          </Field>

          <Field className="flex flex-col items-start gap-1">
            <FieldLabel>City</FieldLabel>
            <FieldControl placeholder="Enter city" required />
            <FieldError match="valueMissing">Please enter your city</FieldError>
          </Field>

          <Field className="flex flex-col items-start gap-1">
            <FieldLabel>Postal Code</FieldLabel>
            <FieldControl placeholder="Enter postal code" required />
            <FieldError match="valueMissing">
              Please enter your postal code
            </FieldError>
          </Field>

          <Field className="flex flex-col items-start gap-1">
            <FieldLabel>Country</FieldLabel>
            <FieldControl placeholder="Enter country" required />
            <FieldError match="valueMissing">
              Please enter your country
            </FieldError>
          </Field>
        </Fieldset>
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <Fieldset className="w-full max-w-64">
          <FieldsetLegend>Account Settings</FieldsetLegend>

          <Field className="flex flex-col items-start gap-1">
            <FieldLabel>Username</FieldLabel>
            <FieldControl placeholder="Enter username" required />
            <FieldError match="valueMissing">
              Please enter a username
            </FieldError>
            <FieldDescription>
              This will be your public display name
            </FieldDescription>
          </Field>

          <Field className="flex flex-col items-start gap-1">
            <FieldLabel>Password</FieldLabel>
            <FieldControl
              minLength={8}
              placeholder="Enter new password"
              required
              type="password"
            />
            <FieldError match="valueMissing">
              Please enter a password
            </FieldError>
            <FieldError match="tooShort">
              Password must be at least 8 characters
            </FieldError>
            <FieldDescription>
              Must be at least 8 characters long
            </FieldDescription>
          </Field>

          <Field className="flex flex-col items-start gap-1">
            <FieldLabel>Confirm Password</FieldLabel>
            <FieldControl
              placeholder="Confirm your password"
              required
              type="password"
            />
            <FieldError match="valueMissing">
              Please confirm your password
            </FieldError>
          </Field>
        </Fieldset>
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <Fieldset className="w-full max-w-64">
          <FieldsetLegend>Notification Preferences</FieldsetLegend>

          <Field className="flex flex-col items-start gap-1">
            <FieldLabel>Email Notifications</FieldLabel>
            <FieldControl
              placeholder="Enter email for notifications"
              type="email"
            />
            <FieldDescription>
              We'll send updates to this email
            </FieldDescription>
          </Field>

          <Field className="flex flex-col items-start gap-1">
            <FieldLabel>Newsletter</FieldLabel>
            <FieldControl
              placeholder="Enter email for newsletter"
              type="email"
            />
            <FieldDescription>
              Optional: Receive our monthly newsletter
            </FieldDescription>
          </Field>

          <Field className="flex flex-col items-start gap-1">
            <FieldLabel>Phone for SMS</FieldLabel>
            <FieldControl placeholder="Enter phone for SMS alerts" type="tel" />
            <FieldDescription>
              Optional: Receive SMS notifications
            </FieldDescription>
          </Field>
        </Fieldset>
      </div>
    </div>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
