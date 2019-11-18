function currencyNotes() {
    var amount = prompt("Enter the amount you wish to withdraw");
    var hundred = Math.floor(amount / 100);
    var fifty = Math.floor((amount % 100) / 50);
    var ten = Math.floor((amount % 100) % 50) / 10;
    var remaining = Math.floor(((amount % 100) % 50) % 10);
    document.write("<h2>You will have " + hundred + " hundred notes, " + fifty + " fifty notes and " + ten + " ten notes.<h2/>");
}

currencyNotes();