const lno = 100;
const hno = 500;

for(let i=lno;i<=hno;i++){
    let noOfDigits = i.toString().length;

    let sum = 0;

    let temp = i;

    while(temp>0){
        let remainder = temp%10;
        sum += remainder**noOfDigits;
        temp = parseInt(temp/10);
    }

    if(sum==i){
        console.log(i)
    }
}