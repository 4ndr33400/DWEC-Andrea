
const greet = function() {
    return "Bienvenid@, "
};
 
const goodbye = function(name, callback){
    console.log(callback() + name); 
}