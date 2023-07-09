// Function to capitalize the first letter of a string
function capitalize(arr) {
    for(let i=0; i<arr.length;i++){
        // arr[0]
        console.log( arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
    }

    
    // "s" => "S"+"waraj" => "Swaraj"
}
// Function to reverse a string
function reverse(arr) {
    // "s w a r a j" => "j" "a" "r" "a" "w" "s" => "jaraws" 
    for(let i = 0; i<arr.length;i++){
        console.log(arr[i].split("").reverse().join(""));
        
    }
    
}



// Export the functions to make them accessible to other modules
module.exports = {
    capitalize: capitalize,
    reverse: reverse
};
