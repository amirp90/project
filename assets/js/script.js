window.addEventListener("load", () => {
  let headerMenuItem = document.getElementsByClassName("header-menu-item");
  activeMenuListener(headerMenuItem, "menu-active");

  function activeMenuListener(array, removeClassListener) {
    for (let i = 0; i < array.length; i++) {
      array[i].addEventListener("click", () => {
        activeMenu(array, i, removeClassListener);
      });
    }
    function activeMenu(list, listItem, removeClass) {
      for (let i = 0; i < list.length; i++) {
        list[i].classList.remove(removeClass);
        list[listItem].classList.add(removeClass);
      }
    }
  }
});
