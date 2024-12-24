<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import Icon from "@iconify/svelte";
</script>

<div class="fixed bottom-0 right-0 flex items-center justify-end p-5">
  <Button class="flex items-center justify-center gap-[5px] p-5">
    <Icon icon="mdi:plus-circle" width="22px" height="22px" />
    <a href="/create-test"> Create Test </a>
  </Button>
</div>

<div class="mt-[120px] flex w-full flex-col items-center">
  <h2 class="text-2xl">Your Tests</h2>
  <div id="test_list" class="mt-[30px] flex w-full flex-col items-center gap-[20px]"></div>
</div>
