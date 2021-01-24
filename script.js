
//function that display value 
function disSign() {
    x = document.getElementById("res").value
    i = x.length - 1
    while (i > 0) {
        if (x[i] == '*' || x[i] == '/' || x[i] == '%' || x[i] == '-' || x[i] == '+') return
        else i -= 1
    }
    if (x[i] == '+') {
        x = "-" + x.substring(1,)
        document.getElementById("res").value = x
    }
    else if (x[i] == '-') {
        x = "+" + x.substring(1,)
        document.getElementById("res").value = x
    }
    else {
        x = "-" + x
        document.getElementById("res").value = x
    }
}

function dis(val) {
    document.getElementById("res").value += val
}

//function that evaluates the equation and return res 
function solve() {
    let x = document.getElementById("res").value
    if (eval(x)) document.getElementById("string").innerHTML = x + " ="
    let y = eval(x)
    document.getElementById("res").value = y
}

//function that clear the display 
function clr() {
    document.getElementById("res").value = ""
    document.getElementById("string").innerHTML = ""
}
function back() {
    x = document.getElementById("res").value
    document.getElementById("res").value = x.substring(0, x.length - 1)
}