import throttle from "lodash.throttle";


const feedbackForm = document.querySelector(".feedback-form");
const emailInputRef = document.querySelector('input[name="email"]');
const messageInputRef = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = "feedback-form-state";
const saveData = localStorage.getItem(LOCALSTORAGE_KEY);


feedbackForm.addEventListener('input', throttle(handleFormInput, 500));
function handleFormInput() {
    const formData = {
        email: emailInputRef.value,
        message: messageInputRef.value
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};


if (saveData) {
    const formData = JSON.parse(saveData);
    emailInputRef.value = formData.email;
    messageInputRef.value = formData.message;
};


feedbackForm.addEventListener('submit', handleSubmit);
function handleSubmit(evt) {
    evt.preventDefault();
    const formData = {
        email: emailInputRef.value,
        message: messageInputRef.value,
    };
    console.log(formData);
emailInputRef.value = '';
messageInputRef.value = '';
localStorage.removeItem(LOCALSTORAGE_KEY);
};




