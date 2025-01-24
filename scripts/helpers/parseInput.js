// Helper function to parse input
export function parseInput(input) {
	const regex = /^\s*([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)\s*$/;
	const match = input.match(regex);
	return { name: match[1], value: match[2] };
}
