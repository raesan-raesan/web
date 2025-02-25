<script>
	import { page } from '$app/state';
	const test = JSON.parse(localStorage.getItem(`raesan_test_id:${page.params.test_id}`));
	let questions = test.questions;
</script>

<h1 class="mb-[20px] mt-[60px] text-3xl">Test Page</h1>
<div class="flex flex-col gap-[15px]">
	{#each questions as question, i}
		<div class="flex gap-[5px]">
			<p>{i + 1}.</p>
			<p>{question.body}</p>
		</div>
	{/each}
</div>
