/**Query Selector-Selecting DOM elements 
 * const means variable is immutable. It cannot be reassigned
*/
const a = document.querySelector('div');
/**Do same with d3. We have already loaded it using src="https://d3js.org/d3.v5.js"*/
const b = d3.select("div");
/**Difference is select() method returns the div object in a d3 wrapper which makes various d3 methods available for this object */


const c = document.querySelectorAll("div");
const d = d3.selectAll("div");

console.log(a,b,c,d)