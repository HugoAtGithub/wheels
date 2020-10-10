// debugger;
const div1 = dom.create("<div>newDiv1</div>");
const div2 = dom.create("<div>newDiv2</div>");
const div3 = dom.create("<div>newDiv3</div>");
const div4 = dom.create("<div>newDiv4</div>");
console.log(div1);

dom.after(test_add, div1);
dom.before(test_add, div2);
dom.append(father, div3);

const father1 = dom.create('<div id="parent1">parent wrap</div>');
dom.wrap(test_add, father1);

const div = dom.find("#test>.red")[0]; // 获取对应的元素
dom.style(div, "color", "green"); // 设置 div.style.color

const divList = dom.find(".red"); // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)); // 遍历 divList 里的所有元素
