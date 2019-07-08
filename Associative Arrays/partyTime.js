/*
There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. 
When guests come to the party check if he/she exists in any of the two reservation lists. 
The input will come as array of strings. You will be given the list with the guests before you receive a command "PARTY"
All reservation numbers will be with 8 chars
All VIP numbers start with digit
When you receive the command "PARTY" the guests start coming.
Output all guest, who didn't come to the party (VIP must be first) 
*/

function partyTime(input) {
    let guests = {
        'vip': [],
        'regular': []
    };
    let index = input.indexOf('PARTY');
    let invites = input.slice(0, index);
    let party = input.slice(index + 1);

    for (let guest of invites) {
        if (isRegular(guest)) {
            guests['regular'].push(guest);
        } else {
            guests['vip'].push(guest);
        }
    }

    for (let guest of party) {
        if (isRegular(guest)) {
            let regular = guests['regular'];
            let indexOfRegular = regular.indexOf(guest);
            regular.splice(indexOfRegular, 1);
        } else {
            let vip = guests['vip'];
            let indexOfVip = vip.indexOf(guest);
            vip.splice(indexOfVip, 1);
        }
    }

    function isRegular(guest) {
        let firstSymbol = Number(guest[0]);
        return isNaN(firstSymbol);
    }
    let guestLeft = guests['regular'].length + guests['vip'].length;
    console.log(guestLeft);
    console.log(guests['vip'].join('\n'));
    console.log(guests['regular'].join('\n'));
}

partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);