{

    function sumArray(number:number[]):number{
      return number.reduce((pre ,num)=> pre + num,0)
    }
  const sum =sumArray([1, 2, 3, 4, 5])
  console.log(sum)
}