function displayFactors(no)
{
 
 let iCnt=0;
 for(iCnt=1;iCnt<=(no/2);iCnt++)
 {
  if((no%iCnt)==0)
  {
    console.log("Factor:",iCnt);
  }
 }
 
 
}
function main()
{
  let iValue=20;
  
  displayFactors(iValue);
  

}
main();
