var dolphinsSc1 = 97;
var dolphinsSc2 = 112;
var dolphinsSc3 = 101;
var koalassc1 = 109;
var koalassc2 = 95;
var koalassc3 = 106;

var arrDolphins = [dolphinsSc1,dolphinsSc2,dolphinsSc3];
var arrKoalas = [koalassc1,koalassc2,koalassc3];

function findAvg(arr){
    let arr2 = []
    let sum = 0
    for(let i = 0;i<arr.length;i++){
      sum += arr[i];
        if(arr[i]>=100){
            arr2.push(arr[i])
        }  
    }

   if(arr2.length > 0){
    let sum2 = 0;
    for (let i = 0; i < arr2.length; i++) {
        sum2 += arr2[i];
        }
        return(sum2/arr2.length);
   }
   else{
    return (sum/arr.length)
   }
}


function winner(dolphinsAvg,coalasAvg){
      if(dolphinsAvg >= 100 && dolphinsAvg> coalasAvg ){
        return ("The winner is team Dolphins");
    }
    else if(dolphinsAvg<coalasAvg &&coalasAvg >= 100){
        return ("The winner is team Koalas");
    }
    else if((dolphinsAvg >= 100 && coalasAvg >= 100) && dolphinsAvg == coalasAvg ){
        return ("Its draw");
    }
    else{
      return 'No team wins'
    }
}

var dolphinsAvg = findAvg(arrDolphins);
console.log(`Team Dolphins avarage score:${dolphinsAvg}`);

var coalasAvg = findAvg(arrKoalas);
console.log(`Team Koalas avarage score:${coalasAvg}`);

var winner = winner(dolphinsAvg,coalasAvg);
console.log(winner);