function sort2Criteria(arr) {
    let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
    console.log(sortedArr.join('\n'));
}
sort2Criteria(['alpha', 'beta', 'gamma']);
sort2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);