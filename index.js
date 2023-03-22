window.onload = submitForm;

var LetterRange = /^[A-Za-z]+$/;

function submitForm() {
  var formHandle = document.forms.form;
  formHandle.onsubmit = specInfo;

  //Accessing elements by name through the form.
  var form__field = formHandle.form__field;
  var form__pattern = formHandle.form__pattern;
  var form__testtype = formHandle.form__testtype;
  var form__testcase = formHandle.form__testcase;
  var form__spec = formHandle.form__spec;

  function specInfo() {
    //first field validation
    if (!LetterRange.test(form__field.value)) {
      form__field_error.style.background = "red";
      form__field_error.style.color = "white";
      form__field_error.innerHTML = "*Please enter your field name in letters only!";
      form__field.focus();
      return false;
    }

    else if (!LetterRange.test(form__pattern.value)) {
      form__pattern_error.style.background = "red";
      form__pattern_error.style.color = "white";
      form__pattern_error.innerHTML = "*Please enter your field name in letters only!";
      form__pattern.focus();
      return false;
    }
    else if (!LetterRange.test(form__testtype.value)) {
      form__testtype_error.style.background = "red";
      form__testtype_error.style.color = "white";
      form__testtype_error.innerHTML = "*Please enter your field name in letters only!";
      form__testtype.focus();
      return false;
    }
    else if (!LetterRange.test(form__testcase.value)) {
      form__testcase_error.style.background = "red";
      form__testcase_error.style.color = "white";
      form__testcase_error.innerHTML = "*Please enter your field name in letters only!";
      form__testcase.focus();
      return false;
    }
    else if (!LetterRange.test(form__spec.value)) {
      form__spec_error.style.background = "red";
      form__spec_error.style.color = "white";
      form__spec_error.innerHTML = "*Please enter your field name in letters only!";
      form__spec.focus();
      return false;
    }

    //document.getElementById("myForm").submit();
  }
}
