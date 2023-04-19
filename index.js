
window.onload = submitForm;

// import { RandExp } from "./randexp/lib/randexp";
// const RandExp = require('randexp');

// class randomExp extends RandExp {
//   constructor() {
//     constructor(/^(N|n)\d{8}$/, "N01552334");
//     console.log(constructor);
//   }
// }

var formHandle = document.forms.form;
var form__field = formHandle.form__field;
var form__field_error = document.getElementById("form__field_error");

var form__pattern = formHandle.form__pattern;
var form__pattern_error = document.getElementById("form__pattern_error");

var form__testtype = formHandle.form__testtype;
var form__testtype_error = document.getElementById("form__testtype_error");

var form__testcase = formHandle.form__testcase;
var form__testcase_error = document.getElementById("form__testcase_error");

var form__spec = formHandle.form__spec;
var form__spec_error = document.getElementById("form__spec_error");

var LetterRange = /^[A-Za-z]+$/;
var LetterAndNum = /^[A-Za-z0-9]+$/;
var RegxForRegx = /^[a-zA-Z0-9!@#$%^&*()_+\-={}[\]\\|:;"'<>,.?\/]+$/;

// const remind = new RandExp(/^(N|n)\d{8}$/).gen();
// console.log(remind);

function submitForm() {
  formHandle.onsubmit = function (event) {
    event.preventDefault();
    specInfo();

  };

  //Accessing elements by name through the form.




  function specInfo() {
    // Reset error message to empty string
    form__field_error.innerHTML = "";
    form__pattern_error.innerHTML = "";
    form__testtype_error.innerHTML = "";
    form__testcase_error.innerHTML = "";
    form__spec_error.innerHTML = "";

    //first field validation
    if (!LetterRange.test(form__field.value)) {
      form__field_error.style.background = "red";
      form__field_error.style.color = "white";
      form__field_error.innerHTML = "*Please enter your field name in letters only!";
      form__field.focus();
      return false;
    }

    if (!RegxForRegx.test(form__pattern.value)) {
      form__pattern_error.style.background = "red";
      form__pattern_error.style.color = "white";
      form__pattern_error.innerHTML = "*Please enter RegEX(Example: /^[A-Za-z]+$/) pattern only!";
      form__pattern.focus();
      return false;
    }

    if (form__testtype.value === '--Choose--') {
      form__testtype_error.style.background = "red";
      form__testtype_error.style.color = "white";
      form__testtype_error.innerHTML = "*Please select type of test you are intrested!";
      form__testtype.focus();
      return false;
    }
    if (isNaN(form__testcase.value) || form__testcase.value < 1 || form__testcase.value > 10) {
      form__testcase_error.style.background = "red";
      form__testcase_error.style.color = "white";
      form__testcase_error.innerHTML = "*Please enter a valid number of test cases between 1 and 10!";
      form__testcase.focus();
      return false;
    }
    if (isNaN(form__spec.value) || form__spec.value < 1 || form__spec.value > 10) {
      form__spec_error.style.background = "red";
      form__spec_error.style.color = "white";
      form__spec_error.innerHTML = "*Please enter a valid number of specs between 1 and 10!";
      form__spec.focus();
      return false;
    }

    console.log("Field:", form__field.value);
    console.log("Regex Pattern:", form__pattern.value);
    console.log("Test Case Type:", form__testtype.value);
    console.log("Number of Test Cases:", form__testcase.value);
    console.log("Number of Specs:", form__spec.value);

    var field = document.getElementById('field');
    var regex = document.getElementById('regex');
    var type = document.getElementById('type');
    var testcase = document.getElementById('testcase');

    field.innerHTML = form__field.value;
    regex.innerHTML = form__pattern.value;
    type.innerHTML = form__testtype.value;
    testcase.innerHTML = form__testcase.value;

    return false;

  }

  function generate(regex) {
// program to generate random strings
// generating random number in range [x, y)
function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}
// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    var random_num = getRandomNum(0, 100);
    const charactersLength = characters.length;
    while(true) { 
      for ( let i = 0; i < random_num ; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  }
}
