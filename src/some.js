function sum(...arg) {
    let i = 0, sum = 0;
    for (i; i < arg.length; i++) {
        sum += arg[i];
    }
    return sum;
}

function avg(...arg) {
    return sum(...arg) / arg.length;
}

export function merge(a, b) {
    console.log(a, "!!!a");
    return {
        ...a,
        ...b,
    }
}

export default avg;