

import { getFetch, postFetch, putFetch, deleteContactFetch } from "./requests.js";
import sortTableArray from "./sort-table-array.js";

//using only for its effect     
let sideEffect;
export default sideEffect;

//post button
document.querySelector('#post-btn').addEventListener('click', postFetch);

//get button
document.querySelector('#get').addEventListener('click', getFetch);

document.querySelector('#search-input').addEventListener('keyup', filterByProperty);

//array-table sorting
document.querySelector('#th-firstName')
	.addEventListener('click', sortTableArray);


document.querySelector('#th-lastName')
	.addEventListener('click', sortTableArray);

document.querySelector('#th-phone')
	.addEventListener('click', sortTableArray);

document.querySelector('#th-email')
	.addEventListener('click', sortTableArray);

document.querySelector('#th-dob')
	.addEventListener('click', sortTableArray);

document.querySelector('#th-notes')
	.addEventListener('click', sortTableArray);