<script lang="ts">
	import { goto } from '$app/navigation';
	import { sites } from '$lib/data';
	import { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import Search from 'phosphor-svelte/lib/ListMagnifyingGlass';

	let searchTerm: string;
	let site: string = 'nyaasi';

	function handleSubmit() {
		const t: ToastSettings = {
			message: 'Processing...'
		};
		toastStore.trigger(t);

		goto(`/search?q=${searchTerm}&s=${site}`);
	}
</script>

<main>
	<div class="container flex flex-col justify-around items-center">
		<div class="flex flex-col justify-center items-center gap-32">
			<div>
				<h1 class="h1">SEEDSTORM</h1>
			</div>
			<div class="flex flex-col justify-center items-center">
				<form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-5">
					<input type="text" bind:value={searchTerm} class="input" placeholder="Search Here ..." />

					<div class="flex justify-around gap-3">
						<select class="select" bind:value={site}>
							{#each sites as site}
								<option value={site}>{site}</option>
							{/each}
						</select>
						<button class="btn-sm rounded-md variant-ghost-surface">
							<Search size={20} />
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</main>

<style>
	.container {
		min-height: 80vh;
	}
</style>
