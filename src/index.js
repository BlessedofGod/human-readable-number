module.exports = function toReadable (n)  {
    arrayOne = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    arrayTwo = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    arrayThree = ['one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred']
   
    const arr = [...''+ n];
      let num1 = Number(arr[0]);
      let num2 = Number(arr[1]);
      let num3 = Number(arr[2]);
   
    if (n < 20) return arrayOne[n];
    else if (n >= 20 && n < 99 && n % 10 == 0) return arrayTwo[n/10 - 2];
    else if (n > 20 && n <= 99 && n % 10 !== 0) return `${arrayTwo[num1 - 2]} ${arrayOne[num2]}`;
    else if (n >= 100 && n < 999 && n % 100 == 0) return arrayThree[n/100 - 1];
    else if ( num2 >= 2 && num3 == 0 ) return `${arrayThree[num1 - 1]} ${arrayTwo[num2 - 2]}`;
    else if ( num2 == 1 && num3 >=0 )  return `${arrayThree[num1 - 1]} ${arrayOne[num3 + 10]}`;
    else if ( num2 == 0 && num3 >0 )   return `${arrayThree[num1 - 1]} ${arrayOne[num3]}`;
    else if (n > 100 && n <= 999 && n % 100 !== 0)  return `${arrayThree[num1 - 1]} ${arrayTwo[num2 - 2]} ${arrayOne[num3]}`;
  }
  