
// Sign In Check Data

document.querySelector("input").addEventListener("input", checkNumber);
let flag = false;
let count = 0
let userDataArr = JSON.parse(localStorage.getItem("userData")) || [];
function checkNumber() {
    let number = document.querySelector("#signin_number").value
    if (number.length < 1) {
        document.querySelector("input+p").innerHTML = ""
    }
    if (number.length > 0 && number.length < 10) {
        document.querySelector("input+p").innerHTML = "Please enter a valid 10-digit mobile number"
    }
    if (number.length > 9) {
        document.querySelector("input+p").innerHTML = ""
        let userData = {
            userNumber: number,
        }
        document.querySelector("#signin_form").addEventListener("submit", function () {
            checkData(userData)
        });
    }
}

function redirectHome() {
    window.location.href = "index.html";
}



function checkData(userData) {
    event.preventDefault();
    removeData()
    showOtp()
    document.querySelector("#signin_title").innerText = "We Just Texted You";
    document.querySelector("#signin_title").style.textAlign = "center";

    let otp_title = document.createElement("div");
    otp_title.setAttribute("id", "otp_title");
    otp_title.innerHTML = `Please enter the verification code we just sent to ${userData.userNumber}`

    let otp_form = document.createElement("form");
    otp_form.setAttribute("id", "otp_form")
    let signin_diffNumber = document.createElement("p");
    signin_diffNumber.setAttribute("id", "signin_input1")
    signin_diffNumber.innerText = "Different Number?";
    signin_diffNumber.addEventListener("click", signin);

    let otp_div = document.createElement("div");
    otp_div.setAttribute("id", "otp_div");

    let input2 = document.createElement("input");
    input2.setAttribute("type", "tel");
    input2.setAttribute("id", "signin_tel1")
    input2.setAttribute("maxlength", "1")

    let input3 = document.createElement("input");
    input3.setAttribute("type", "tel");
    input3.setAttribute("id", "signin_tel2")
    input3.setAttribute("maxlength", "1")

    let input4 = document.createElement("input");
    input4.setAttribute("type", "tel");
    input4.setAttribute("id", "signin_tel3")
    input4.setAttribute("maxlength", "1")

    let input5 = document.createElement("input");
    input5.setAttribute("type", "tel");
    input5.setAttribute("id", "signin_tel4")
    input5.setAttribute("maxlength", "1")

    otp_div.append(input2, input3, input4, input5)

    let otp_resend = document.createElement("div");
    otp_resend.innerText = "Resend the Code"
    otp_resend.setAttribute("id", "otp_resend")
    otp_resend.addEventListener("click",function(){
        alert("Your OTP is 1234")
    })

    let signinData_submit = document.createElement("input");
    signinData_submit.setAttribute("type", "submit")
    signinData_submit.setAttribute("id", "signinData_submit")
    signinData_submit.addEventListener("click", function () {
        checkOtp(userData)
    });

    otp_form.append(signin_diffNumber, otp_div, otp_resend, signinData_submit);
    document.querySelector("#signin_container").append(otp_title, otp_form);
}

function showOtp(){
    alert("Your New OTP is 1234")
}

function removeData() {
    document.querySelector("input").remove();
    document.querySelector("form+div+button").remove();
    document.querySelector("form+div").remove();
    document.querySelector("form").remove();
}

function signin() {
    window.location.href = "signin.html"
}

function checkOtp(userData) {
    document.querySelector("#otp_form").addEventListener("submit", checkOtpData);
    function checkOtpData(event) {
        event.preventDefault();
        let otp1st_value = document.querySelector("#signin_tel1").value;
        let otp2nd_value = document.querySelector("#signin_tel2").value;
        let otp3rd_value = document.querySelector("#signin_tel3").value;
        let otp4th_value = document.querySelector("#signin_tel4").value;

        if (otp1st_value == 1 && otp2nd_value == 2 && otp3rd_value == 3 && otp4th_value == 4) {
            removeDataSignin();
            let numer = userData.userNumber;
            let filterNumber = userDataArr.filter(x => x.userNumber == numer)
            
            if (filterNumber.length >= 1) {
                
                flag = true;
                localStorage.setItem('num', numer);
                localStorage.setItem("flag_value", flag);
                window.location.href = "index.html"

            }
            else {
                localStorage.setItem('num', numer);
                signinSuccess(userData);
            }
        }
        else {
            alert("Enter Correct OTP");
        }
    }
}

function removeDataSignin() {
    document.querySelector("#otp_title").remove();
    document.querySelector("form").remove();
}

function signinSuccess(userData) {
    document.querySelector("#signin_title").innerText = "WELCOME, THANK YOU FOR BEING WITH US!";
    document.querySelector("#signin_title").style.textAlign = "center";

    let success_div = document.createElement("div");

    let success_title = document.createElement("div");
    success_title.innerText = "Please let us know you more."

    let success_form = document.createElement("form");
    success_form.setAttribute("id", "success_form");

    let success_Name = document.createElement("input");
    success_Name.setAttribute("id", "success_Name")
    success_Name.setAttribute("placeholder", "First Name")

    let success_Email = document.createElement("input");
    success_Email.setAttribute("id", "success_Email");
    success_Email.setAttribute("placeholder", "Email Address")
    success_Email.setAttribute("type", "email")

    let success_Submit = document.createElement("input");
    success_Submit.setAttribute("id", "success_Submit");
    success_Submit.setAttribute("type", "submit")
    success_Submit.addEventListener("click", function () {
        storeUserData(userData);
    })

    success_form.append(success_Name, success_Email, success_Submit);

    let success_ordiv = document.createElement("div");
    success_ordiv.setAttribute("id", "success_ordiv");

    let success_ordivleft = document.createElement("div");
    success_ordivleft.setAttribute("id", "success_ordivleft");
    success_ordivleft.innerText = "";

    let success_ordivcenter = document.createElement("div")
    success_ordivcenter.setAttribute("id", "success_ordivcenter")
    success_ordivcenter.innerText = "or";

    let success_ordivright = document.createElement("div");
    success_ordivright.setAttribute("id", "success_ordivright")
    success_ordivright.innerText = "";

    success_ordiv.append(success_ordivleft, success_ordivcenter, success_ordivright);

    let success_skipbutton = document.createElement("button");
    success_skipbutton.setAttribute("id", "success_skipbutton")
    success_skipbutton.innerText = "Skip, Continue Without Name";
    success_skipbutton.addEventListener("click", function () {
        userData = {
            userNumber: userData.userNumber,
            userName: "",
            userEmail: "",
        }
        userDataArr.push(userData);
        localStorage.setItem("userData", JSON.stringify(userDataArr))
        flag = true;
        localStorage.setItem("flag_value", flag);
        window.location.href = "index.html"
    });

    success_div.append(success_title, success_form, success_ordiv, success_skipbutton)
    document.querySelector("#signin_container").append(success_div);
}


function storeUserData(userData) {
    event.preventDefault();
    userData = {
        userNumber: userData.userNumber,
        userName: document.querySelector("#success_Name").value,
        userEmail: document.querySelector("#success_Email").value
    };

    userDataArr.push(userData);
    flag = true;
    console.log(userData.userName)
    // document.querySelector("h4").innerText = `Hello ${userData.userName}`
    localStorage.setItem("flag_value", flag);
    localStorage.setItem("userData", JSON.stringify(userDataArr));

    if (flag === true) {
        window.location.href = "index.html"
    }
}










