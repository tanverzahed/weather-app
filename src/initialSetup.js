import { updateInfo } from ".";


function initialSetup(){
  fetch('https://ipapi.co/json/')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    updateInfo(data.city)
  })
  .catch(function(error) {
    console.log('Error:', error);
  });
  }

export {initialSetup}