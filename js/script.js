/*var name = "sareth mean";
console.log(name.length);*/

// var boy = 2345;
// if (boy = 2345) {
//     console.log(true);
// }

// var myNumber = prompt();
// console.log(myNumber);
// var firstNumbr = prompt();
// var secondNumber = prompt();
// if (firstNumbr > secondNumber) {
//     console.log(firstNumbr + " is greater than " + secondNumber);

// } else {
//     console.log(firstNumbr + " is smaller than " + secondNumber);
// }

// var showNumber = prompt();
// var showIndex = "try again";
// var password = "sa1234";
// var sum = 0;
/*for (showIndex = 1; showIndex <= showNumber; showIndex++) {
    if (showIndex % 2 != 0) {
        console.log(showIndex);

    }

}*/

/*while (showIndex <= showNumber) {
    if (showIndex % 2 == 0) {
        console.log(showIndex);
    }
    showIndex++;

}*/
/*for (var showIndex = 1; showIndex <= showNumber; showIndex++) {
    sum = sum + showIndex;
    console.log(sum);
}*/
//confirm("Hello " + showNumber);
//alert("Hello Alert " + showNumber);
// if (showNumber == password) {
//     confirm("Correct Password:  " + showNumber);
//
//
// } else {
//     alert("Wrong Password:  " + showNumber);
//     console.log(showIndex);
// }
// //var name="Sareth";
// var showLetter = prompt();
// var myNumber="";
// var index;
// for(index = 1; index <= showLetter; index++)
// {
//   myNumber+=index + "<br>";
// document.getElementById('demo').innerHTML=myNumber;
// }
// console.log(typeof(myNumber
// var data;
// function sum(a,b)
// {
//   data= a+b;
//   return data;
// }
// function muti(a,b)
// {
//   mutiple=a*b;
//   return mutiple;
// }
//
// var c=prompt();
// var a=parseInt(c);
// var d=prompt();
// var b=parseInt(d);
// alert(muti(a,b));

// var arr=["sareth", "Jully", "Saily"];
// var index;
// for( index=0; index < arr.length; index++){
//   console.log(arr[index]);
// }i
// // let myNumber=[23, 24, 25, 26, 27, ["dara", "kaka"]];
// var myNumber=[1,2,4,5];
//
// // for (let i in myNumber){
// //   console.log(myNumber[i]);
// // }
// // for ( let i of myNumber){
// //   console.log(i);
// // }
// myNumber.forEach(function(element){
//
//   console.log(element);
// });

// var cat = {
//   firstName:["jj", "Mev Mev"],
//   lastName:["dara", "Sok"],
//   age:[2, 3]}
// for( var i in cat){
//
//   console.log(cat.firstName);
//   console.log(cat.age);
// }

/* Some functions in array*/
// push adds an element to the end.
// pop takes an element from the end.
// take 1 element from the start
// push(...items) adds items to the end.
// pop() removes the element from the end and returns it.
// shift() removes the element from the beginning and returns it.
// unshift(...items) adds items to the beginning.
/*====================================================================================*/
// let myList= new Array("Sok Dara", "Meas Chinlong", "Sorn Sienghai", "Sareth Mean");
// myList.shift();
// myList.unshift("Somon Soum");
// console.log(myList);
//arr.push("dara");
// arr.pop();
// console.log(arr);
var user;
var showUser ="";
var users=["Mean Sareth", "Dara JJ", "Meas Saly"];
function addUser(user) {
  if (document.getElementById('addUser').value!="") {
    user=document.getElementById('addUser').value;
    users.push(user);
    document.getElementById('demo').innerHTML=users;
  } else {
    alert('You have to input a user');
  }
}
function removeUser(user){
  users.pop(user);
}
for(let myUser of users){
   showUser += myUser + "<br>"
  document.getElementById('demo').innerHTML=showUser;
}
