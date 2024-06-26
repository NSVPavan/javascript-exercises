const sumAll = function(lo,hi) {
    if(lo<0||hi<0||typeof(lo)!='number'||typeof(hi)!="number"){
        return 'ERROR';
    }
    if(lo>hi){
        lo=lo^hi;
        hi=lo^hi;
        lo=lo^hi;
    }
    let sum=0;
    for(let i=lo;i<=hi;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
