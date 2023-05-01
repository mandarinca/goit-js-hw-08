let throttle = require('lodash.throttle'); // add method throttle from lodash

const formEl = document.querySelector('.feedback-form'); // Create variable formEl and give them tag <form>

let emailValEl = formEl.elements.email.value;
let messageValEl = formEl.elements.message.value;

let dataObj = {
  // Create Object with keys email and message with their empty values.
  email: '',
  message: '',
};

if (localStorage.getItem('feedback-form-state')) {
  //Check IF:  (To check if in Storage present datas from previous "input" ) {
  dataObj = JSON.parse(localStorage.getItem('feedback-form-state')); // give dataObj result JSON.parse
  emailValEl = dataObj.email; // Value of email add to value.email of object
  messageValEl = dataObj.message; // Value of email add to value.message of object}
}

function addData(e) {
  // Function addData:  from object.mail.value to form.email.value and message too...
  dataObj.email = emailValEl;
  dataObj.message = formEl.messageValEl;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataObj)); // SetIem in Storage key'feedback-form-state' and values from dataObj (stringify)
}

formEl.addEventListener('input', throttle(addData, 500)); // add Listner to <form> "input" and exploring method throttle for reload Storage 500 ms with our fn addData.

formEl.addEventListener('submit', function (event) {
  // add Listner to <form> "submit" and fn : clean input and textarea and remove our feedback-form-state from Storage/
  event.preventDefault();
  event.target.elements.email.value = '';
  event.target.elements.message.value = '';
  localStorage.removeItem('feedback-form-state');
});
