/** @typedef {import('../utils/podcastUtils.js').Podcast} Podcast */

const API_URL = "https://podcast-api.netlify.app";

/**
 * Fetches the full list of podcast previews from the remote API.
 * @returns {Promise<Podcast[]>} Resolves with an array of podcast preview objects.
 * @throws {Error} When the network request fails or the response is not OK.
 */
export async function fetchPodcasts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch podcasts (${response.status})`);
  }

  return response.json();
}
