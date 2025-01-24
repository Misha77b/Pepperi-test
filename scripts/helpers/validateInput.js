// Helper function to validate input
export function validateInput(input) {
	const regex = /^\s*([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)\s*$/;
	return regex.test(input);
}
