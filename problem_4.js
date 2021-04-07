const problem_4 = () => {

    const isPalindrome = num => {
        const str = num.toString().split('');
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== str[str.length - i - 1]) {
                return false;
            }
        }
        return true;
    }

    let biggest = 0;

    for (let num1 = 999; num1 > 99; num1--) {
        for (let num2 = 999; num2 > 99; num2--) {
            const res = num1 * num2;
            if (isPalindrome(res) && res > biggest) {
                biggest = res;
            }
        }
    }
    return biggest;

}