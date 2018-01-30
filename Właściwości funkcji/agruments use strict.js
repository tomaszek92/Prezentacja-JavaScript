"use strict";

function foo(one, two, three) {
    console.log(arguments);
    one = "test";
    console.log(arguments);
}

foo(1, 2, 3);