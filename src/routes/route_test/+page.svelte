<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { toast } from "svelte-sonner";
  import Icon from "@iconify/svelte";
</script>

<div class="flex flex-col gap-[5px]">
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
</div>
