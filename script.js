const superheroes = [
    {
        name: "Batman",
        publisher: "DC Comics",
        alter_ego: "Bruce Wayne",
        first_appearance: "Detective Comics #27",
        weight: "unknown"
    },
    {
        name: "Superman",
        publisher: "DC Comics",
        alter_ego: "Kal-El",
        first_appearance: "Action Comics #1",
        weight: "220"
    },
    {
        name: "Flash",
        publisher: "DC Comics",
        alter_ego: "Jay Garrick",
        first_appearance: "Flash Comics #1",
        weight: "195"
    },
    {
        name: "Green Lantern",
        publisher: "DC Comics",
        alter_ego: "Alan Scott",
        first_appearance: "All-American Comics #16",
        weight: "186"
    },
    {
        name: "Green Arrow",
        publisher: "DC Comics",
        alter_ego: "Oliver Queen",
        first_appearance: "All-American Comics #16",
        weight: "195"
    },
    {
        name: "Wonder Woman",
        publisher: "DC Comics",
        alter_ego: "Princess Diana",
        first_appearance: "The Incredible Hulk #180",
        weight: "165"
    },
    {
        name: "Blue Beetle",
        publisher: "DC Comics",
        alter_ego: "Dan Garret",
        first_appearance: "Mystery Men Comics #1",
        weight: "145"
    },
    {
        name: "Spider Man",
        publisher: "Marvel Comics",
        alter_ego: "Peter Parker",
        first_appearance: "Amazing Fantasy #15",
        weight: "167"
    },
    {
        name: "Captain America",
        publisher: "Marvel Comics",
        alter_ego: "Steve Rogers",
        first_appearance: "Captain America Comics #1",
        weight: "220"
    },
    {
        name: "Iron Man",
        publisher: "Marvel Comics",
        alter_ego: "Tony Stark",
        first_appearance: "Tales of Suspense #39",
        weight: "250"
    },
    {
        name: "Thor",
        publisher: "Marvel Comics",
        alter_ego: "Thor Odinson",
        first_appearance: "Journey into Myster #83",
        weight: "200"
    },
    {
        name: "Hulk",
        publisher: "Marvel Comics",
        alter_ego: "Bruce Banner",
        first_appearance: "The Incredible Hulk #1",
        weight: "1400"
    },
    {
        name: "Wolverine",
        publisher: "Marvel Comics",
        alter_ego: "James Howlett",
        first_appearance: "The Incredible Hulk #180",
        weight: "200"
    },
    {
        name: "Daredevil",
        publisher: "Marvel Comics",
        alter_ego: "Matthew Michael Murdock",
        first_appearance: "Daredevil #1",
        weight: "200"
    },
    {
        name: "Silver Surfer",
        publisher: "Marvel Comics",
        alter_ego: "Norrin Radd",
        first_appearance: "The Fantastic Four #48",
        weight: "unknown"
    }
]

//Create array of all superhero names
const newArray = superheroes.map(function (item, index, array) {
    return item.name
})
// console.log(newArray)

//Create array of all light superhoes <190 pounds\
const lightHeroes = superheroes.filter(function (item) {
    if (item.weight < 190) {
        return item.name
    }
})
// console.log(lightHeroes)

//Create array of all names of superheroes >200pounds

const heavyHeroes = superheroes.filter(function (item) {
    if (item.weight > 200) {
        return item
    }
})

const heavyNames = heavyHeroes.map(function (item) {
    return item.name
})

// console.log(heavyNames)

//Create array of all first appearances

const firstTime = superheroes.map(function (item) {
    return item.first_appearance
})

// console.log(firstTime)

//Create array of all DC Comics Superheroes

const isDC = superheroes.filter(function (item) {
    if (item.publisher === "DC Comics")
        return item
})

const DCnames = isDC.map(function (item) {
    return item.name
})

// console.log(DCnames)

//Creat array of all Marvel superheroes

const isMarvel = superheroes.filter(function (item) {
    if (item.publisher === "Marvel Comics")
        return item
})

const Marvelnames = isMarvel.map(function (item) {
    return item.name
})
// console.log(Marvelnames)

//Add all weights of DC Comics Superheroes

const heroWeights = isDC.map(function (item) {
    if (item.weight != "unknown") {
        return parseInt(item.weight)
    }
})

const heroJustWeights = heroWeights.filter(function (item) {
    if (typeof (item) != "undefined") {
        return item
    }
})

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const weightSum = (array) => {
    return array.reduce(reducer)
}

console.log(weightSum(heroJustWeights))
