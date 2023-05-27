// imports
import { links } from "./links.js";

//constants
const linkContainer = document.getElementById("links");

//functions
function addLink(name, link, icon) {
  return `
  <a class="link" href="${link}" target="_blank">
    <i class="${icon}">&nbsp;</i>${name}
  </a>
  `;
}

// logic
let allLinks = "";

links.forEach((ele) => {
  let link = ele.link;
  let name = ele.name;
  let icon = ele.icon;

  allLinks += addLink(name, link, icon);
});

linkContainer.innerHTML = allLinks;