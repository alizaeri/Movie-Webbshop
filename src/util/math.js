//Javascript does have a math issue!
export function stripPrecision(number, precision) {
    const numberCount = Math.trunc(number).toString().length + precision
    return (parseFloat(number).toPrecision(numberCount));
}