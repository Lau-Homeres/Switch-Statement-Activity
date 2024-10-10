const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a day of the week: ', day => {
    
switch (day){
    case "Monday":
        console.log("Today is Monday. Prepare for school. ");
        break;
    case "Tuesday":
        console.log("Today is Tuesday. Buy some groceries. ");
        break;
    case "Wednesday":
        console.log("Today is Wednesday. It's free day. ");
        break;
    case "Thursday":
        console.log("Today is Thursday. Walk the dogs. ");
        break;
    case "Friday":
        console.log("Today is Friday. Go out with friends. ");
        break;
    case "Saturday":
        console.log("Today is Saturday. Wash your clothes. ");
        break;
    case "Sunday":
        console.log("Today is Sunday. Preach with the fam. ");
        break;

        default:
    console.log("Enter a valid day.");
    
    readline.close();
}
});