const measureFun = (fun) => {
    const t0 = performance.now()
    const res = fun();
    const t1 = performance.now()
    return { result: res, time: t1 - t0 }
}

const drawProblems = () => {
    const table = document.getElementById('problems').querySelector('tbody');
    for (const problem of problems) {
        // Table row
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${problem.index}${problem.fun}</td>
            <td><pre>${problem.description}</pre></td>`;

        // Table data
        const btnTd = document.createElement('td');
        const resTd = document.createElement('td');
        resTd.setAttribute('style', 'width: 200px')

        // Button
        const btn = document.createElement('button');
        btn.textContent = 'Run';
        btn.addEventListener('click', e => {
            console.log('run: ', problem.index)
            const res = measureFun(eval(`problem_${problem.index}${problem.fun}`))
            resTd.innerHTML = `<p>Result: <strong><small>${res.result}</small></strong></p>
            <p>Time: <strong><small>${res.time} ms</small></strong></p>`;
        })

        btnTd.appendChild(btn)
        tr.insertAdjacentElement('beforeend', btnTd)
        tr.insertAdjacentElement('beforeend', resTd)
        table.insertAdjacentElement('beforeend', tr)

    }
}

drawProblems()
