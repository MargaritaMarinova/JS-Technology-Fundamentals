/*
Write a function that collects and orders information about traveling destinations.
As input you will receive an array of strings.
Each string will consist of the following information with format:
"Country name > Town name > Travel cost"
Country name will be unique string, Town name will also be unique string, Travel cost will be a number.
If you receive the same Town name twice, you should keep the cheapest offer. Have in mind that one 
Country may have several Towns to visit.
After you finish the organizational part, you need to let Steven know which destination point to visit first. 
The order will be as follows:  First sort Country names alphabetically and then sort by lowest Travel cost.
*/



function travelTime(input) {
    let countries = new Map();

    for (let line of input) {
        let [country, town, price] = line.split(' > ');

        if (!countries.has(country)) {
            let townsToPriceMap = new Map();
            townsToPriceMap.set(town, price);
            countries.set(country, townsToPriceMap);
        } else {
            let existingTowns = countries.get(country);
            if (existingTowns.has(town)) {
                let existingPrice = existingTowns.get(town);
                if (price < existingPrice) {
                    existingTowns.set(town, price);
                }
            } else {
                existingTowns.set(town, price);
            }
        }
    }
    let sortedCountries = [...countries].sort((a, b) => a[0].localeCompare(b[0]));
    for (let [country, townsMap] of sortedCountries) {
        let sortedTowns = [...townsMap]
            .sort((a, b) => a[1] - b[1])
            .map(element => `${element[0]} -> ${element[1]}`);
        console.log(`${country} -> ${sortedTowns.join(' ')}`);
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]);