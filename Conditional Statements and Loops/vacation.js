/*
You are given a group of people, type of the group, and day of the week they are going to stay. 
Based on that information calculate how much they have to pay and print that price on the console.
Use the table below. In each cell is the price for a single person. The output should look like that:
 "Total price: {price}". The price should be rounded to the second decimal point.
	Friday	Saturday	Sunday
Students	8.45	9.80	10.46
Business	10.90	15.60	16
Regular	15	20	22.50

There are also discounts based on some conditions:
·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free.
·	Regular – if the group is bigger than or equal 10 and less than or equal to 20 reduce the total price by 5% 
You should reduce the prices in that EXACT order
*/

function vacation(groupCount, type, day){
    let sumPerDay = 0;
    let singlePrice = 0;

    if(type==='Students'){
        if(day === 'Friday'){
            singlePrice=8.45;
        } else if(day === 'Saturday') {
            singlePrice=9.80;
        } else if(day === 'Sunday') {
            singlePrice=10.46;
        }
        if(groupCount >=30){
            sumPerDay = (groupCount * singlePrice) * 0.85;
        } else {
            sumPerDay = groupCount * singlePrice;
        }

    } else if(type === 'Business'){
        
        if(day === 'Friday'){
            singlePrice=10.90;
        } else if(day === 'Saturday') {
            singlePrice=15.60;
        } else if(day === 'Sunday') {
            singlePrice=16;
        }
        if(groupCount >=100){
            sumPerDay = (groupCount * singlePrice) - (10 * singlePrice);
        } else {
            sumPerDay = groupCount * singlePrice;
        }


    } else if(type === 'Regular'){
        if(day === 'Friday'){
            singlePrice=15;
        } else if(day === 'Saturday') {
            singlePrice=20;
        } else if(day === 'Sunday') {
            singlePrice=22.50;
        }
        if(groupCount >=10 && groupCount <=20){
            sumPerDay = (groupCount * singlePrice) * 0.95;
        } else {
            sumPerDay = groupCount * singlePrice;  
        }
        

    }

    console.log(`Total price: ${sumPerDay.toFixed(2)}`);

}

vacation(40, "Regular", "Saturday");