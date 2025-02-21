<script>
  import "../app.css";
  import { page } from "$app/state";
  import { Toaster } from "$lib/components/ui/sonner";
  import { Button } from "$lib/components/ui/button";
  import { toggleMode } from "mode-watcher";
  import { ModeWatcher } from "mode-watcher";
  import { Sun, Moon, ArrowBigLeft } from "lucide-svelte";
  let { children } = $props();
</script>

<ModeWatcher />
<Toaster position="top-right" />
<div
  class={`fixed ${["/create-test"].includes(page.url.pathname) || page.url.pathname.startsWith("/test/") ? "left-0" : ""} right-0 top-0 flex items-center justify-between p-4`}
>
  {#if ["/create-test"].includes(page.url.pathname) || page.url.pathname.startsWith("/test/")}
    <Button href="/" variant="outline">
      <ArrowBigLeft class="h-[1.2rem] w-[1.2rem]" />
    </Button>
  {/if}
  <Button on:click={toggleMode} variant="outline" size="icon">
    <Sun
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <Moon
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
</div>
{@render children()}
