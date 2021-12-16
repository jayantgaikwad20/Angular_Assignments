function Amount(amt) {
    if (amt <= 1000) {
        return "5%";
    }
    else if (amt <= 2000) {
        return "10%";
    }
    else if (amt <= 3000) {
        return "15%";
    }
    else if (amt >= 4000) {
        return "25%";
    }
    else {
        return "Invalid";
    }
}
console.log(Amount(1000));
console.log(Amount(2000));
console.log(Amount(3000));
console.log(Amount(4000));
