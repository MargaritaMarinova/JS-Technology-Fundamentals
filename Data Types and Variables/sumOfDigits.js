function sumOfDigits(num){
    let sum = 0;
    let lastDigit = 0;

  while (num>0){
      lastDigit = num % 10;
      num = parseInt(num/10);
      sum += lastDigit; 
  }
  console.log(sum);
}

sumOfDigits(245678);