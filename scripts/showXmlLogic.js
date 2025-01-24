const xmlDisplay = document.getElementById("xmlDisplay");
const xmlContent = document.getElementById("xmlContent");

export function showXmlLogic() {
	const options = Array.from(pairList.options);
	if (options.length === 0) {
		alert("No items to display as XML.");
		return;
	}

	let xml = "<pairs>\n";
	options.forEach((option) => {
		xml += `  <pair>\n    <name>${option.dataset.name}</name>\n    <value>${option.dataset.value}</value>\n  </pair>\n`;
	});
	xml += "</pairs>";

	xmlContent.textContent = xml;
	xmlDisplay.classList.remove("hidden");
}
