function scuberGreetingForFeet(feet){
  if (feet > 2500){
    return "No can do." 
  }
   else if(feet > 2000) {
   return "I will gladly take your thirty bucks."}
  else if(feet <= 400){
    return"This one is on me!"
  }
  
}

function ternaryCheckCity(city) { 
const result = city === "NYC" ? "Ok, sounds good.": "No go.";


  return result;
}




function switchOnCharmFromTip(tip){

switch (tip) {
  case "generous":{
       return "Thank you so much."}
        break;
  case "not as generous":{          
        return "Thank you."}
         break;
  default: 
  return "Bye."
      }
    }