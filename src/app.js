// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
const NEG_INF=-1000000;
  // Progression 2: add 3 variables: title, currIndex, check
  function createPop(arrayOfNumbers,itemToSearch){
    var currIndex=NEG_INF;
    var check=false;
  // Progression 3: create a function "searchForElement" 
      function searchForElement(){
         
          for (let i=0;i<arrayOfNumbers.length;i++){
            if (itemToSearch===arrayOfNumbers[i]){
              currIndex=i;
              check=true;
              break;
            }
            else{
              currIndex=NEG_INF;
              check=false;
            }
            
          }
        }
       searchForElement();
       if(check===true){
         console.log(`The item is present and is at index ${currIndex}`)
       }
       else{
         console.log(`The item is not present and is at index ${currIndex}`)
       }
  
}

  
  // Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
                    // to return the desired output.
const arrayOfNumbers = [1,2,3,4,5,6];
const itemToSearch = 4;
createPop(arrayOfNumbers,itemToSearch)