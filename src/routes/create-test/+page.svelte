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

  let { data } = $props();
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
  {#await data.create_test_meta}
    <p class="text-4xl">Loading...</p>
  {:then create_test_meta}
    <div id="create_test_input_box" class="w-full">
      {#if create_test_input.curr_step == 1}
        <div class="w-full">
          <form id="class_input_form" class="flex w-full flex-col items-center gap-[20px]">
            {#each create_test_meta.classes as curr_class}
              <div
                class="flex w-full max-w-[230px] items-center justify-between space-x-2 rounded-lg border p-4"
              >
                <Label
                  for={`class_${curr_class.id}`}
                  class="bg-blue w-full flex-1 gap-1.5 text-sm font-medium"
                >
                  Class {curr_class.name}
                </Label>
                <Checkbox
                  id={`class_${curr_class.id}`}
                  checked={create_test_input.classes.some((item) => item.id == curr_class.id)}
                  onCheckedChange={(state) => {
                    if (state) {
                      create_test_input.classes.push(curr_class);
                    } else {
                      create_test_input.classes.splice(
                        create_test_input.classes.indexOf(curr_class),
                        1
                      );
                    }
                  }}
                />
              </div>
            {/each}
          </form>
        </div>
      {/if}
      {#if create_test_input.curr_step == 2}
        <div class="w-full">
          <form id="subject_input_form" class="flex w-full flex-col items-center gap-[20px]">
            {#each create_test_meta.subjects as curr_subject}
              {#if create_test_input.classes.some((item) => item.id === curr_subject.class_id)}
                <div
                  class="flex w-full max-w-[230px] items-center justify-between space-x-2 rounded-lg border p-4"
                >
                  <Label
                    for={`subject_${curr_subject.id}`}
                    class="bg-blue w-full flex-1 gap-1.5 text-sm font-medium"
                  >
                    {curr_subject.display_name}
                  </Label>
                  <Checkbox
                    id={`subject_${curr_subject.id}`}
                    checked={create_test_input.subjects.some((item) => item.id == curr_subject.id)}
                    onCheckedChange={(state) => {
                      if (state) {
                        create_test_input.subjects.push(curr_subject);
                      } else {
                        create_test_input.subjects.splice(
                          create_test_input.subjects.indexOf(curr_subject),
                          1
                        );
                      }
                    }}
                  />
                </div>
              {/if}
            {/each}
          </form>
        </div>
      {/if}
      {#if create_test_input.curr_step == 3}
        <div class="w-full">
          <form id="chapter_input_form" class="flex w-full flex-col items-center gap-[20px]">
            {#each create_test_meta.chapters as curr_chapter}
              {#if create_test_input.subjects.some((item) => item.id === curr_chapter.subject_id)}
                <div
                  class="flex w-full max-w-[230px] items-center justify-between space-x-2 rounded-lg border p-4"
                >
                  <Label
                    for={`chapter_${curr_chapter.id}`}
                    class="bg-blue w-full flex-1 gap-1.5 text-sm font-medium"
                  >
                    {curr_chapter.display_name}
                  </Label>
                  <Checkbox
                    id={`chapter_${curr_chapter.id}`}
                    checked={create_test_input.chapters.some((item) => item.id == curr_chapter.id)}
                    onCheckedChange={(state) => {
                      if (state) {
                        create_test_input.chapters.push(curr_chapter);
                      } else {
                        create_test_input.chapters.splice(
                          create_test_input.chapters.indexOf(curr_chapter),
                          1
                        );
                      }
                    }}
                  />
                </div>
              {/if}
            {/each}
          </form>
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
          } else if (create_test_input.curr_step == 2) {
            create_test_input.subjects = [];
            create_test_input.curr_step -= 1;
          } else if (create_test_input.curr_step == 3) {
            create_test_input.chapters = [];
            create_test_input.curr_step -= 1;
          } else if (create_test_input.curr_step == 4) {
            create_test_input.format.total_questions = [10];
            create_test_input.curr_step -= 1;
          }
        }}
        class="btn btn-secondary max-w-[160px] flex-1 rounded-[6px]"
        >{#if create_test_input.curr_step == 1}Home{:else}Previous{/if}</Button
      >
      <Button
        id="next_button"
        on:click={() => {
          if (create_test_input.curr_step == 1) {
            if (create_test_input.classes.length != 0) {
              create_test_input.curr_step += 1;
            } else {
              alert("Sorry, you have to select something!");
            }
          } else if (create_test_input.curr_step == 2) {
            if (create_test_input.subjects.length != 0) {
              create_test_input.curr_step += 1;
            } else {
              alert("Sorry, you have to select something!");
            }
          } else if (create_test_input.curr_step == 3) {
            if (create_test_input.chapters.length != 0) {
              create_test_input.curr_step += 1;
            } else {
              alert("Sorry, you have to select something!");
            }
          } else if (create_test_input.curr_step == 4) {
            fetch("/api/create-test", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(create_test_input)
            })
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log(data);
                // if (data.questions.length == 0) {
                //   alert("Something went wrong, Your test has no questions!");
                // } else {
                //   localStorage.setItem(`raesan_test_id:${data.id}`, JSON.stringify(data));
                //   window.location.href = "/";
                // }
              })
              .catch((error) => {
                console.error("Failed to make a request to the Server, Error:", error);
              });
          }
        }}
        class="btn btn-primary max-w-[160px] flex-1 rounded-[6px]"
      >
        {#if create_test_input.curr_step == 4}Create Test{:else}Next{/if}
      </Button>
    </div>
  {:catch}
    <p class="text-4xl">Oops! Something Went Wrong!</p>
  {/await}
</div>
