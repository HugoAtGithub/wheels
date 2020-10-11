// debugger;
// 增
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

// 删
console.log(dom.remove(e1))
console.log(JSON.stringify(dom.empty(empty)))

// 改
dom.attr(d1, 'title', 'Hi, I am Frank')
const title = dom.attr(d1, 'title')
console.log(`title: ${title}`)
dom.text(d1, '你好，这是新的内容')
console.log(dom.text(d1))
// dom.html(d1, '<span>标签， 新的标签</span>')
// console.log(dom.html(d1))

dom.style(d1, {border: '1px solid red', color: 'blue'})
console.log(dom.style(d1, 'border'))
dom.style(d1, 'border', '1px solid black')

dom.class.add(d1, 'red')
dom.class.add(d1, 'blue')
dom.class.remove(d1, 'blue')
console.log(dom.class.has(d1, 'red'))

const fn = () => {
  console.log('点击了')
}
dom.on(d1, 'click', fn)
dom.off(d1, 'click', fn)

const div = dom.find("#test>.red")[0]; // 获取对应的元素
dom.style(div, "color", "green"); // 设置 div.style.color

const divList = dom.find(".red"); // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)); // 遍历 divList 里的所有元素
