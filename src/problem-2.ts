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
    const uniqNumber =removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    console.log(uniqNumber)
}