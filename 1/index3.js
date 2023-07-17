// 소인수 분해
// 소인수 분해는 소수만 1과 자기자신을 빼면? 2부터 시작해야함
// 일단 값을 넣을 수 있는 빈 배열을 만들고
// i는 2부터 시작
function primeFactor(n) {
    let arr = [];
    let i = 2;

    while (n > 2) {
        if (n % i === 0) 
        {if (!arr.includes(i)) {
            arr.push(i);
        }
            n = n / i;
        } else {
            i++;
        }
    }

    return arr;
}

console.log(primeFactor(24)); // [2, 5]

