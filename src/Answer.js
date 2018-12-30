import React, { Component } from 'react';
import Big from "big.js";
import Operate from "./Operate.js";
import Number from "./Number.js";
function Answer(obj,buttonName){
if(buttonName==="AC")
{
    return{
        ans:null,
        next: null,
        operation: null
    };
}
if(Number(buttonName))
{
    if(buttonName==="0"&&obj.next==="0")
    {
        return{};
    }
if(obj.operation){
    if(obj.next)
    {
        return{next:obj.next+buttonName};
    }
    return{next:buttonName};
}
if(obj.next)
{
  return{
    next:obj.next+buttonName,
    ans:null,
  };
}
return{
next:buttonName,
ans:null,
};}
if (buttonName === "%") {
    if (obj.operation && obj.next) {
      const result = Operate(obj.ans, obj.next, obj.operation);
      return {
        ans: Big(result).div(Big("100")).toString(),
        next: null,
        operation: null,
      };
    }
    if (obj.next) {
      return {
        next: Big(obj.next).div(Big("100")).toString(),
      };
    }
    return {};
  }

  if (buttonName === ".") {
    if (obj.next) {
      if (obj.next.includes(".")) {
        return {};
      }
      return { next: obj.next + "." };
    }
    return { next: "0." };
  }
  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      if(obj.next==="0"&&obj.operation==="÷")
      return {};
      if(obj.next==="÷"||obj.next==="/"||obj.next==="+"||obj.next==="-")
      return{
        ans:null,
        next:null,
        operation:null
      };
      return {
        ans: Operate(obj.ans, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      return {};
    }
  }

  if (buttonName === "+/-") {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.ans) {
      return { ans: (-1 * parseFloat(obj.ans)).toString() };
    }
    return {};
  }

  if (obj.operation) {
    if(obj.next==="÷"||obj.next==="/"||obj.next==="+"||obj.next==="-")
    return{
      ans:null,
      next:null,
      operation:null
    };
    return {
      ans: Operate(obj.ans, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  if (!obj.next) {
    return { operation: buttonName };
  }

  return {
    ans: obj.next,
    next: null,
    operation: buttonName,
  };

}
export default Answer;