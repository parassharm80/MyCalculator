import Big from "big.js";
function Operate(a,b,op){
const f=Big(a);
const s=Big(b);
if(b==="÷"||b==="/"||b==="+"||b==="-")
return null;
if(op==="+")
{
    return f.plus(s).toString();
}
else if(op==="-")
{
    return f.minus(s).toString();
}
else if(op==="x")
{
    return f.times(s).toString();
}
else if(op==="÷")
{
        return f.div(s).toString();
}
throw Error(`Unknown Operation ${op}`);
}
export default Operate;