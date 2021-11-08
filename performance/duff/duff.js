function test(iterations) {
    var testVal = 0;
    for(var i=0;i<iterations;i++){
        testVal++;
    }
    return testVal
}

function testDuffSlow(iterations) {
    var testVal = 0;
    var n = Math.ceil(iterations / 8);
    var caseTest = iterations % 8;
    do {
        switch (caseTest) {
            case 0:
                testVal++;
            case 7:
                testVal++;
            case 6:
                testVal++;
            case 5:
                testVal++;
            case 4:
                testVal++;
            case 3:
                testVal++;
            case 2:
                testVal++;
            case 1:
                testVal++;
        }
        caseTest = 0;
    }
    while (--n > 0);
    return testVal;
}

function testDuff(iterations) {
    var testVal = 0;
        var n = Math.ceil(iterations / 8);
        var caseTest = iterations % 8;      
        do {
            testVal++;
            testVal++;
            testVal++;
            testVal++;
            testVal++;
            testVal++;
            testVal++;
            testVal++;
        } while (--n > 0);
        return testVal;
}

console.time("test");
console.log(test(1000000000))
console.timeEnd("test");

console.time("testDuff");
console.log(testDuffSlow(1000000000))
console.timeEnd("testDuff");
