<script>
  import { Button } from "$lib/components/ui/button";
  import { CirclePlus, Trash2 } from "lucide-svelte";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { isValidUuid } from "$lib";

  let tests = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("raesan_test_id")) {
      let key_parts = key.split(":");
      if (isValidUuid(key_parts[1]) == true) {
        const value = localStorage.getItem(key);
        tests.push(JSON.parse(value));
      }
    }
  }
  const handleDeleteTest = (test_id) => {
    let curr_test = tests.find((element) => element.id == test_id);
    let choice = confirm(`WARNING! Do you want to delete '${curr_test.name}'`);
    if (choice == true) {
      localStorage.removeItem(`raesan_test_id:${test_id}`);
      document.getElementById(test_id).remove();
    }
  };
</script>

<a href="/create-test" class="fixed bottom-0 right-0 flex items-center justify-end p-5">
  <Button class="flex items-center justify-center gap-[5px] p-5">
    <CirclePlus class="h-[22px] w-[22px]" />
    <p>Create Test</p>
  </Button>
</a>

<div class="mt-[120px] flex w-full flex-col items-center">
  <h2 class="text-2xl">Your Tests</h2>
  <div id="test_list" class="mt-[30px] flex w-full flex-col items-center gap-[20px]">
    {#each tests as test}
      <div
        class="flex w-[250px]
	  	items-center justify-between rounded-lg border px-4 py-2.5 text-[13px] shadow-lg
	  	"
        id={`${test.id}`}
      >
        <a href={`/test/${test.id}`} class="w-full max-w-[150px] truncate">
          <Tooltip.Root class="w-full">
            <Tooltip.Trigger class="flex w-full items-center justify-start">
              {test.name}
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>{test.name}</p>
            </Tooltip.Content>
          </Tooltip.Root>
        </a>
        <Button class="btn btn-accent join-item" size="icon" on:click={handleDeleteTest(test.id)}>
          <Trash2 class="h-[22px] w-[22px]" />
        </Button>
      </div>
    {/each}
  </div>
</div>
