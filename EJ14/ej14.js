console.log("==========Ej 14=========");

function substraer(num,subs) {
    let total = [num,subs];
    return total.reduce((acc=num,val=subs)=>{while(acc>0){acc-=val};return acc})
}
console.log(substraer(10,3));