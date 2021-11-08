
// DOM Elements

// const contactForm = document.querySelector("#contact-form")
// const lname = document.querySelector("#lname")
// const fname = document.querySelector("#fname")
// const email = document.querySelector("#email")
// const nameField = document.querySelector("input")
// const password = document.querySelector("#password")


//Regex
// const fnameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ -'\.]+$/
// const lnameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ -'\.]+$/
// const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// const passwordRegex =  /^[a-zA-Z0-9]{4,15}$/


// contactForm.setAttribute("novalidate", true)
// contactForm.addEventListener("submit", validateForm)

// function validateForm(e){
//     e.preventDefault()
    
//     /*validate each input*/
//     if (isValid(lname, lnameRegex) && isValid(fname, fnameRegex) && isValid(phone, phoneRegex) && isValid(email, emailRegex) &&isValid(password, passwordRegex))
//     {
//         console.log("Valid Form")
        
//         contactForm.reset()
//       }  
//       else {
//             console.log("Not Valid")
//         }
//     }
     
//     function isValid(element, regex){
//      return regex.test(element.value)
   
//    }

//    nameField.addEventListener("input", () => {
//     nameField.setCustomValidity("");
//     nameField.checkValidity();
//     console.log(nameField.checkValidity())
//   })
  
//   nameField.addEventListener("invalid", () => {
//     nameField.setCustomValidity("Please fill in proper data.")
//   })