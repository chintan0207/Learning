const validateForm = () => {
    let isValid = true;
    isValid = validateName() && isValid;
    isValid = validateEmail() && isValid;
    isValid = validatePassword() && isValid;
    isValid = validateCpassword() && isValid;
    isValid = validateAddress() && isValid;
    isValid = validateGender() && isValid;
    isValid = validateCountry() && isValid;
    isValid = validateHobby() && isValid;
    isValid = validateTermcondition() && isValid;
    


    if (isValid) {
        let formdata = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            password: document.getElementById('password').value.trim(),
            address: document.getElementById('address').value.trim(),
            gender: document.querySelector('input[name="gender"]:checked').value,
            country: document.getElementById('country').value.trim(),
            hobby: getHobbies(),
            termcondition:document.getElementById('tc').value
        }
        let formdataJson = JSON.stringify(formdata);
        document.getElementById('data').innerHTML=formdataJson
        alert(formdataJson);
        
    }
    return isValid;
}

const validateName = () => {
    let name = document.getElementById('name').value.trim();
    let errorElement = document.getElementById("name-error");
    errorElement.innerHTML = "";
    if (name === "") {
        errorElement.innerHTML = "*Name is required";
        return false;
    }
    return true;
}

const validateEmail = () => {
    let email = document.getElementById('email').value.trim();
    let errorElement = document.getElementById("email-error");
    errorElement.innerHTML = "";
    if (email === "") {
        errorElement.innerHTML = "*Email is required";
        return false;
    } else if (!emailvalidation(email)) {
        errorElement.innerHTML = "*Invalid email format";
        return false;
    }
    return true;
}

const emailvalidation = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const validateAddress = () => {
    let address = document.getElementById('address').value.trim();
    let errorElement = document.getElementById("address-error");
    errorElement.innerHTML = "";
    if (address === "") {
        errorElement.innerHTML = "*Address is required";
        return false;
    }
    return true;
}


const validatePassword = () => {
    let password = document.getElementById('password').value.trim();
    let errorElement = document.getElementById("password-error");
    errorElement.innerHTML = "";
    if (password === "") {
        errorElement.innerHTML = "*Password is required";
        return false;
    } else if (password.length < 6) {
        errorElement.innerHTML = "*Password must be at least 6 characters long.";
        return false;
    }
    return true;
}

const validateCpassword = () => {
    let password = document.getElementById('password').value.trim();
    let cpassword = document.getElementById('cpassword').value.trim();
    let errorElement = document.getElementById("cpassword-error");
    errorElement.innerHTML = "";
    if (cpassword === "") {
        errorElement.innerHTML = "*Confirm Password is required";
        return false;
    } else if (password !== cpassword) {
        errorElement.innerHTML = "*Password do not match";
        return false;
    }
    return true;
}

const validateGender = () => {
    let gender = document.querySelector('input[name="gender"]:checked');
    let errorElement = document.getElementById("gender-error");
    errorElement.innerHTML = "";
    if (!gender) {
        errorElement.innerHTML = '*Gender is required';
        return false;
    }
    return true;

}

const validateCountry = () => {
    let country = document.getElementById('country').value;
    let errorElement = document.getElementById("country-error");
    errorElement.innerHTML = "";
    if (country === "") {
        errorElement.innerHTML = "*Please Select the country";
        return false;
    }
    return true;
}

const validateHobby = () => {
    let hobbies = document.getElementsByName('hobby');
    let errorElement = document.getElementById("hobby-error");
    errorElement.innerHTML = "";
    let isChecked = false;
    for (let i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            isChecked = true;
            break;
        }
    }
    if (!isChecked) {
        errorElement.innerHTML = '*Select at least one hobby';
        return false;
    }

    return true;
}


const getHobbies = () => {
    
    let hobbies = document.getElementsByName('hobby');
    let selectedHobbies = [];
    for(let i=0; i< hobbies.length;i++){
        if(hobbies[i].checked){
            selectedHobbies.push(hobbies[i].value);
        }
    }

    return selectedHobbies;
}

const validateTermcondition = () =>{
    let tc = document.getElementById('tc').checked;
    let errorElement = document.getElementById("tc-error");

    errorElement.innerHTML = "";
    if(!tc){
        errorElement.innerHTML = "*You must agree to the terms and conditions";
        return false;
    }

    return true;
}