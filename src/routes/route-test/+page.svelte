<script>
  import { Button } from "$lib/components/ui/button";
  import CustomToast from "./custom-toast.svelte";
  import { Switch } from "$lib/components/ui/switch";
  import { Skeleton } from "$lib/components/ui/skeleton";
  import * as Collapsible from "$lib/components/ui/collapsible";
  import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { Label } from "$lib/components/ui/label";
  import { Slider } from "$lib/components/ui/slider";
  import { ScrollArea } from "$lib/components/ui/scroll-area";
  import { Separator } from "$lib/components/ui/separator";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import * as AlertDialog from "$lib/components/ui/alert-dialog";
  import * as Card from "$lib/components/ui/card";
  import { toast } from "svelte-sonner";
  import TriangleAlert from "lucide-svelte/icons/triangle-alert";
  import CirclePlus from "lucide-svelte/icons/circle-plus";
  let alertDialogOpen = $state(false);

  const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
  const nums = Array.from({ length: 20 }).map((_, i, a) => `${a.length - i}`);

  let checkbox_inputs = $state([]);
</script>

<div class="flex flex-col gap-[5px] p-3">
  <!-- sonner -->
  <div class="flex gap-[10px]">
    <Button
      on:click={() => {
        toast.info("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM"
        });
      }}
      class="flex max-w-[120px] items-center justify-center gap-[5px] p-5"
    >
      <CirclePlus class="h-[22px] w-[22px]" />
      <p>Toast</p>
    </Button>
    <Button
      on:click={() => {
        toast.custom(CustomToast);
      }}
      class="flex max-w-[120px] items-center justify-center gap-[5px] p-5"
    >
      <CirclePlus class="h-[22px] w-[22px]" />
      <p>Custom</p>
    </Button>
  </div>
  <!-- collapsible -->
  <Collapsible.Root class="w-[350px] space-y-2 p-5">
    <div class="flex items-center justify-between space-x-4 px-4">
      <h4 class="text-sm font-semibold">there are some things down here</h4>
      <Collapsible.Trigger asChild let:builder>
        <Button builders={[builder]} variant="ghost" size="sm" class="w-9 p-0">
          <ChevronsUpDown class="h-4 w-4" />
          <span class="sr-only">Toggle</span>
        </Button>
      </Collapsible.Trigger>
    </div>
    <Separator class="my-2" />
    <Collapsible.Content class="space-y-2">
      <div class="rounded-md border px-4 py-3 font-mono text-sm">this is something</div>
      <div class="rounded-md border px-4 py-3 font-mono text-sm">this is something else</div>
      <div class="rounded-md border px-4 py-3 font-mono text-sm">
        this is something totally else
      </div>
      <div class="rounded-md border px-4 py-3 font-mono text-sm">
        <ScrollArea class="h-[250px]">
          <div class="p-4">
            <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
            {#each tags as tag}
              <div class="text-sm">
                {tag}
              </div>
              <Separator class="my-2" />
            {/each}
          </div>
        </ScrollArea>
      </div>
    </Collapsible.Content>
  </Collapsible.Root>
  <!-- buttons -->
  <div class="flex items-center gap-[5px]">
    <Button>Button</Button>
    <Button variant="secondary">Button</Button>
    <Button variant="destructive">Button</Button>
    <Button variant="outline">Button</Button>
  </div>
  <!-- skeleton -->
  <div class="flex items-center space-x-4 p-5">
    <Skeleton class="h-12 w-12 rounded-full" />
    <div class="space-y-2">
      <Skeleton class="h-4 w-[250px]" />
      <Skeleton class="h-4 w-[200px]" />
    </div>
  </div>
  <!-- tooltip -->
  <Tooltip.Root>
    <Tooltip.Trigger asChild let:builder>
      <Button builders={[builder]} class="max-w-[200px]" variant="secondary">Hover</Button>
    </Tooltip.Trigger>
    <Tooltip.Content>
      <p>This is some outline</p>
    </Tooltip.Content>
  </Tooltip.Root>
  <!-- slider -->
  <div class="p-5">
    <Slider value={[10]} min={10} max={30} step={5} class="max-w-[250px]" />
  </div>
  <!-- switch -->
  <div class="flex max-w-[200px] items-center space-x-2 rounded-lg border p-3">
    <Switch id="airplane-mode" />
    <Label for="airplane-mode">Airplane Mode</Label>
  </div>
  <!-- alert dialog -->
  <Button
    class="flex max-w-[200px] items-center justify-center gap-[5px] p-5"
    on:click={() => (alertDialogOpen = true)}
  >
    <TriangleAlert class="h-[22px] w-[22px]" />
    <p>Alert Dialog</p>
  </Button>
  <!-- card + form -->
  <div class="flex w-full items-center justify-start p-5">
    <Card.Root class="w-[350px]">
      <Card.Header>
        <Card.Title>Create project</Card.Title>
        <Card.Description>Deploy your new project in one-click.</Card.Description>
      </Card.Header>
      <Card.Content class="flex flex-col gap-[10px]">
        {#each nums as i}
          <div
            class="flex w-full max-w-[200px] items-center justify-between space-x-2 rounded-lg border p-4"
          >
            <Label
              for={`some_class_id_${i}`}
              class="bg-blue w-full flex-1 gap-1.5 text-sm font-medium"
            >
              Some Class {i}
            </Label>
            <Checkbox
              id={`some_class_id_${i}`}
              onCheckedChange={(state) => {
                if (state) {
                  checkbox_inputs.push(i);
                } else {
                  checkbox_inputs.splice(checkbox_inputs.indexOf(i), 1);
                }
                console.log(checkbox_inputs);
              }}
            />
          </div>
        {/each}
      </Card.Content>
      <Card.Footer class="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button form="routeTestForm">Deploy</Button>
      </Card.Footer>
    </Card.Root>
  </div>
  <!-- scroll area -->
  <ScrollArea class="h-72 w-48 rounded-md border">
    <div class="p-4">
      <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
      {#each tags as tag}
        <div class="text-sm">
          {tag}
        </div>
        <Separator class="my-2" />
      {/each}
    </div>
  </ScrollArea>
</div>

<AlertDialog.Root bind:open={alertDialogOpen}>
  <AlertDialog.Content
    class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-[94%] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg sm:max-w-lg md:w-full"
  >
    <AlertDialog.Header>
      <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
      <AlertDialog.Description>
        This action cannot be undone. This will permanently delete your account and remove your data
        from our servers.
      </AlertDialog.Description>
    </AlertDialog.Header>
    <AlertDialog.Footer>
      <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
      <AlertDialog.Action>Continue</AlertDialog.Action>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog.Root>
