let isSym = false;
let value = 0;
let calculatedNow = false;

// AC functionality
document.getElementById("AC").onclick= ()=> {
value = document.getElementById("numerics").innerHTML = "0";
};

// division
document.getElementById("divide").onclick= ()=> {
    if (isSym) {
        alert("Cannot use operators back to back");
        return;
    }
    value = String(value) + '/';
    console.log(typeof value)
    document.getElementById("numerics").innerHTML = value;
    isSym = true;
    };

// multiplication
document.getElementById("multiply").onclick= ()=> {
    if (isSym) {
        alert("Cannot use operators back to back");
        return;
    }
    value = String(value) + '*';
    console.log(typeof value)
    document.getElementById("numerics").innerHTML = value;
    isSym = true;
    };

// #Back 
document.getElementById("Back").onclick= ()=> {
    if(calculatedNow) {
        value = "0";
        document.getElementById("numerics").innerHTML = value;
    }
    
    let lastChar = value.charAt(value.length - 1); 
    if (["*", "/", "+", "-", "%"].includes(lastChar)) {
        isSym = false;
    }
    value = value.slice(0,-1);
    document.getElementById("numerics").innerHTML = value;
    };


document.getElementById("seven").onclick= ()=> {
    value = String(value) + '7';
    document.getElementById("numerics").innerHTML = value;
    isSym = false;
    };

document.getElementById("eight").onclick= ()=> {
    value = String(value) + '8';
    document.getElementById("numerics").innerHTML = value;
    isSym = false;
    };

document.getElementById("nine").onclick= ()=> {
        value = String(value) + '9';
        document.getElementById("numerics").innerHTML = value;
        isSym = false;
        };

// Subtraction
document.getElementById("minus").onclick= ()=> {
        if (isSym) {
            alert("Cannot use operators back to back");
            return;
        }
        value = String(value) + '-';
        console.log(typeof value)
        document.getElementById("numerics").innerHTML = value;
        isSym = true;
        };

document.getElementById("four").onclick= ()=> {
        value = String(value) + '4';
        document.getElementById("numerics").innerHTML = value;
        isSym = false;
        };

document.getElementById("five").onclick= ()=> {
        value = String(value) + '5';
        document.getElementById("numerics").innerHTML = value;
        isSym = false;
        };

document.getElementById("six").onclick= ()=> {
        value = String(value) + '6';
        document.getElementById("numerics").innerHTML = value;
        isSym = false;
        };

// Addition
document.getElementById("add").onclick= ()=> {
    if (isSym) {
        alert("Cannot use operators back to back");
        return;
    }
    value = String(value) + '+';
    console.log(typeof value)
    document.getElementById("numerics").innerHTML = value;
    isSym = true;
    };

document.getElementById("one").onclick= ()=> {
    value = String(value) + '1';
    document.getElementById("numerics").innerHTML = value;
    isSym = false;
};

document.getElementById("two").onclick= ()=> {
    value = String(value) + '2';
    document.getElementById("numerics").innerHTML = value;
    isSym = false;
};

document.getElementById("three").onclick= ()=> {
    value = String(value) + '3';
    document.getElementById("numerics").innerHTML = value;
    isSym = false;
};

document.getElementById("dot").onclick= ()=> {
    value = String(value) + '.';
    document.getElementById("numerics").innerHTML = value;
    isSym = false;
};

document.getElementById("zero").onclick= ()=> {
    value = String(value) + '0';
    document.getElementById("numerics").innerHTML = value;
    isSym = false;
};

document.getElementById("equal").onclick = () => {
     calculatedNow = true;
    try {
        value = eval(value); 
        // Display the result
        document.getElementById("numerics").innerHTML = value;
        isSym = false;
    } catch (error) {
        alert("Invalid expression");
    }
};

document.getElementById("percent").onclick = () => {
     calculatedNow = true;
    try {
        value = eval(value);
        value /= 100; 
        document.getElementById("numerics").innerHTML = value;
        isSym = false;
    } catch (error) {
        alert("Invalid expression");
    }
};

