function factorize(num){
    if(num<0)
    return -1;

    else if(num == 0)
    return 1;
    else{
        return(num *factorize(num-1));
    }
}
//factorize(5)
alert(factorize(5));