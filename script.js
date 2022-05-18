function evensquare(arr) {
    let result = 0;


    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 == 0) {
            result += Math.pow(arr[i], 2)
        }

    }
    return result;
}

console.log(evensquare([3, 2, 4, 5]));




// // Verilmiş n - ədədinin 3-ə
//  və 7-ə bölünüb-bölünməməsini 
//  tapan bir function yazin.


function isExsist(n) {
    let result = "";
    if (n % 3 == 0 && n % 7 == 0) {
        result = "Eded 3e ve 7e bolunur";
    }

    else {
        result = "eded 3e ve 7e eyni anda bolunmur";
    }
    return result;
}
console.log(isExsist(20));
