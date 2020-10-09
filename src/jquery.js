window.jQuery = function (selecorOrArray) {
  let elements;
  if (typeof selecorOrArray === "string") {
    elements = document.querySelectorAll(selecorOrArray);
  } else if (selecorOrArray instanceof Array) {
    elements = selecorOrArray;
  }
  return {
    addClass(className) {
      // console.dir(elements);
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className);
      }
      return this;
    },
    find(selector) {
      let array = [];
      for (let i = 0; i < elements.length; i++) {
        let elems = Array.from(elements[i].querySelectorAll(selector));
        array.push(...elems);
      }
      // console.log(array);
      return jQuery(array);
    },
  };
};

window.$ = window.jQuery;
$("#test").addClass("blue");
$("#test").find(".child").addClass("red"); // 请确保这句话成功执行
