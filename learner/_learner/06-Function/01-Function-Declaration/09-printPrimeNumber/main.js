
function checkPrime(num){
    let isPrime = true

    for(let i = 2; i < num; i++){

        if(num % i === 0) {
            isPrime = false
            break;
        }
    }

    return isPrime
}

function printPrime(limit){
    for(let i  = 2; i <= limit; i++){
       let isPrime =  checkPrime(i)

       if(isPrime) {
            console.log(i)
       }

    }
}

printPrime(500)