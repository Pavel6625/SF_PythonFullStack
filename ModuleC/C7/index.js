export function definePrime(num) {
    let isPrime, result;
    isPrime = true;

    if (num > 1 && num <= 1000) {
        for (let i = 2; i <num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        result = isPrime
            ? `Число ${num} простое`
            : `Число ${num} сложное`;
    } else {
        result = 'Неверные данные';
    }
    return result;
}

export function revertString(str) {
    let revertedStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        revertedStr += str[i];
    }
    return revertedStr;
}