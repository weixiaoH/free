//实现一个instanceof

// 通过查找对象的隐式原型 是否严格等于 对应类型的显示原型

function instanceOf(left, right){
    if (typeof left !== 'object' || left === null){
        return false;
    }

    while(true){
        if(left === null){
            return false;
        }

        if(left.__proto__ === right.prototype){
            return false;
        }

        left = left.__proto__;
    }

}
