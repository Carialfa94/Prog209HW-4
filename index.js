// fucntion for the first button



const
FirstBBtn = document.querySelector("#FirstB"),
SecondBBtn = document.querySelector("#SecondB");


let arr = [];


// what should happen when buttons are clicked
FirstBBtn.addEventListener("click",myFirstFunction,false);
SecondBBtn.addEventListener("click",secondChangeWord,false)
SecondBBtn.style.display = "none";

function myFirstFunction(){
arr = [];
for(let i = 0; i < 3; i++ ){
arr.push(prompt('Please enter a word'));
}

if(arr !=null)
{
let out = "<ul>"
for(let i = 0; i <3; i++){
out = out + "<li>" + arr[i] + "</li>"

}
out = out + "</ul>"
document.getElementById("words").innerHTML = out
SecondBBtn.style.display = "block";
}

}



function secondChangeWord( ) {


FirstPage.style.display = "none";
SecondPage.style.display = "block";

arr = arr.map(ChangeLetters);

let out = "<ul>"
for(let i = 0; i <3; i++){
out = out + "<li>" + arr[i] + "</li>"

}
out = out + "</ul>"
document.getElementById("word2").innerHTML = out



}

function ChangeLetters(word){

let first = word[0]
let last = word[word.length - 1]
let middle = word.substring(1,word.length -1)
return last + middle + first;
}