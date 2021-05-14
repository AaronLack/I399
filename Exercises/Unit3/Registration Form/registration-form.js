"use strict";
console.log("js working");

// https://www.valentinog.com/blog/formdata/
// https://dmitripavlutin.com/foreach-iterate-array-javascript/
// https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
// https://www.kirupa.com/html5/setting_css_styles_using_javascript.htm
// https://gomakethings.com/serializing-form-data-with-the-vanilla-js-formdata-object/

function displayErrorMsg(name) {
    let selector = `input[name="${name}"] + small`;
    let element = document.querySelector(selector);

    if (element) {
        element.style.display = "block";
    }
}

// function processData(entry) {
//   // console.log(entry[0], entry[1]);
//   let name = entry[0];
//   let value = entry[1];

//   // console.log(name, value);

//   // HTML validator will only check if a@b works
//   // Test to make sure your IU email address works
//   if (name === "user_email") {
//     let regex = /\w+@\w+\.\w+/;
//     const email = regex.exec(value);
//     email ? console.log(email) : displayErrorMsg(name);
//   } 
//   // zipcodes aren't auto validated, so we should
//   // make sure it matches US zip format e.g. 47405-0102
//   else if (name === "user_zipcode") {
//     let regex = /[0-9]{5}\-[0-9]{4}|[0-9]{5}/;
//     const zipcode = regex.exec(value);
//     zipcode ? console.log(zipcode) : displayErrorMsg(name);
//   }
//   // phone numbers also are not validated
//   // 812-855-4848
//   // 8128554848
//   // (812)855-4848
//   // (812) 855-4848
//   else if (name === "user_phone") {
//     let regex = /\(?\d{3}\)?\s?\-?\d{3}\-?\d{4}/;
//     const phone = regex.exec(value);
//     phone ? console.log(phone) : displayErrorMsg(name);
//     if (phone) { 
//         formData.set(name, phone[0].replace(/[\s()-]+/, '')); 
//         // console.log(phone);
//     }
//   }
  

// }

const form = document.forms[0];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  new FormData(form);
});

form.addEventListener("formdata", (event) => {
  // event.formData grabs the object
  // console.log("formdata", event.formData);
  // values / entries
  // grabs via the NAME attribute not ID

  const data = event.formData;
  const entries = [...data.entries()];
  console.log("Entries", entries);
  // const keys = [...data.keys()];
  // console.log("Keys", keys);
  const values = [...data.values()];
  console.log("Values", values);

  entries.forEach((entry) => {
  
    // console.log(entry[0], entry[1]);
    let name = entry[0];
    let value = entry[1];

    // HTML validator will only check if a@b works
    // Test to make sure your IU email address works
    if (name === "user_email") {
        let regex = /\w+@\w+\.\w+/;
        const email = regex.exec(value);
        email ? console.log(email) : displayErrorMsg(name);
    } 
    // zipcodes aren't auto validated, so we should
    // make sure it matches US zip format e.g. 47405-0102
    else if (name === "user_zipcode") {
        let regex = /[0-9]{5}\-[0-9]{4}|[0-9]{5}/;
        const zipcode = regex.exec(value);
        zipcode ? console.log(zipcode) : displayErrorMsg(name);
    }
    // phone numbers also are not validated
    // 812-855-4848
    // 8128554848
    // (812)855-4848
    // (812) 855-4848
    else if (name === "user_phone") {
        let regex = /\(?\d{3}\)?\s?\-?\d{3}\-?\d{4}/;
        const phone = regex.exec(value);
        phone ? console.log(phone) : displayErrorMsg(name);
        if (phone) { 
            value = value.replace(/[\s()-]+/g, '');
            console.log(value.replace(/[\s()-]+/g, ''));
            console.log("current", name, value);
            data.set('user_phone', value); 
            data.get('user_phone');
        }
    }
    console.log(name, value);
  });

  const valuesAfter = [...data.values()];
  console.log(valuesAfter);

});
