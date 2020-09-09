let div0 = document.createElement('div');
div0.setAttribute('class','container margin-css');

let div1 = document.createElement('div');
div1.setAttribute('class','row');
div0.appendChild(div1);

let div2 = document.createElement('div');
div2.setAttribute('class','col');
div1.appendChild(div2);

let h1 = document.createElement('h1');
h1.innerHTML ="Game Rules & Instructions";
div2.appendChild(h1);

let div3 = document.createElement('div');
div3.setAttribute('class','row margin-top-css');
div0.appendChild(div3);

let div4 = document.createElement('div');
div4.setAttribute('class','col');
div4.innerHTML = "1.This is a Single Player Game.";
div3.appendChild(div4);


let div5 = document.createElement('div');
div5.setAttribute('class','row margin-top-css');
div0.appendChild(div5);

let div6 = document.createElement('div');
div6.setAttribute('class','col');
div6.innerHTML = "2.This Game Consist Of Infinite Levels.";
div5.appendChild(div6);


let div7 = document.createElement('div');
div7.setAttribute('class','row margin-top-css');
div0.appendChild(div7);

let div8 = document.createElement('div');
div8.setAttribute('class','col');
div8.innerHTML = "3.You Will Be Given 5 Chance To Guess The Number At Each Level.";
div7.appendChild(div8);

let div9 = document.createElement('div');
div9.setAttribute('class','row margin-top-css');
div0.appendChild(div9);

let div10 = document.createElement('div');
div10.setAttribute('class','col');
div10.innerHTML = "4.After Successful Completion of Each Level,Difficulty Level Increases.";
div9.appendChild(div10);

let div11 = document.createElement('div');
div11.setAttribute('class','row margin-top-css');
div0.appendChild(div11);

let div12 = document.createElement('div');
div12.setAttribute('class','col');
div11.appendChild(div12)

let div14 = document.createElement('div');
div14.setAttribute('class','row');
div0.appendChild(div14);

let div13 = document.createElement('div');
div13.setAttribute('class','col');
div14.appendChild(div13)

let b1 = document.createElement('button');
b1.setAttribute('class','btn btn-outline-success');
b1.setAttribute('type','button')
div13.appendChild(b1);

let a1 = document.createElement('a');
a1.setAttribute('class','link-css');
a1.setAttribute('href','game.html');
a1.innerHTML = 'Lets Play'
b1.appendChild(a1);



document.body.append(div0);
