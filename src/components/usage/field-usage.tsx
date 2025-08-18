'use client';

import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldValidity,
} from '@/components/ui/field';
import { FieldInstallation } from '../installation/field-installation';
import { Separator } from '../ui/separator';

const MIN_USERNAME_LENGTH = 3;
const USERNAME_REGEX = /^[a-zA-Z0-9_]+$/;

export function FieldDemo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-8">
        <div className="item-center flex w-fit flex-col justify-start gap-2">
          <h3 className="font-medium text-lg">Basic Field</h3>
          <Field className="w-full max-w-64">
            <FieldLabel>Name</FieldLabel>
            <FieldControl placeholder="Required" required />
            <FieldError match="valueMissing">Please enter your name</FieldError>
            <FieldDescription>Visible on your profile</FieldDescription>
          </Field>
        </div>

        <div className="item-center flex w-fit flex-col justify-start gap-2">
          <h3 className="font-medium text-lg">Email Field</h3>
          <Field className="w-full max-w-64">
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
              Please enter a valid email address
            </FieldError>
          </Field>
        </div>

        <div className="item-center flex w-fit flex-col justify-start gap-2">
          <h3 className="font-medium text-lg">Password Field</h3>
          <Field className="w-full max-w-64">
            <FieldLabel>Password</FieldLabel>
            <FieldControl
              minLength={8}
              placeholder="Enter your password"
              required
              type="password"
            />
            <FieldError match="valueMissing">
              Please enter your password
            </FieldError>
            <FieldError match="tooShort">
              Password must be at least 8 characters
            </FieldError>
            <FieldDescription>
              Must be at least 8 characters long
            </FieldDescription>
          </Field>
        </div>

        <div className="item-center flex w-fit flex-col justify-start gap-2">
          <h3 className="font-medium text-lg">Custom Validation</h3>
          <Field
            className="w-full max-w-64"
            validate={(value) => {
              if (typeof value === 'string' && value.length > 0) {
                if (value.length < MIN_USERNAME_LENGTH) {
                  return 'Username must be at least 3 characters';
                }
                if (!USERNAME_REGEX.test(value)) {
                  return 'Username can only contain letters, numbers, and underscores';
                }
              }
              return null;
            }}
            validationMode="onChange"
          >
            <FieldLabel>Username</FieldLabel>
            <FieldControl placeholder="Enter username" />
            <FieldError match="customError">Invalid username format</FieldError>
            <FieldDescription>
              Only letters, numbers, and underscores allowed
            </FieldDescription>
          </Field>
        </div>

        <div className="item-center flex w-fit flex-col justify-start gap-2">
          <h3 className="font-medium text-lg">Number Field</h3>
          <Field className="w-full max-w-64">
            <FieldLabel>Age</FieldLabel>
            <FieldControl
              max={120}
              min={18}
              placeholder="Enter your age"
              type="number"
            />
            <FieldError match="rangeUnderflow">
              You must be at least 18 years old
            </FieldError>
            <FieldError match="rangeOverflow">
              Please enter a valid age
            </FieldError>
            <FieldDescription>Must be between 18 and 120</FieldDescription>
          </Field>
        </div>

        <div className="item-center flex w-fit flex-col justify-start gap-2">
          <h3 className="font-medium text-lg">Disabled Field</h3>
          <Field className="w-full max-w-64" disabled>
            <FieldLabel>Disabled Field</FieldLabel>
            <FieldControl
              defaultValue="Disabled value"
              placeholder="This field is disabled"
            />
            <FieldDescription>This field cannot be edited</FieldDescription>
          </Field>
        </div>

        <div className="item-center flex w-fit flex-col justify-start gap-2">
          <h3 className="font-medium text-lg">Invalid Field</h3>
          <Field className="w-full max-w-64" invalid>
            <FieldLabel>Invalid Field</FieldLabel>
            <FieldControl
              defaultValue="Invalid value"
              placeholder="This field is invalid"
            />
            <FieldError match={true}>
              This field has been marked as invalid
            </FieldError>
          </Field>
        </div>

        <div className="item-center flex w-fit flex-col justify-start gap-2">
          <h3 className="font-medium text-lg">Custom Validity</h3>
          <Field className="w-full max-w-64">
            <FieldLabel>Custom Validation</FieldLabel>
            <FieldControl placeholder="Type 'valid' to make it valid" />
            <FieldValidity>
              {(validity) => {
                const v = validity as any;
                if (v.valid) {
                  return (
                    <div className="text-green-600 text-sm">
                      ✅ Field is valid!
                    </div>
                  );
                }
                if (v.customError) {
                  return (
                    <div className="text-destructive text-sm">
                      ❌ Custom error: {v.customError}
                    </div>
                  );
                }
                return null;
              }}
            </FieldValidity>
            <FieldDescription>
              Type 'valid' to see custom validation
            </FieldDescription>
          </Field>
        </div>
      </div>
      <Separator />
      <FieldInstallation />
    </div>
  );
}
