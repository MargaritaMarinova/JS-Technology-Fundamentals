/*
Santa has limited time to drop at least some presents for each house. Help him with his mission!
You will receive a string with even integers separated by "@" representing each house with its number of members 
and a series of Jump commands until you receive "Merry Xmas!"
Santa starts at the position of the first house and has to jump by a given length. 
The jump command will be in format: "Jump {length}". 
Each time he jumps from one house to another he drops 2 presents for that house and decreases the needed presents 
for that house. If Santa jumps on a house which doesn't need more presents (presents = 0) you should instead print
"House {houseIndex} will have a Merry Christmas.".
Keep in mind that Santa can have a bigger jump length than the size of the field and if he does jump outside of it 
he should start from the beginning again. 
For example we have a field of size 3 and each house has 6 members. 
Santa is at the start and jumps with length of 2. He will end up at index 2 and decrease the needed 
presents by 2 (6 – 2 = 4). Next he jumps again with length of 2 and ends up at index position 1 and again decreases
 the needed presents.
 
Input
•	On the first line you will receive a string with even integers separated by "@" – houses and their number of members.
•	On the next lines until "Merry Xmas!" you will receive jump commands in format: "Jump {length}".
Output
At the end print Santa's last position and whether or not his mission was successful:
•	"Santa's last position was {lastPositionIndex}."
•	If all members of each house have presents print: 
o	"Mission was successful."
•	If not print the count of all houses that won't have a Merry Christmas:
o	"Santa has failed {housesCount} houses."
Constraints
•	The field can be of size [1…20]
•	Each house will have an even number of  members [2 … 10]
•	Each jump length will be an integer [1 … 20]
 

*/

function presentDelivery(input) {
    let houses = input.shift().split('@');
    input.pop();
    let santaIndex = 0;
    let houseMore = 0;

    for (let i = 0; i < input.length; i++) {
        let currentJump = input[i].split(' ');
        let distance = +currentJump[1];

        if (santaIndex + distance >= houses.length) {
            santaIndex = (santaIndex + distance) % houses.length;
        } else {
            santaIndex += distance;
        }
        if (houses[santaIndex] === 0) {
            console.log(`House ${santaIndex} will have a Merry Christmas.`);
        } else {
            houses[santaIndex] -= 2;
        }
    }
    for (let singleHouse of houses) {
        if (singleHouse !== 0) {
            houseMore++;
        }
    }
    console.log(`Santa's last position was ${santaIndex}.`);
    if (houseMore > 0) {
        console.log(`Santa has failed ${houseMore} houses.`);
    } else {
        console.log("Mission was successful.");
    }
}

//presentDelivery([ '10@10@10@2', 'Jump 1', 'Jump 2', 'Merry Xmas!' ]);
presentDelivery([ '2@4@2',
'Jump 2',
'Jump 2',
'Jump 8',
'Jump 3',
'Jump 1',
'Merry Xmas!' ]);


