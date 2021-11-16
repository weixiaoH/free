// 给出如下数据格式的虚拟dom， 将其转换为真实dom

const vnode = {
    tag: 'DIV',
    attrs: {
        id: 'app'
    },
    children: [
        {
            tag: 'SPAN',
            children: [
                {
                    tag: 'A',
                    children: []
                }
            ]
        },
        {
            tag: 'SPAN',
            children: [
                {
                    tag: 'A',
                    children: []
                },
                {
                    tag: 'A',
                    children: []
                }
            ]
        }
    ]
};

function render(vnode) {
    if (typeof vnode === 'number') {
        vnode = String(vnode);
    }

    if (typeof vnode === 'string') {
        return document.createTextNode(vnode);
    }

    const element = document.createElement(vnode.tag)

    if (vnode.attrs) {
        Object.keys(vnode.attrs).forEach(attrKey => {
            element.setArrtribute(key, vnode.attrs[attrKey])
        })
    }

    if (vnode.children) {
        vnode.children.forEach(childNode => {
            element.appendChild(render(childNode));
        })
    }

    return element;
}
