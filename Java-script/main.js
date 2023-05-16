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
const student = ["Vỹ", "Khương", "Quỳnh Anh", "Nhất Anh", "Tiến Anh", "Đức anh"]
console.log(student);
console.log('Chiều dài của mảng là:' + "\t" + student.length);
console.log('vị trí của Nhất Anh là:' + student.indexOf("Nhất Anh"));
student.shift();
console.log(student);
const chuoiten=student.join("-");
console.log("chuoiten"+chuoiten);
console.log(Math.round(Math.random()*100));
const random=(x,y)=>{
    for(let i=x;i<y;i++){
      // console.log(Math.random(i)*y%10);
       
    }
    
    

}
random(1,100);


var seed = 42;

function middleSquareMethod(){

    var result = (seed * seed).toString().padStart(4,"0").slice(1, 3);
    

    seed = parseInt(result);

    return parseInt(result);

}
console.log(middleSquareMethod());


