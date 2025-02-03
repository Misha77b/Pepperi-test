// import module functions
import { addLogic } from "./addLogic.js";
import { sortByNameLogic } from "./sort/sortByNameLogic.js";
import { sortByValueLogic } from "./sort/sortByValueLogic.js";
import { showXmlLogic } from "./showXmlLogic.js";
import { deleteLogic } from "./deleteLogic.js";

// Select DOM elements
const inputPair = document.getElementById("inputPair");
const pairList = document.getElementById("pairList");
const addButton = document.getElementById("addButton");
const sortByNameButton = document.getElementById("sortByNameButton");
const sortByValueButton = document.getElementById("sortByValueButton");
const deleteButton = document.getElementById("deleteButton");
const showXmlButton = document.getElementById("showXmlButton");

// Add a new name/value pair
addButton.addEventListener("click", addLogic);

// Sort pairs by name
sortByNameButton.addEventListener("click", sortByNameLogic);

// Sort pairs by value
sortByValueButton.addEventListener("click", sortByValueLogic);

// Show pairs as XML
showXmlButton.addEventListener("click", showXmlLogic);

// Delete selected pairs
deleteButton.addEventListener("click", deleteLogic);
