/* This function will prevent the default  */
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
});

/* This function will check whether the email is empty or not and call sentMail function */
const isEmpty =()=>{
   let email =document.getElementById("email").value;
   console.log(email);

if (!email)
    {
        alert("Please fill out email");
    }
    else{
        // alert("message sent successfully")
        sentMail();
    }
}


/* This function will sent the mail using "emailjs". after sending  it clear the form */
const sentMail =() =>{ var templateParams = {
    name: document.getElementById("formName").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  
  emailjs.send('service_3ryjbwy', 'template_tlcthff', templateParams).then(
    (response) => {
        document.getElementById("formName").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(response);
                alert(" Your message sent successfully ")

      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
};



