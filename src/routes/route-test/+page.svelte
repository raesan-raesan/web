<script>
  import { Button } from "$lib/components/ui/button";
  import * as AlertDialog from "$lib/components/ui/alert-dialog";
  import * as Card from "$lib/components/ui/card";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { toast } from "svelte-sonner";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import Icon from "@iconify/svelte";

  let alertDialogOpen = false;
</script>

<div class="flex flex-col gap-[5px]">
  <!-- sonner and buttons -->
  <Button
    on:click={() =>
      toast.info("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "X",
          onClick: () => {}
        }
      })}
    class="flex max-w-[120px] items-center justify-center gap-[5px] p-5"
  >
    <Icon icon="mdi:plus-circle" width="22px" height="22px" />
    <p>Toast</p>
  </Button>
  <div class="flex items-center gap-[5px]">
    <Button>Button</Button>
    <Button variant="secondary">Button</Button>
    <Button variant="destructive">Button</Button>
    <Button variant="outline">Button</Button>
  </div>
  <!-- alert dialog -->
  <Button
    class="flex max-w-[200px] items-center justify-center gap-[5px] p-5"
    on:click={() => (alertDialogOpen = true)}
  >
    <Icon icon="mdi:alert" width="22px" height="22px" />
    <p>Alert Dialog</p>
  </Button>
  <!-- card -->
  <div class="flex w-full items-center justify-start p-5">
    <Card.Root class="w-[350px]">
      <Card.Header>
        <Card.Title>Create project</Card.Title>
        <Card.Description>Deploy your new project in one-click.</Card.Description>
      </Card.Header>
      <Card.Content>
        <form>
          <div class="grid w-full items-center gap-4">
            <div class="flex flex-col space-y-1.5">
              <Label for="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div class="flex flex-col space-y-1.5">
              <Label for="description">Description</Label>
              <Input id="description" placeholder="Description of your project" />
            </div>
          </div>
        </form>
      </Card.Content>
      <Card.Footer class="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </Card.Footer>
    </Card.Root>
  </div>
  <!-- checkbox -->
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" aria-labelledby="terms-label" />
    <Label
      id="terms-label"
      for="terms"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Accept terms and conditions
    </Label>
  </div>
</div>

<AlertDialog.Root bind:open={alertDialogOpen}>
  <AlertDialog.Content>
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
