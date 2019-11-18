function addWeek(weeks){
    var weeks;
    var now = new Date();
now.setDate(now.getDate() + (weeks * 7));
return now;
}

alert(addWeek(3));
alert(addWeek(10));