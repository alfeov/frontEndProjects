export let value;
export const promise = (async () => {
	value = await Promise.resolve('res');
})();

export {
	value,
	promise
}