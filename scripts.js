const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

const openTab = (event, key) => {
  for (const tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (const tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(key).classList.add("active-tab");
};
