<script lang="ts">
	import { goto } from '$app/navigation';
	import { sites } from '$lib/data';
	import Search from 'phosphor-svelte/lib/ListMagnifyingGlass';

	let searchTerm: string;

	function handleSubmit() {
		goto(`/search?q=${searchTerm}`);
	}
</script>

<main>
	<div class="container flex flex-col justify-around items-center">
		<div class="flex flex-col justify-center items-center gap-32">
			<div>
				<h1 class="h1">SEEDSTORM</h1>
			</div>
			<div class="flex flex-col gap-10 justify-center items-center">
				<form on:submit|preventDefault={handleSubmit} class="flex gap-3">
					<input type="text" bind:value={searchTerm} class="input" placeholder="Search Here ..." />
					<button class="btn-sm rounded-md variant-ghost-surface">
						<Search size={20} />
					</button>
				</form>
				<div class="flex flex-wrap gap-5 justify-center items-center">
					{#each sites as site}
						<button class="btn variant-ghost rounded-md">{site}</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.container {
		min-height: 80vh;
	}
</style>
