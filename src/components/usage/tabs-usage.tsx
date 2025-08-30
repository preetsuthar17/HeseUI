'use client';

import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { TabsInstallation } from '../installation/tabs-installation';
import { Separator } from '../ui/separator';

export function TabsDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Tabs className="max-w-[400px] w-full" defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsIndicator />
        </TabsList>
        <TabsContent
          className="h-32 items-center justify-center"
          value="overview"
        >
          <div className="text-muted-foreground">Overview content</div>
        </TabsContent>
        <TabsContent
          className="h-32 items-center justify-center"
          value="projects"
        >
          <div className="text-muted-foreground">Projects content</div>
        </TabsContent>
        <TabsContent
          className="h-32 items-center justify-center"
          value="account"
        >
          <div className="text-muted-foreground">Account content</div>
        </TabsContent>
      </Tabs>
      <Separator />
      <TabsInstallation />
    </div>
  );
}
