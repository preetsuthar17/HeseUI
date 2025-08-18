import CodeBlock from "../code-block";

export function DialogInstallation() {
    return(
        <>
            <p>Install component using the CLI</p>
            <CodeBlock
                code={`pnpm dlx shadcn@latest add http://base.hextaui.com/r/dialog.json`}
                lang="bash"
            />
            <p>example usage</p>
            <CodeBlock
                code={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';`}
                lang="tsx"
            />
            
            <CodeBlock
                code={`export function DialogDemo() {
  const [_controlledOpen, _setControlledOpen] = React.useState(false);
  const [_nonModalOpen, _setNonModalOpen] = React.useState(false);
  const [_nonDismissibleOpen, _setNonDismissibleOpen] = React.useState(false);
  const [_dialogOpen, _setDialogOpen] = React.useState(false);
  const [_textareaValue, _setTextareaValue] = React.useState('');

  return (
    <div className="flex flex-wrap gap-8">
      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Basic Dialog</h3>
        <Dialog>
          <DialogTrigger>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Cancel</DialogClose>
              <Button>Continue</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Nested Dialog</h3>
        <Dialog>
          <DialogTrigger>
            <Button variant="outline">Open Parent Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Parent Dialog</DialogTitle>
              <DialogDescription>
                This is a parent dialog. You can open a nested dialog from here.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="mb-4 text-muted-foreground text-sm">
                Click the button below to open a nested dialog.
              </p>
              <Dialog>
                <DialogTrigger>
                  <Button variant="secondary">Open Nested Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Nested Dialog</DialogTitle>
                    <DialogDescription>
                      This is a nested dialog. Notice how the parent dialog is
                      dimmed in the background.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose>Close</DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <DialogFooter>
              <DialogClose>Close Parent</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Form Dialog</h3>
        <Dialog>
          <DialogTrigger>
            <Button variant="outline">Create Account</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create Account</DialogTitle>
              <DialogDescription>
                Fill in the form below to create your account.
              </DialogDescription>
            </DialogHeader>
            <form className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right" htmlFor="email">
                  Email
                </label>
                <input
                  className="col-span-3 rounded border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right" htmlFor="password">
                  Password
                </label>
                <input
                  className="col-span-3 rounded border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right" htmlFor="confirm">
                  Confirm
                </label>
                <input
                  className="col-span-3 rounded border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="confirm"
                  placeholder="Confirm your password"
                  type="password"
                />
              </div>
            </form>
            <DialogFooter>
              <DialogClose>Cancel</DialogClose>
              <Button type="submit">Create Account</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}`}
                lang="tsx"
            />

        </>
    )
}
