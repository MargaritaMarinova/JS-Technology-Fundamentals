function practiceSessions(arr) {
    let roadsAndRacers = {};
    for (let line of arr) {
        let currentRacer = line.split('->');
        let command = currentRacer[0];
        let currentRoad = currentRacer[1];
        let racer = currentRacer[2];
        //conditions
        if (command === 'END') {
            break;
        } else if (command === 'Add') {
            add(currentRoad, racer);
        } else if (command === 'Move') {
            let newRoad = currentRacer[3];
            move(currentRoad, racer, newRoad);
        } else if (command === 'Close') {
            close(currentRoad);
        }
    }
    //сортиране на обект
    let sortedResult = Object.keys(roadsAndRacers)
        .map(function (k) {
            return {
                key: k,
                value: roadsAndRacers[k]
            };
        });
        .sort(function (a, b) {
            return b.value.length - a.value.length || a.key.localeCompare(b.key);
        });
    //output    
    console.log('Practice sessions:');
    for (let line of sortedResult) {
        let road = line['key'];
        console.log(road);
        let racers = line['value'];
        for (let man of racers) {
            console.log(`++${man}`);
        }
    }


    function add(road, racer) {
        if (!roadsAndRacers.hasOwnProperty(road)) {
            roadsAndRacers[road] = [racer];
        } else {
            roadsAndRacers[road].push(racer);
        }
    }

    function move(currentRoad, racer, nextRoad) {
        let racerToMove = roadsAndRacers[currentRoad];
        if (racerToMove.includes(racer)) {
            let racerIndex = racerToMove.indexOf(racer);
            racerToMove.splice(racerIndex, 1);
            roadsAndRacers[nextRoad].push(racer);
        }
    }

    function close(road) {
        delete roadsAndRacers[road];
    }

}

practiceSessions([ 'Add->Glen Vine->Steve Hislop',
'Add->Ramsey road->John McGuinness ',
'Add->Glen Vine->Ian Hutchinson',
'Add->Ramsey road->Dave Molyneux',
'Move->Ramsey road->Hugh Earnsson->Glen Vine',
'Add->A18 Snaefell mountain road->Mike Hailwood',
'Add->Braddan->Geoff Duke',
'Move->A18 Snaefell mountain road->Mike Hailwood->Braddan',
'Move->Braddan->John McGuinness->Glen Vine',
'Close->A18 Snaefell mountain road',
'END' ]);