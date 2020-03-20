
/**
 * 
 * @param {*} nbr 
 * @param {function} calbback 
 */
function multiply(nbr, cb){
   nbr*=10
   //.......
 if(typeof cb !=="function") throw new Error("second argument must be a function !")
   cb(nbr)
}
function process(e){
    console.log(e);
}
var x=10
multiply(x,process)
multiply(x,50)