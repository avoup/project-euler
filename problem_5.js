const problem_5 = () => {
    const factorial = (num, start) => {
        let res = 1;
        for (let i = start; i <= num; i++) {
            res *= i;
        }
        return res;
    }

    const n = 20;

    outer: for (let i = n; i < factorial(n, Math.floor(n / 2)); i + n) {
        for (let j = Math.floor(n / 2); j <= n; j++) {
            if (i % j !== 0) {
                i = i + n;
                continue outer;
            }
        }
        return i;
    }

}