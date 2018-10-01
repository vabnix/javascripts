const filter = (...args) => {
    return args.filter(el => el === 1);
}

const filters = (...args) => {
    return args.filter(el => el === 2);
}

console.log(filter(1,2,3));
console.log(filters(1,2,3));