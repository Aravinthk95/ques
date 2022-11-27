
    

var inputlabel = document.createElement("label");
inputlabel.innerHTML="username";
// input.setAttribute("type","email");
// input.setAttribute("id","email");
inputlabel.style.color='red'
console.log("username");
document.body.append(inputlabel);


var inputuse = document.createElement("input");
// paragraph.innerHTML="hi";
inputuse.setAttribute("type","email");
inputuse.setAttribute("id","email");

console.log("inputuse");
document.body.append(inputuse);



var passlabel = document.createElement("label");
passlabel.innerHTML="password";
// input.setAttribute("type","email");
// input.setAttribute("id","email");
passlabel.style.color='red'
console.log("password");
document.body.append(passlabel);


var pass = document.createElement("input");
// paragraph.innerHTML="hi";
pass.setAttribute("type","password");
pass.setAttribute("id","password");

console.log("pass");
document.body.append(pass);



var conpass = document.createElement("label");
conpass.innerHTML="conform password";
// input.setAttribute("type","email");
// input.setAttribute("id","email");
conpass.style.color='red'
console.log("conform password");
document.body.append(conpass);


var conpassword = document.createElement("input");
// paragraph.innerHTML="hi";
conpassword.setAttribute("type","password");
conpassword.setAttribute("class","conform password");

console.log("conpassword");
document.body.append(conpassword);



var resetbutton = document.createElement("button");
resetbutton.setAttribute("type","reset");
// resetbutton.setAttribute("id","rset");
resetbutton.style.color='darkviolet'
resetbutton.textContent='RESET'
console.log("resetbutton");
document.body.append(resetbutton);




var loginbutton = document.createElement("button");
// paragraph.innerHTML="hi";
// loginbutton.setAttribute("type","butn");
// loginbutton.setAttribute("id","LOGIN");
loginbutton.style.color='mediumvioletred'
loginbutton.innerHTML='LOGIN'
// loginbutton.textContent='LOGIN'
console.log("loginbutton");
document.body.append(loginbutton);



