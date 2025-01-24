function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Access the first element of the array
console.log(greeter(user[0])); // Outputs 'Hello, Jane'

// Solution 2:  Handle the array explicitly
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}
console.log(greeterArray(user)); //Outputs 'Hello, Jane Doe'

// Solution 3: Use a type that accepts both strings and arrays
function greeterFlexible(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(" ");
  }
}
console.log(greeterFlexible(user)); //Outputs 'Hello, Jane Doe'
console.log(greeterFlexible("Bob")); //Outputs 'Hello, Bob' 