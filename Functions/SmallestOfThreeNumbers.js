/*
Write a function which receive three integer numbers to print the smallest. Use appropriate name for the function.
*/

function smallestOfThreeNumbers(first, second, last){
  let smallest = 0;
  
  if (first <= second && first <= last){
      smallest = first;
  } else if(second <= first && second <= last) {
      smallest = second;
  } else if(last <= first && last <= second) {
      smallest = last;
  }

  console.log(smallest);

}

