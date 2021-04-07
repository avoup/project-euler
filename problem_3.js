const problem_3 = () => {
    /**
     * Check if number is prime
     */
    const isPrime = (num) => {
        for (let i = 2; i < num / 2 + 1; i++) {
            if (num % i === 0) return false;
        }
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
