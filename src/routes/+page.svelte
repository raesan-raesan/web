<script>
  import { Button } from "$lib/components/ui/button";
  import CirclePlus from "lucide-svelte/icons/circle-plus";
</script>

<a href="/create-test" class="fixed bottom-0 right-0 flex items-center justify-end p-5">
  <Button class="flex items-center justify-center gap-[5px] p-5">
    <CirclePlus class="h-[22px] w-[22px]" />
    <p>Create Test</p>
  </Button>
</a>

<div class="mt-[120px] flex w-full flex-col items-center">
  <h2 class="text-2xl">Your Tests</h2>
  <div id="test_list" class="mt-[30px] flex w-full flex-col items-center gap-[20px]"></div>
</div>
