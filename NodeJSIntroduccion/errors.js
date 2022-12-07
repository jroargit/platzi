// Try catch is for capture an error and don't break the script to keep going

function err () {
    return 4+z;
}

try {
    err();
    
} catch (error) {
    console.error("Something gone wrong.....");
    console.error(error);
    
}

console.log("end of script");