export function sortByValueLogic() {
	const options = Array.from(pairList.options);
	options.sort((a, b) => a.dataset.value.localeCompare(b.dataset.value));
	pairList.innerHTML = "";
	options.forEach((option) => pairList.appendChild(option));
}
