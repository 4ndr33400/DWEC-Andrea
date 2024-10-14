function allPrimeNumberFrom1To100(number){
    for(let i = 2; i <= 1000; i++){
        if(i % i === 0){
            console.log(i);
        }
    }
}
allPrimeNumberFrom1To100();