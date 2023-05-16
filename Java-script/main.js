const function1 = (a, b) => {
    return a * b;

}
console.log(function1(3, 4));
//
const check = (i) => {
    if (i % 2 === 0) {
        return true;
    } else return false;

}
console.log(check(3));
//
const welcome = (name, age) => {
    let a = "xin chao";
    return a + "\t" + name + "\t" + age;
}
console.log(welcome("Luan", 8));
//
const function2 = (x) => {

    switch (true) {
        case x < 5:
            document.write("Không đạt");
            break;
        case x >= 5 && x < 6.5:
            document.write("Đạt");
            break;
        case x >= 6.5 && x < 8:
            document.write("Khá");
            break;
        case x >= 8 && x <= 10:
            document.write("Giỏi");
            break;
        default:

    }


}
//function2(10);
//
const function3 = (n) => {
    for (let i = 0; i < n; i++) {
        document.write(i + "\t");
    }

};
//function3(5);
//
const sum = () => {
    let total = 0;
    for (let i = 1; i <= 100; i++) {
        total += i;

    }
    return total;
}
//document.write(sum());
//
const function4 = (n) => {
    for (let i = 1; i <= 10; i++) {
        document.write(n + "x" + i + "=" + n * i + '</br>');
    }


}
function4(9);




