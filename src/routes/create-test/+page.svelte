<script>
  import { Button } from "$lib/components/ui/button";
  import { Slider } from "$lib/components/ui/slider";
  import { goto } from "$app/navigation";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { Label } from "$lib/components/ui/label";

  // main input
  let create_test_input = $state({
    curr_step: 1,
    classes: [],
    subjects: [],
    chapters: [],
    format: {
      total_questions: [10]
    }
  });
</script>

<div class="mt-[60px] flex w-full flex-col items-center gap-[60px] px-3">
  <Breadcrumb.Root>
    <Breadcrumb.List class="text-[18px]">
      <Breadcrumb.Item>
        <Breadcrumb.Page
          class={`${create_test_input.curr_step == 1 ? "" : "text-muted-foreground"}`}
          >Class</Breadcrumb.Page
        >
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Page
          class={`${create_test_input.curr_step == 2 ? "" : "text-muted-foreground"}`}
          >Subject</Breadcrumb.Page
        >
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Page
          class={`${create_test_input.curr_step == 3 ? "" : "text-muted-foreground"}`}
          >Chapter</Breadcrumb.Page
        >
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Page
          class={`${create_test_input.curr_step == 4 ? "" : "text-muted-foreground"}`}
          >Format</Breadcrumb.Page
        >
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb.Root>
  <div id="create_test_input_box" class="w-full">
    {#if create_test_input.curr_step == 1}
      <div class="w-full">
        <form id="class_input_form" class="flex w-full flex-col items-center gap-[20px]">
          {#each { length: 20 }}
            <div
              class="flex w-full max-w-[200px] items-center justify-between space-x-2 rounded-lg border p-4"
            >
              <div class="grid gap-1.5 leading-none">
                <Label
                  for="some_class_id"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Some Class
                </Label>
              </div>
              <Checkbox id="some_class_id" />
            </div>
          {/each}
        </form>
      </div>
    {/if}
    {#if create_test_input.curr_step == 2}
      <div class="hidden w-full">
        <form id="subject_input_form" class="flex w-full flex-col items-center gap-[20px]"></form>
      </div>
    {/if}
    {#if create_test_input.curr_step == 3}
      <div class="hidden w-full">
        <form id="chapter_input_form" class="flex w-full flex-col items-center gap-[20px]"></form>
      </div>
    {/if}
    {#if create_test_input.curr_step == 4}
      <div class="w-full">
        <form id="format_input_form" class="flex w-full flex-col items-center gap-[20px]">
          <label for="total_questions" class="text-2xl">Total Questions</label>
          <div class="flex w-full max-w-[250px] items-center justify-center gap-[20px]">
            <Slider
              bind:value={create_test_input.format.total_questions}
              min={10}
              max={30}
              step={5}
              class="max-w-[200px]"
            />
            <p>{create_test_input.format.total_questions}</p>
          </div>
        </form>
      </div>
      <div class="flex w-full justify-center" id="final_input_display"></div>
    {/if}
  </div>
  <div class="mb-[50px] flex w-full max-w-[400px] items-center justify-evenly gap-[15px]">
    <Button
      id="prev_button"
      on:click={() => {
        if (create_test_input.curr_step == 1) {
          goto("/");
        } else {
          create_test_input.curr_step -= 1;
        }
      }}
      class="btn btn-secondary max-w-[160px] flex-1 rounded-[6px]"
      >{#if create_test_input.curr_step == 1}Home{:else}Previous{/if}</Button
    >
    <Button
      id="next_button"
      on:click={() => {
        if (create_test_input.curr_step == 4) {
          alert("Create Test");
        } else {
          create_test_input.curr_step += 1;
        }
      }}
      class="btn btn-primary max-w-[160px] flex-1 rounded-[6px]"
    >
      {#if create_test_input.curr_step == 4}Create Test{:else}Next{/if}
    </Button>
  </div>
</div>
