const { compile } = require("sizzle");

window.dom = {
  create(content) {
    /**
     * 用于创建节点
     */
    const container = document.createElement("template");
    container.innerHTML = content.trim();
    return container.content.firstChild;
  },
  after(node, pendNode) {
    /**
     * 用于新增弟弟
     */
    node.parentNode.insertBefore(pendNode, node.nextSibling);
  },
  before(node, pendNode) {
    /**
     * 用于新增哥哥
     */
    node.parentNode.insertBefore(pendNode, node);
  },
  append(parent, child) {
    /**
     * 用于新增儿子
     */
    parent.appendChild(child);
  },
  wrap(child, parent) {
    /**
     * 用于新增父亲
     */
    dom.before(child, parent);
    dom.append(parent, child);
  },

  find(selector, scope) {
    /**
     * 返回与指定的选择器组匹配的文档中的元素列表 (使用深度优先的先序遍历文档的节点)。返回的对象是 NodeList
     * selector: css选择器
     * scope?: 指定查找范围
     */
    return (scope || document).querySelectorAll(selector);
  },
  style(node, name, value) {
    /**
     * 设置或获取元素属性
     * node: 指定元素
     * name: Object|string name传入Object对象时表示将元素样式设置为name对象的属性
     *       name传入为string类型时表示获取 style[name] 样式
     * value?：样式属性值
     */
    if (arguments.length === 3) {
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        return node.style[name];
      } else if (name instanceof Object) {
        const obj = name;
        for (let key in obj) {
          node.style[key] = obj[key];
        }
      }
    }
  },
  each(nodeList, fn) {
    /**
     * 遍历元素数组，并对每个元素调用fn
     */
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
};
