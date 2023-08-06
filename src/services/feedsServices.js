/**
 * Get the feeds data from service.
 * @async
 * @function getFeeds
 * @returns {Promise<Object>} Promise.
 * @throws {Error} If there ara any error fetching the data.
 */
export const getFeeds = async () => {
    return await (await fetch('https://run.mocky.io/v3/25c6bdb6-6377-41f9-907d-c6549ce9e4f7')).json();
};
