import type { PageLoad } from './$types';
import axios from 'axios';

export const load = (async ({ url }) => {
	const search = url.searchParams.get('q');
	const site = url.searchParams.get('s');
	const BASE_URL = 'https://seedstorm.ashzero.dev/api/v1';

	const req = await axios.get(`${BASE_URL}/search?query=${search}&site=${site}`);
	if (req.status === 200) {
		return { torrents: req.data.data };
	}
}) satisfies PageLoad;
