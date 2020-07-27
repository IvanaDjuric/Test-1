
let K = 3
let N = 35

if(K > N){
    let tmp = K
    K = N
    N = tmp
}

let zbir = 0
let proizvod = 1


    for(let i = K; i <= N; i++){

        if (K % 3 === 0) {
            zbir = zbir + i
        }
        if (K % 3 !== 0 && K % 7 === 0) {
            proizvod = proizvod * i
        }
        console.log("Zbir je: " + zbir, "Proizvod je: " + proizvod)
    }
  

    