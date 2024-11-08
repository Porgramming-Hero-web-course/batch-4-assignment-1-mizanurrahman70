{
    function removeDuplicates(numbers:number[]):number[]{
        const removedDuplicates:number[]= []
        for (const number of numbers){
         if(!removedDuplicates.includes(number)){
            removedDuplicates.push(number)
         }
        }
     return removedDuplicates
    }
    
}