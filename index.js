// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat(name){
    cats.push(name);
};
//console.log(destructivelyAppendCat("Ralph"));

function destructivelyPrependCat(name){
    cats.unshift(name);
};

function destructivelyRemoveLastCat(){
    cats.pop();
};

function destructivelyRemoveFirstCat(){
    cats.shift();
};

function appendCat(name){
    return [...cats,name];
};
//console.log(appendCat("Broom"));

function prependCat(name){
    return [name,...cats];
}

function removeLastCat(){
    return cats.slice(0, - 1);
}
//console.log(removeLastCat())

function removeFirstCat(){
    return cats.slice(1);
}