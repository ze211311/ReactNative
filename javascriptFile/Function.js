let avg = (...args) => {
    let sum = 0;
    for(const item of args) {
        sum += item;
    }
    console.log(args.length);
    console.log(sum);
    return sum / args.length;
}

console.log(avg(2,3,4));
console.log('test');