function sortNums(first, second, third) {
    if (first > second && first > third) {
        console.log(first);
        second > third ? console.log(`${second} \n${third}`) : console.log(`${third} \n${second}`);
    } else if (second > first && second > third) {
        console.log(second);
        first > third ? console.log(`${first} \n${third}`) : console.log(`${third} \n${first}`);
    } else {
        console.log(third);
        first > second ? console.log(`${first} \n${second}`) : console.log(`${second} \n${first}`);
    }
}
sortNums(2, 1, 3)
sortNums(-2, 1, 3)
sortNums(0, 0, 2)