(function() {

    let form = document.getElementById("contactForm");

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function validateForm(e) {
        let name, lastname, phone = "";
        let formFields = [];
        name = document.getElementById("contactName");
        lastname = document.getElementById("contactLastname");
        phone = document.getElementById("contactPhone");
        if(name.value === "" || lastname.value === "" || phone.value === "" || !isNumber(phone.value)){
            e.preventDefault();
            let errorText = "Please enter required fields: \n";

            if(name.value === ""){
                name.style.border = "1px solid red";
                errorText += "First Name \n";
            }else
                name.style.border = "1px solid #333333";

            if(lastname.value === ""){
                lastname.style.border = "1px solid red";
                errorText += "Last Name \n";
            }else
                lastname.style.border = "1px solid #333333";

            if(phone.value === "" || !isNumber(phone.value)){
                phone.style.border = "1px solid red";
                errorText += "Phone Number \n";
            }else
                phone.style.border = "1px solid #333333";

            alert(errorText);
        }
        else{
            formFields.push(name.value,lastname.value,phone.value);
            alert("Thank you, for your registration " + formFields[0] + " " +formFields[1]+". We register your phone "+formFields[2] + " in our database.");
        }
    }

    form.addEventListener("submit", validateForm);

})();