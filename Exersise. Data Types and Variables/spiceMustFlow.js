function spice(yield) {
    let days = 0;
    let production = 0;
    
    while (yield >= 100) {
        production += yield - 26;
        yield -= 10
        days++;
    }
    if (days > 0) {
        production -= 26;
    }
    console.log(days);
    console.log(production);
}
spice(450);
