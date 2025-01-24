export function deleteLogic() {
	const selectedOptions = Array.from(pairList.selectedOptions);
	selectedOptions.forEach((option) => option.remove());
}
