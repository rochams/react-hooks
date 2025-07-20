import React, { useState } from "react";

export const UseCounter = (initalValue) => {
    
    const [value, setValue] = useState(initalValue=10);

    const add = (v) => {
        setValue(value + v)
    }

    const subtract = (v) => {
        setValue(value - v)
    }

    return [value, add, subtract]

}