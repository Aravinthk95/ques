var maincontainer= document.createElement('div');
maincontainer.setAttribute('id','maincont');
maincontainer.innerHTML="FORMS";


var subcontainer=document.createElement('div');
subcontainer.setAttribute('id','subcont');
maincontainer.append(subcontainer);


var parent=document.createElement('div');
parent.setAttribute('id','pair');
subcontainer.append(parent);


let username=document.createElement('label');
username.setAttribute('type','text');
username.setAttribute('class','user');
username.innerHTML="FIRST NAME :";
parent.append(username);

let inpu=document.createElement('input');
inpu.setAttribute('type','text')
inpu.setAttribute('class','mail');
inpu.setAttribute('placeholder','first name')
parent.append(inpu);

var parent1=document.createElement('div');
parent1.setAttribute('id','pair1');
subcontainer.append(parent1);

let usename=document.createElement('label');
usename.setAttribute('type','text');
usename.setAttribute('class','pass');
usename.innerHTML="LAST NAME :";
parent1.append(usename);

let inputan=document.createElement('input');
inputan.setAttribute('type','text')
inputan.setAttribute('class','pas');
inputan.setAttribute('placeholder','last name')
parent1.append(inputan);

var parent2=document.createElement('div');
parent2.setAttribute('id','pair2');
subcontainer.append(parent2);

let useadd=document.createElement('label');
useadd.setAttribute('type','text');
useadd.setAttribute('class','addre');
useadd.innerHTML='ADDRESS :';
parent2.append(useadd);

let address=document.createElement('input');
address.setAttribute('type','text');
address.setAttribute('class','addres');
address.setAttribute('placeholder','address');
parent2.append(address);


var parent3=document.createElement('div');
parent3.setAttribute('id','pair3');
subcontainer.append(parent3);

let pin=document.createElement('label');
pin.setAttribute('type','text');
pin.setAttribute('class','num');
pin.innerHTML='PINCODE :';
parent3.append(pin);

let pincode=document.createElement('input');
pincode.setAttribute('type','number');
pincode.setAttribute('class','no');
pincode.setAttribute('placeholder','pincode');
parent3.append(pincode);

var parent4=document.createElement('div');
parent4.setAttribute('id','pair4');
subcontainer.append(parent4);

let ste=document.createElement('label');
ste.setAttribute('type','text');
ste.setAttribute('class','select');
ste.innerHTML='STATE :';
parent4.append(ste);

let state=document.createElement('input');
state.setAttribute('type','dropdown');
state.setAttribute('class','find');
state.setAttribute('placeholder','select');
parent4.append(state);

var parent5=document.createElement('div');
parent5.setAttribute('id','pair5');
subcontainer.append(parent5);

let coun=document.createElement('label');
coun.setAttribute('type','text');
coun.setAttribute('class','our');
coun.innerHTML='COUNTRY :';
parent5.append(coun);

let country=document.createElement('input');
country.setAttribute('type','dropdown');
country.setAttribute('class','nation');
country.setAttribute('placeholder','select');
parent5.append(country);

var parent6=document.createElement('div');
parent6.setAttribute('id','pair6');
subcontainer.append(parent6);

let gen=document.createElement('label');
gen.setAttribute('type','text');
gen.setAttribute('class','gene');
gen.innerHTML='GENDER :';
parent6.append(gen);

let gender=document.createElement('input');
gender.setAttribute('type','radio');
gender.setAttribute('class','geno');
// pincode.setAttribute('placeholder','pincode');
parent6.append(gender);

let male=document.createElement('label');
male.setAttribute('type','text');
male.setAttribute('class','mel');
male.innerHTML='male';
parent6.append(male);

let fem=document.createElement('input');
fem.setAttribute('type','radio');
fem.setAttribute('class','efem');
// pincode.setAttribute('placeholder','pincode');
parent6.append(fem);

let female=document.createElement('label');
female.setAttribute('type','text');
female.setAttribute('class','fell');
female.innerHTML='female';
parent6.append(female);

let oth=document.createElement('input');
oth.setAttribute('type','radio');
oth.setAttribute('class','oot');
// pincode.setAttribute('placeholder','pincode');
parent6.append(oth);

let others=document.createElement('label');
others.setAttribute('type','text');
others.setAttribute('class','ots');
others.innerHTML='others';
parent6.append(others);

var parent7=document.createElement('div');
parent7.setAttribute('id','pair7');
subcontainer.append(parent7);


let food=document.createElement('label');
food.setAttribute('type','text');
food.setAttribute('class','fod');
food.innerHTML='FOODS :';
parent7.append(food);

let foes=document.createElement('input');
foes.setAttribute('type','checkbox');
foes.setAttribute('class','item1');
// pincode.setAttribute('placeholder','pincode');
parent7.append(foes);

let foo=document.createElement('label');
foo.setAttribute('type','text');
foo.setAttribute('class','item1name');
foo.innerHTML='meals';
parent7.append(foo);

let foret=document.createElement('input');
foret.setAttribute('type','checkbox');
foret.setAttribute('class','item2');
// pincode.setAttribute('placeholder','pincode');
parent7.append(foret);

let flim=document.createElement('label');
flim.setAttribute('type','text');
flim.setAttribute('class','item2name');
flim.innerHTML='biriyani';
parent7.append(flim);

let folim=document.createElement('input');
folim.setAttribute('type','checkbox');
folim.setAttribute('class','item3');
// pincode.setAttribute('placeholder','pincode');
parent7.append(folim);

let front=document.createElement('label');
front.setAttribute('type','text');
front.setAttribute('class','item3name');
front.innerHTML='meat';
parent7.append(front);

let fossil=document.createElement('input');
fossil.setAttribute('type','checkbox');
fossil.setAttribute('class','item4');
// pincode.setAttribute('placeholder','pincode');
parent7.append(fossil);

let fools=document.createElement('label');
fools.setAttribute('type','text');
fools.setAttribute('class','item4name');
fools.innerHTML='chiken';
parent7.append(fools);

let fo=document.createElement('input');
fo.setAttribute('type','checkbox');
fo.setAttribute('class','item5');
// pincode.setAttribute('placeholder','pincode');
parent7.append(fo);

let foos=document.createElement('label');
foos.setAttribute('type','text');
foos.setAttribute('class','item5name');
foos.innerHTML='chappati';
parent7.append(foos);

document.body.append(maincontainer);