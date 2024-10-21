function numberSum(){
    //Declarar variable
    let n = 5;
    if(n >= 1){
        return n;
    } else {
        return n += numberSum();
    }
}
numberSum();