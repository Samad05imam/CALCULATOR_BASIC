// display amswerr
var ans=document.getElementById("ans");
// operators
var ac=document.getElementById("ac");
var percentage=document.getElementById("percentage");
var divide=document.getElementById("divide");
var multiply=document.getElementById("multiply");
var add=document.getElementById("add");
var subs=document.getElementById("subs");
var equal=document.getElementById("equal");
// numericValues
var doublezero=document.getElementById("doublezero");
var float=document.getElementById("float");
var c=document.getElementById("c");
var zero=document.getElementById("zero");
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var five=document.getElementById("five");
var six=document.getElementById("six");
var seven=document.getElementById("seven");
var eight=document.getElementById("eight");
var nine=document.getElementById("nine");
// Some 
var currentInput="";
var operator="";
var prevInput="";

ac.addEventListener("click", ()=> {
    currentInput="";
    prevInput="";
    operator="";
    ans.innerHTML=0;
});

c.addEventListener("click", ()=> {
    currentInput=currentInput.slice(0, -1);
    ans.innerHTML=currentInput || 0;
});

zero.addEventListener("click", ()=> {
    currentInput +="0";
    ans.innerHTML=currentInput;
});

one.addEventListener("click", ()=> {
    currentInput +="1";
    ans.innerHTML=currentInput;
});

two.addEventListener("click", ()=> {
    currentInput +="2";
    ans.innerHTML=currentInput;
});

three.addEventListener("click", ()=> {
    currentInput +="3";
    ans.innerHTML=currentInput;
});

four.addEventListener("click", ()=> {
    currentInput +="4";
    ans.innerHTML=currentInput;
});

five.addEventListener("click", ()=> {
    currentInput +="5";
    ans.innerHTML=currentInput;
});

six.addEventListener("click", ()=> {
    currentInput +="6";
    ans.innerHTML=currentInput;
});

seven.addEventListener("click", ()=> {
    currentInput +="7";
    ans.innerHTML=currentInput;
});

eight.addEventListener("click", ()=> {
    currentInput +="8";
    ans.innerHTML=currentInput;
});

nine.addEventListener("click", ()=> {
    currentInput +="9";
    ans.innerHTML=currentInput;
});

doublezero.addEventListener("click", ()=> {
    currentInput +="00";
    ans.innerHTML=currentInput;
});

float.addEventListener("click", ()=> {
    if (!currentInput.includes(".")) {
        currentInput +=".";
        ans.innerHTML=currentInput;
    }
});

add.addEventListener("click", ()=> {
    if (prevInput==="") {
        prevInput=currentInput;
        currentInput="";
        operator="+";
    }
});

subs.addEventListener("click", ()=> {
    if (prevInput==="") {
        prevInput=currentInput;
        currentInput="";
        operator="-";
    }
});

multiply.addEventListener("click", ()=> {
    if (prevInput==="") {
        prevInput=currentInput;
        currentInput="";
        operator="x";
    }
});

divide.addEventListener("click", ()=> {
    if (prevInput==="") {
        prevInput=currentInput;
        currentInput="";
        operator="/";
    }
});

percentage.addEventListener("click", ()=> {
    if (currentInput) {
        currentInput=(parseFloat(currentInput) / 100).toString();
        ans.innerHTML=currentInput;
    }
});

equal.addEventListener("click", ()=> {
    if (prevInput && currentInput) {
        switch (operator) {
            case "+":
                currentInput=(parseFloat(prevInput)+parseFloat(currentInput)).toString();
                break;
            case "-":
                currentInput=(parseFloat(prevInput)-parseFloat(currentInput)).toString();
                break;
            case "x":
                currentInput=(parseFloat(prevInput)*parseFloat(currentInput)).toString();
                break;
            case "/":
                currentInput=(parseFloat(prevInput)/parseFloat(currentInput)).toString();
                break;
            default:
                break;
        }
        ans.innerHTML=currentInput;
        prevInput="";
        operator="";
    }
});
