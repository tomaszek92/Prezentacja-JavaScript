let person = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 22,
    address: {
        street: "Warszawska",
        city: "Szczebrzeszyn"
    },
    hobby: ["football", "basketball" ]
}
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

console.log("\n");

let array = [1, 2, 3, 4, 5, 6, 7];
for (const key in array) {
    console.log(`${key}: ${array[key]}`);    
}