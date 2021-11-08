let a = [1,2,3];
let g = 0
let test = (entry:any) => {
    for (let index = 0; index < entry.length; index++) {
        let element = entry[index];
        g = g + element
    }
    return g
}

let c = test(a)
console.log(c)