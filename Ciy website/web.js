// Get DOM object city-form ID, which is on the form element
const citiForm = document.getElementById('citipix-form');
citiForm.addEventListener('submit',function(event){
  // True form submissions go to a backend service, but we want to handle things in the front-end. How can we do this?
  event.preventDefault();
  // Get the text input fields values with .value on the input - but how exactly?
  const city = document.getElementById('city-type').value;
   // You always want to scan and clean data when you get it from the browser, think about .trim and .toLowerCase - this will make your conditional detection more consistent
  const correctCity = city.trim().toLowerCase();
  // This about conditional logic. We want to check through each possible input a user gives us to make this work properly. Think about conditional statements, going through the list of possible city options.
  // This about conditional logic. We want to check through each possible input a user gives us to make this work properly. Think about conditional statements, going through the list of possible city options.

// If a user gives us 'Austin' versus 'austin' - how can we make those point to the same background? 
  const bodySelector = document.querySelector('body').classList;
// bodySelector.add('');
  // We know we want to change the background on the page by switching classes. But how do we replace one class with another using JS???
  switch(correctCity)
  {
        case 'new york':
        case 'new york city':
        case 'nyc':
          bodySelector.add('nyc');

        
      break;
  case  'sf':
  case'sansfrancisco':
  case'goldencity': 
  case'bayarea':
          bodySelector.add('sf');

        
      break;
  case 'la':
  case 'los angeles':
  case'cityofangels':
  case'lax':
          bodySelector.add('la');

        
      break;
  case 'austin':
  case 'atx' :
         bodySelector.add('austin');

        
      break;
  case 'sydney':
  case 'syd':
          bodySelector.add('sydney');

        
      break;
       
  }
  //end of switch statment
 citiForm.reset();
  // to reset the city field to original value;
});
