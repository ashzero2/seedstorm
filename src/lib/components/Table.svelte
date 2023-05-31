<script lang="ts">
	import Magnet from 'phosphor-svelte/lib/Magnet';
	import Link from 'phosphor-svelte/lib/Link';

	export let torrents: TorrentData[];
</script>

<div class="table-container overflow-scroll">
	<table class="table table-hover">
		<thead>
			<th>Name</th>
			<th>Size</th>
			<th>seeders</th>
			<th>leechers</th>
			<th>Category</th>
			<th>Downloads</th>
			<th>Date</th>
			<th>Links</th>
		</thead>
		<tbody>
			{#each torrents as torrent, i}
				<tr>
					<td><div class="">{torrent.name}</div></td>
					<td class="text-center">{torrent.size}</td>
					<td class="text-center">{torrent.seeders}</td>
					<td class="text-center">{torrent.leechers}</td>
					<td class="text-center">{torrent.category}</td>
					<td class="text-center">{torrent.downloads}</td>
					<td class="text-center">{torrent.date}</td>
					<td class="text-center">
						<div class="flex justify-between">
							<a href={torrent.url}>
								<Link size={18} />
							</a>
							<a href={torrent.magnet}>
								<Magnet size={18} />
							</a>
						</div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
</style>
