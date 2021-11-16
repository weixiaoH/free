//实现一个深拷贝

//JSON.parse(JSON.stringify(obj)) Reflect?


//js 的基本类型 WeakMap 弱引用 不会循环引用，GC，引用计数
function deepClone(obj, hash = new WeakMap()) {
    if(obj == null){
        return null
    }

    if(obj instanceof Date){
        return new Date(obj);
    }

    if(obj instanceof RegExp){
        return new RegExp(obj);
    }

    if(typeof obj !== 'object'){
        return obj;
    }

    if(hash.has(obj)){
        return hash.get(obj);
    }

    const resObj = Array.isArray(obj) ? [] : {};

    hash.set(obj, resObj);

    Reflect.ownKeys(obj).forEach(key => {
        resObj[key] = deepClone(obj[key], hash);
    })

    return resObj;
}