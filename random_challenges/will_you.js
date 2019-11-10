function willYou(young, beautiful, loved) {
    console.log((young === true && beautiful === true && loved === true) ? false: 
     (young === false && beautiful === false && loved === false) ? false: (young === false || beautiful === false && loved === true) ? true: true);
    
      
}

willYou(true,true,true);
willYou(true,false,true); 

willYou(false,false,false);

willYou(false,false,true); 


// if (young === false || beautiful === false && loved === true){
//         return true;
//     }
//     elif (loved === false || beautiful === false && loved === false)
