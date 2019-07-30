/*
The sanctuary needs to provide food for the animals and feed them, so your task is to help with the process
Create a program that organizes the daily feeding of animals. You need to keep information about animals, 
their daily food limit and the areas of the Wildlife Refuge they live in. You will be receiving lines with 
commands until you receive the "Last Info" message.  There are two possible commands: 
•	"Add:{animalName}:{dailyFoodLimit}:{area}":
o	Add the animal and its daily food limit to your records. It is guaranteed that the names of the animals are 
unique and there will never be animals with the same name. If it already exists, just increase the value of the 
daily food limit with the current one that is given.
•	"Feed:{animalName}:{food}:{area}":
o	Check if the animal exists and if it does, reduce its daily food limit with the given food for feeding. 
If its limit reaches 0 or less, the animal is considered successfully fed and you need to remove it from your 
records and print the following message:
	"{animalName} was successfully fed"
You need to know the count of hungry animals there are left in each area in the end. 
If an animal has daily food limit above 0, it is considered hungry.
In the end, you have to print each animal with its daily food limit 
sorted in descending order by the daily food limit and then by its name in ascending order in the following format: 
Animals:
{animalName} -> {dailyFoodLimit}g
{animalName} -> {dailyFoodLimit}g
Afterwards, print the areas with the count of animals, which are not fed in descending order by the count of animals. 
If an area has 0 hungry animals in it, don't print it. The output must be in the following format:
Areas with hungry animals:
{areaName} : {countOfUnfedAnimals}
{areaName} : {countOfUnfedAnimals}
Input / Constraints
•	You will be receiving lines until you receive the "Last Info" command.
•	The food comes in grams and is an integer number in the range [1...100000].
•	The input will always be valid.
•	There will never be a case, in which an animal is in two or more areas at the same time.
Output
•	Print the appropriate message after the "Feed" command, if an animal is fed.
•	Print the animals with their daily food limit in the format described above.
•	Print the areas with the count of unfed animals in them in the format described above.
*/
function feedTheAnimals(input) {
    let animals = {};
    let areas = {};
    for (let line of input) {
        if (line === 'Last info') {
            break;
        }
        let [command, animalName, food, area] = line.split(':');
        if (command === 'Add') {
            addAnimal(animalName, food, area);
        } else {
            feedAnimal(animalName, food, area);
        }
    }

    function addAnimal(animalName, dailyFoodLimit, givenArea) {
        dailyFoodLimit = Number(dailyFoodLimit);
        if (!animals.hasOwnProperty(animalName)) {
            animals[animalName] = dailyFoodLimit;
        } else {
            animals[animalName] += dailyFoodLimit;
        }

        if (!areas.hasOwnProperty(givenArea)) {
            areas[givenArea] = [animalName];
        } else {
            let animalsInArea = areas[givenArea];
            if (!animalsInArea.includes(animalName)) {
                animalsInArea.push(animalName);

            }
        }
    }

    function feedAnimal(animalName, food, givenArea) {
        food = Number(food);
        if (animals.hasOwnProperty(animalName)) {
            animals[animalName] -= food;
        }
        if (animals[animalName] <= 0) {
            console.log(`${animalName} was successfully fed`);
            delete animals[animalName];
            let animalsInArea = areas[givenArea];
            let indexOfAnimal = animalsInArea.indexOf(animalName);
            animalsInArea.splice(indexOfAnimal, 1);
        }
    }

    let sortedAnimals = Object.entries(animals).sort(sortAnimals);
    console.log('Animals:');
    for (let [animalName, food] of sortedAnimals) {
        console.log(`${animalName} -> ${food}g`);

    }
    let sortedAreas = Object.entries(areas).sort(sortAreas);
    console.log('Areas with hungry animals:');
    for (let [name, animals] of sortedAreas) {
        if (animals.length !== 0) {
            console.log(`${name} : ${animals.length}`);
        }

    }

    function sortAnimals(a, b) {

        return b[1] - a[1] || a[0].localeCompare(b[0]);
    }

    function sortAreas(a, b) {
        let aAnimalsCount = a[1].length;
        let bAnimalsCount = b[1].length;
        return bAnimalsCount - aAnimalsCount;
    }
}

feedTheAnimals([ 'Add:Maya:7600:WaterfallArea',
'Add:Bobbie:6570:DeepWoodsArea',
'Add:Adam:4500:ByTheCreek',
'Add:Jamie:1290:RiverArea',
'Add:Gem:8730:WaterfallArea',
'Add:Maya:1230:WaterfallArea',
'Add:Jamie:560:RiverArea',
'Feed:Bobbie:6300:DeepWoodsArea',
'Feed:Adam:4650:ByTheCreek',
'Feed:Jamie:2000:RiverArea',
'Last Info' ]
);