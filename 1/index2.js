
// 소수 구하기
function isPrime(n){
    // 일단 n에 대해서 정의를 해보면
    // 소수이어야함 1과 n
    // 그럼 1과 자기 자신이 아닌 다른수로 딱 맞게 떨어진다면 false
    for (let i = 2; i <n; i++) {
        if(n % i===0){
            return false
        }else{
            return true
        }
       
    }


}
console.log(isPrime(43))// true
console.log(isPrime(15))// false
