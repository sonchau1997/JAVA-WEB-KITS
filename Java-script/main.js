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
//function4(9);
//document.getElementById("introduce").style.color="red";
//document.querySelector(".introduce").style.color="blue";
const para = document.createElement("p");
para.innerText = "Hello"
//const para=document.createElement("BUTTON");
//const node = document.createTextNode("Hello"); 
//para.appendChild(node);
document.body.appendChild(para);
const myFunction = () => {

    //document.getElementById("myName").style.color = "red";
    document.getElementById("myName").innerHTML = "Son";
    alert("ahihi");
}
const change = () => {
    console.log("change");
}
const student = ["Vỹ", "Khương", "Quỳnh Anh", "Nhất Anh", "Tiến Anh", "Đức anh"];
console.log(student);
console.log('Chiều dài của mảng là:' + "\t" + student.length);
console.log('vị trí của Nhất Anh là:' + student.indexOf("Nhất Anh"));
student.shift();
console.log(student);
const chuoiten = student.join("-");
console.log("chuoiten" + chuoiten);
console.log(Math.round(Math.random() * 100));
const random = (x, y) => {
    for (let i = x; i < y; i++) {


    }



}
random(1, 100);


var seed = 42;

function middleSquareMethod() {

    var result = (seed * seed).toString().padStart(4, "0").slice(1, 3);


    seed = parseInt(result);

    return parseInt(result);

}
console.log(middleSquareMethod());

console.log(!'1');
//////////////////////////////
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyecolor: "blue"
};
console.log(Object.keys(person));
console.log(Object.values(person));
//String
let txt = "DEVERA";
let length = txt.length;
txt.slice(0, 3);
txt.slice(3, 6);
txt.slice(3)
txt.replace("DEV", "abc");
let txt1 = "  Hello world!  ";
let txt2 = txt1.trim();
let text = "D,E,V";
let myArray = text.split(",");
//
let originalString = "Lop hoc web cua KITS";
console.log(originalString);
console.log(originalString.length);
console.log(originalString.slice(8, 11));
//console.log(originalString.replaceAll(" ",","));
//console.log(originalString.split(","));
const isDev = s => s.includes('Dev');
console.log(isDev('Dev web KITS'));
console.log(isDev('Web KITS'));
////////////////////////////////
const isPrime = (n) => {

    if (n < 2) return false;
    for (let i = 2; i < n / 2; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;


}
//document.write(isPrime(47));
///
var total = 0;
const sumNumber = (n) => {
    for (let i = 1; i <= n; i++) {
        total = total + i / n;
    }
    return total;


}
document.write(sumNumber(4));
////
function ValidateEmail()
{
    var x = document.getElementById("myEmail").pattern;
    document.getElementById("demo").innerHTML = x;

}










