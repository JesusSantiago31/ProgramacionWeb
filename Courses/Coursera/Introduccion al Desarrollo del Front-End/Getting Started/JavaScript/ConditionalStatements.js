// There are multiple types of statements conditions

// if

if ( 5 > 4){
    console.log("5 is greater than 4")
}

// else 

if ( 5 < 4){
    console.log(" 5 is less than 4 ");
} else {
    console.log("5 is not less than 4");
}

// else if 

if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The light is not green, orange, or red");
}

// Could be some alternatives to else if  statements and one exampe is SWITCH CASE

//converting the previous if-else example with switch-case
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
        break;
 }