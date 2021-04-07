const problem_2_loop = () => {

    let num1 = 1;
    let num2 = 2;
    let fib = 0;
    let sum = 0;

    while (num2 < 4000000) {
        if (num2 % 2 === 0) {
            sum += num2;
        }

        fib = num1 + num2;
        num1 = num2;
        num2 = fib;
    }

    return sum

}

const problem_2_recursion = () => {
    let sum = 2;

    const fib = (n) => {
        if (n === 1) return 1;
        else if (n === 2) return 2;
        else return fib(n - 1) + fib(n - 2);
    }

    let i = 1;
    while (true) {
        let curr = fib(i) + fib(i + 1)
        if (curr >= 4000000) break;
        else if (curr % 2 !== 0) sum += curr;
        i++
    }

    return sum;
}