<script lang="ts">
	import Table from '$lib/components/Table.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let torrents: TorrentData[] = data.torrents;
</script>

<main>
	<div class="m-4">
		<Table {torrents} />
	</div>
</main>
