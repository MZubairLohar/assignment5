function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return "String is not Palindrome";
        }
    }

    return "String is Palindrome";
}

alert(palindrome("madam"));