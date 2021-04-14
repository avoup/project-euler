const problem_3 = () => {
    /**
     * Check if number is prime
     */
    const isPrime = (num) => {
        //6k+-1 optimization
        if (num <= 3) return num > 1;
        if ((num % 2 === 0) || (num % 3 === 0)) return false;

        for (let i = 5; Math.pow(i, 2) <= num; i += 6)
            if ((num % i === 0) || (num % (i + 2) === 0)) return false;

        return true;

    }

    /**
     * Find next prime number
     */
    const nextPrime = (prime) => {
        prime++
        while (!isPrime(prime) && prime < 4000000) {
            prime++
        }
        return prime
    }

    const num = 600851475143;
    let factor = num;
    let prime = 2;

    while (true) {
        if (prime >= factor) break;

        if (factor % prime === 0) {
            factor = factor / prime;
            console.log('change factor to ', factor)
            if (isPrime(factor)) {
                console.log('found', factor)
                break;
            }
        }
        else {
            console.log('increasing prime')
            prime = nextPrime(prime)
        }
    }

    return factor;
}
