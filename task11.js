function isVowel (){
    var input = prompt("Enter a vowel");
    return input.toLowerCase();
}

function checkVowel (vowel){
    switch(vowel){
        case "a":
        alert("Input is vowel");
        break;

        case "e":
            alert("Input is vowel");
        break;

        case "i":
            alert("Input is vowel");
        break;

        case"o":
        alert("Input is vowel");
        break;

        case"u":
        alert("Input is vowel");
        break;

        default:
            alert("This is not vowel");
        break;
    }
}

checkVowel(isVowel());
