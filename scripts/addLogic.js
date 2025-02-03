import { validateInput } from "./helpers/validateInput.js";
import { parseInput } from "./helpers/parseInput.js";

export function addLogic() {
	const input = inputPair.value;
	if (validateInput(input)) {
		const { name, value } = parseInput(input);
		const option = document.createElement("option");
		option.textContent = `${name} = ${value}`;
		option.dataset.name = name;
		option.dataset.value = value;
		pairList.appendChild(option);
		inputPair.value = "";
	} else {
		alert("Invalid input. Please use the format: name=value");
	}
}
