const measure = (fun, title) => {
    const t0 = performance.now()
    const res = fun();
    const t1 = performance.now()
    console.log(`function returned result: ${res}`)
    console.log(`${title} took ${(t1 - t0)} milliseconds.`)
}

measure(problem_4, 'palindrome')
