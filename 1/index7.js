function commonElements(kArray){

    // 일단 첫배열과 두번쨰 배열의 공통된 항목을 찾는다
    // 찾은 공통된 배열과 세번쨰 배열의 공통된 항목을 찾는다


    let arr1 = kArray[0]
    let arr2 = kArray[1]
    let arr3 = kArray[2]
    let a = arr1.filter(num => arr2.includes(num));
    console.log(a)
    let b = a.filter(num =>arr3.includes(num))
    console.log(b)
    return b


}
console.log(commonElements([[1,2,3],[1,2,3,4],[1,2]]))