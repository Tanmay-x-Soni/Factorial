let number =prompt("Enter numbur for factorial");
let arr=[];

document.writeln(`Here is your factorial of ${number} : `);
let result1=1;




for (let i = number-1; i > 0; i--) {
     
    result1+=result1*i;
    
    
    
    
}
document.writeln(result1 ,`<br> <br>`);



for(let i=0;i<number;i++){
    arr.push(number-i);
}

document.write("ARRAY : ",arr);

document.write("<br> <br> FACTORIAL BY REDUCE: ")


const factorial=(a,b)=>{
    return a*b;
}


document.write(arr.reduce(factorial));
