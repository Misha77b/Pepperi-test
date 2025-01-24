export function sortByNameLogic() {
	const options = Array.from(pairList.options);
	options.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
	pairList.innerHTML = "";
	options.forEach((option) => pairList.appendChild(option));
}
