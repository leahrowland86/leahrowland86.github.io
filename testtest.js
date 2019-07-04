function changeText()
{
   //get your 2 radio buttons
   var userInputgender = document.getElementsByName('gender');
   //loop on the buttons you found
   for(var i=0;i<userInputgender.length;i++)
   {
      //is the button checked?
      if(userInputgender[i].checked)
      {
         //fill the result element with the button value
         document.getElementById('output1').innerHTML = userInputgender[i].value;
      }
   }
   //return false so the form won't commit
   return false;
}
