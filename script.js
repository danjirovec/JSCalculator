const INPUT = document.querySelector(".input")
const BTNS = document.querySelector(".grid")

let X
let OPERATOR

const clear = () => {
    INPUT.innerText = 0
}

const back = () => {
    if (INPUT.innerText.length === 1) {
        INPUT.innerText = 0
    }
    else {
        INPUT.innerText = INPUT.innerText.slice(0, -1)
    }
}

const equals = () => {
    switch(OPERATOR) {
        case "+":
            INPUT.innerText = X + Number(INPUT.innerText)
            break
        case "-":
            INPUT.innerText = X - Number(INPUT.innerText)
            break
        case "*":
            INPUT.innerText = X * Number(INPUT.innerText)
            break
        case "/":
            INPUT.innerText = X / Number(INPUT.innerText)
            break
    }
    X = Number(INPUT.innerText)
    OPERATOR = ""
}

const getNum = (event) => {
    if (INPUT.innerText === "0") {
        INPUT.innerText = event.target.innerText
    }
    else {
        INPUT.innerText = INPUT.innerText + event.target.innerText
    }
}

BTNS.addEventListener("click", function(event) {
    cls = event.target.classList.value
    if (cls.includes("clear")) {
        X = 0
        clear()
    }
    else if (cls.includes("back")) {
        back()
    }
    else if (cls.includes("num")) {
        getNum(event)
    }
    else if (cls.includes("equals")) {
        equals()
    }
    else if (cls.includes("plus")) {
        equals()
        clear()
        OPERATOR = "+"
    }
    else if (cls.includes("minus")) {
        equals()
        clear()
        OPERATOR = "-"
    }
    else if (cls.includes("divide")) {
        equals()
        clear()
        OPERATOR = "/"
    }
    else if (cls.includes("multiply")) {
        equals()
        clear()
        OPERATOR = "*"
    }
});