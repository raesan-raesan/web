<script>
  import CircleX from "lucide-svelte/icons/circle-x";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<div
  class="flex items-center justify-between rounded-lg border bg-background p-[16px] text-[13px] shadow-lg xs:min-w-[356px]"
>
  <div class="flex w-full flex-col gap-[2px]">
    <p class="font-[500] text-foreground">Custom Component</p>
    <p class="font-[400] text-muted-foreground">Custom Description</p>
  </div>
  <button on:click={() => dispatch("closeToast")}>
    <CircleX class="h-[22px] w-[22px] text-primary" />
  </button>
</div>
