const problem_7 = () => {
  const primes = [2, 3, 5]; // 7...


  const findPrime = (n) => {
    let lastPrime = primes.length;
    if (n <= lastPrime) return primes[n-1]

    let start = primes[lastPrime - 1] + 1;

    outer: while (true) {
      for (let i = 0; i < primes.length; i++) 		{
        if (start % primes[i] ===0 ) {
          start++;
          continue outer;
        }
      }
      primes.push(start)
      n--;
      if (n <= lastPrime) return start;
      start++;

    }
  }

  return findPrime(10001)
}
