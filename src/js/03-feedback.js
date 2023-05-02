let throttle = require('lodash.throttle'); // add method throttle from lodash

const formEl = document.querySelector('.feedback-form'); // Create variable formEl and give them tag <form>

let dataObj = {
  // Create Object with keys email and message with their empty values.
  email: '',
  message: '',
};

if (localStorage.getItem('feedback-form-state')) {
  //Function:  (To check if in Storage present datas from previous "input" ) {
  dataObj = JSON.parse(localStorage.getItem('feedback-form-state')); // give dataObj result JSON.parse
  formEl.elements.email.value = dataObj.email; //
  formEl.elements.message.value = dataObj.message;
}

function addData(e) {
  console.log('Це event: ', e);
  console.log('Це дані форм: ', e.target.value);
  console.log('Це значення value of email: ', formEl.elements.email.value);
  console.log('Це властивості form: ', formEl.elements.message.value);
  dataObj.email = formEl.elements.email.value;
  dataObj.message = formEl.elements.message.value;
  console.log('Це наш пустий обєкт після змін: ', dataObj);
  console.log(
    'Це перетворення обєкту в строку для локал Сторедж:',
    JSON.stringify(dataObj)
  );
  localStorage.setItem('feedback-form-state', JSON.stringify(dataObj));
}

formEl.addEventListener('input', throttle(addData, 500));

formEl.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('submit');
  console.log('Це event s: ', event);

  console.log('Це який ел виклик: ', event.target.elements.message.value);
  console.log('Your data to send: ', dataObj);
  event.target.elements.email.value = '';
  event.target.elements.message.value = '';
  localStorage.removeItem('feedback-form-state');
});

// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
