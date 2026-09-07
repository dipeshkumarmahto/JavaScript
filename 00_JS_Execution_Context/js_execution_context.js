/*

1. JavaScript Execution Context:-

Execution Context is the environment in which JavaScript code is evaluated and executed.

Whenever JavaScript runs, it creates an execution context that contains things like:

Variables
Functions
this value
Access to the outer scope
Types of Execution Context

There are mainly 3 types:

1. Global Execution Context (GEC)

Created when JavaScript starts executing a script.

var name = "Dipesh";

function greet() {
    console.log("Hello");
}

The global context is created first.

It contains:

Global variables
Global functions
Global this
2. Function Execution Context (FEC)

Created every time a function is called.

function add(a, b) {
    let result = a + b;
    return result;
}

add(10, 20);

When add() is called, a new Function Execution Context is created.

It contains:

Parameters (a, b)
Local variables (result)
Function code
this

If the function is called multiple times, a new execution context is created each time.

3. Eval Execution Context

Created when JavaScript executes code using eval().

eval("var x = 10;");

This creates an Eval Execution Context.

⚠️ eval() is generally avoided in modern JavaScript because of security and performance concerns.

---------------------------------------------------------------------------------------

2. Call Stack in JavaScript

Call Stack is a mechanism that JavaScript uses to keep track of which function is currently running.

It follows LIFO:

Last In, First Out

Example
function first() {
    second();
}

function second() {
    console.log("Hello");
}

first();
How Call Stack works

Initially:

| Global |

When first() is called:

| first() |
| Global  |

Then first() calls second():

| second() |
| first()  |
| Global   |

second() finishes:

| first() |
| Global  |

first() finishes:

| Global |

Finally, the Global Execution Context finishes.

*/


function one(){
    console.log(`One`) 
    two()   
}
function two(){
   console.log(`Two`)
   three()
}
function three(){
    console.log("Three")
}
one()
two()
three()