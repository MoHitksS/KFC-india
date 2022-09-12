let userDataArr2 = JSON.parse(localStorage.getItem("userData"));
let NooOrders = JSON.parse(localStorage.getItem("orders"))
let num = localStorage.getItem('num');

let flag2 = JSON.parse(localStorage.getItem("flag_value"));

document.querySelector("#user_signout").addEventListener("click", userSignout);
function userSignout() {
    flag2 = false;
    localStorage.setItem("flag_value", flag2);
    window.location.href = "index.html";
}

function NameChange() {
    userDataArr2.forEach(element => {
        if (element.userName == "") {
            document.querySelector("h4").innerText = `Hello Kfc Lover!`;
        }
        else {
            document.querySelector("h4").innerText = `Hello ${element.userName}!`;
        }
    });
}

function orderHistory() {
    document.querySelector("#order_History").style.color = "white";
    document.querySelector("#order_History").style.b = "white";
    document.querySelector("#favorite_Menu").style.color = "#717274";
    document.querySelector("#addresses").style.color = "#717274";
    document.querySelector("#account_Settings").style.color = "#717274";
    document.querySelector("#user_section_right").innerText = "";

    let orderHistory = document.createElement("div");
    orderHistory.setAttribute("id", "user_section_header");

    let orderHistory_order = document.createElement("div");
    orderHistory_order.setAttribute("id", "user_section_order");
    orderHistory_order.innerText = "Order History";

    let orderHistory_orderlookup = document.createElement("div");
    orderHistory_orderlookup.setAttribute("id", "user_section_orderlookup");

    let orderHistory_orderSpan = document.createElement("span");
    orderHistory_orderSpan.innerText = "Looking for a specific order?";

    let orderHistory_orderlookupbtn = document.createElement("button")
    orderHistory_orderlookupbtn.innerText = "Order Lookup";
    orderHistory_orderlookupbtn.addEventListener("click", function () {
        document.querySelector(".popup1").style.display = "block"
    });

    orderHistory_orderlookup.append(orderHistory_orderSpan, orderHistory_orderlookupbtn)
    orderHistory.append(orderHistory_order, orderHistory_orderlookup)

    let user_noOrder = document.createElement("div");
    user_noOrder.setAttribute("id", "user_section_NoOrder");

    let user_noOrderSpan = document.createElement("span");
    if(NooOrders < 1){
        user_noOrderSpan.innerText = "No orders have been placed in the past 2 months.";
    }
    else{
        user_noOrderSpan.innerText = `You Have Orderd ${NooOrders} Meals in last few days.`;
    }
    

    let user_noOrderbtn = document.createElement("button")
    user_noOrderbtn.innerText = "View menu";
    user_noOrderbtn.addEventListener("click",function(){
        window.location.href = "Menu.html"
    })
    user_noOrder.append(user_noOrderSpan, user_noOrderbtn)

    let hr = document.createElement("hr")

    let user_helpSection_box = document.createElement("div");
    user_helpSection_box.setAttribute("id", "user_section_help_container");

    let user_section_help = document.createElement("div");
    user_section_help.setAttribute("id", "user_section_help");

    let user_helpSectionText = document.createElement("div");
    user_helpSectionText.setAttribute("id", "user_section_helpText");

    let user_helpSectionText_Span = document.createElement("span");
    user_helpSectionText_Span.innerText = "HAVE A QUESTION?";

    let user_helpSectionText_Span1 = document.createElement("span")
    user_helpSectionText_Span1.innerText = "Connect with a specialist for answers.";

    user_helpSectionText.append(user_helpSectionText_Span, user_helpSectionText_Span1)

    let user_helpSectionbtn_Help = document.createElement("button");
    user_helpSectionbtn_Help.setAttribute("id", "user_section_helpBtn");
    user_helpSectionbtn_Help.innerText = "Get Help";
    user_helpSectionbtn_Help.addEventListener("click",function(){
        window.location.href = "help.html"
    })

    user_section_help.append(user_helpSectionText, user_helpSectionbtn_Help);
    user_helpSection_box.append(user_section_help);
    document.querySelector("#user_section_right").append(orderHistory, user_noOrder, hr, user_helpSection_box)
}

function favoriteMenu() {
    document.querySelector("#order_History").style.color = "#717274";
    document.querySelector("#favorite_Menu").style.color = "white";
    document.querySelector("#addresses").style.color = "#717274";
    document.querySelector("#account_Settings").style.color = "#717274";
    document.querySelector("#user_section_right").innerText = "";

    let favoriteMenu = document.createElement("div");
    favoriteMenu.setAttribute("id", "favoriteMenu");

    let favoriteMenu_heading = document.createElement("span");
    favoriteMenu_heading.setAttribute("class", "favoriteMenu_heading")
    favoriteMenu_heading.innerText = "MY OCCASIONS";

    let favoriteMenu_Data = document.createElement("p")
    favoriteMenu_Data.setAttribute("class", "favoriteMenu_Data")
    favoriteMenu_Data.innerText = "You haven't created any occasions yet";

    let favoriteMenu_history = document.createElement("button")
    favoriteMenu_history.setAttribute("class", "favoriteMenu_history")
    favoriteMenu_history.innerText = "View Order History";
    favoriteMenu_history.addEventListener("click",function(){
        window.location.href = "account.html"
    })

    let favoriteMenu_heading1 = document.createElement("span");
    favoriteMenu_heading1.setAttribute("class", "favoriteMenu_heading")
    favoriteMenu_heading1.innerText = "MY FAVORITE MENU";

    let favoriteMenu_Data1 = document.createElement("p")
    favoriteMenu_Data1.setAttribute("class", "favoriteMenu_Data")
    favoriteMenu_Data1.innerText = "You haven't favorited any items yet";

    let favoriteMenu_history1 = document.createElement("button")
    favoriteMenu_history1.setAttribute("class", "favoriteMenu_history")
    favoriteMenu_history1.innerText = "Browse the menu";
    favoriteMenu_history1.addEventListener("click",function(){
        window.location.href = "Menu.html"
    })

    favoriteMenu.append(favoriteMenu_heading, favoriteMenu_Data, favoriteMenu_history, favoriteMenu_heading1, favoriteMenu_Data1, favoriteMenu_history1);
    document.querySelector("#user_section_right").append(favoriteMenu)
}

function addresses() {
    document.querySelector("#order_History").style.color = "#717274";
    document.querySelector("#account_Settings").style.color = "#717274";
    document.querySelector("#favorite_Menu").style.color = "#717274";
    document.querySelector("#addresses").style.color = "white";
    document.querySelector("#user_section_right").innerText = "";

    let user_addresses = document.createElement("div");
    user_addresses.setAttribute("id", "user_addresses");

    let useraddresses_heading = document.createElement("span");
    useraddresses_heading.setAttribute("id", "useraddresses_heading")
    useraddresses_heading.innerText = "MY DELIVERY ADDRESSES";

    let useraddresses_add = document.createElement("button")
    useraddresses_add.setAttribute("id", "useraddresses_add")
    useraddresses_add.innerText = "Add New Addresses";

    user_addresses.append(useraddresses_heading, useraddresses_add);
    document.querySelector("#user_section_right").append(user_addresses);
}

function accountSettings() {
    document.querySelector("#order_History").style.color = "#717274";
    document.querySelector("#favorite_Menu").style.color = "#717274";
    document.querySelector("#addresses").style.color = "#717274";
    document.querySelector("#account_Settings").style.color = "white";
    document.querySelector("#user_section_right").innerText = "";

    let accountSettings_maindiv = document.createElement("div");
    accountSettings_maindiv.setAttribute("id", "user_accountSettings")

    let accountSettings_Heading = document.createElement("div");
    accountSettings_Heading.setAttribute("id", "accountSettings_Heading")
    accountSettings_Heading.innerText = "ACCOUNT SETTINGS"

    let persondiv = document.createElement("div");
    persondiv.setAttribute("id", "persondiv");

    let personInfo_left = document.createElement("div");
    personInfo_left.setAttribute("id", "personInfo_left");
    personInfo_left.innerText = "PERSONAL INFO"

    let personInfo_right = document.createElement("div");
    personInfo_right.setAttribute("id", "personInfo_right");
    personInfo_right.innerText = "Edit"
    personInfo_right.addEventListener("click", addDetailsAgain)

    persondiv.append(personInfo_left, personInfo_right)

    let preferencesdiv = document.createElement("div");
    preferencesdiv.setAttribute("id", "preferencesdiv");

    let preferencesdiv_left = document.createElement("div");
    preferencesdiv_left.setAttribute("id", "preferencesdiv_left");
    preferencesdiv_left.innerText = "COMMUNICATION PREFERENCES"

    let preferencesdiv_right = document.createElement("div");
    preferencesdiv_right.setAttribute("id", "preferencesdiv_right");

    let preferencesdiv_right_p = document.createElement("p");
    preferencesdiv_right_p.setAttribute("class", "preferencesdiv_p")
    preferencesdiv_right_p.innerText = "Colonels Club";

    let preferencesdiv_right_p1 = document.createElement("p")
    preferencesdiv_right_p1.setAttribute("class", "preferencesdiv_p")
    preferencesdiv_right_p1.innerText = "(member since 2016)";

    let hr = document.createElement("hr");

    let preferenceskfcul = document.createElement("ul");
    preferenceskfcul.setAttribute("id", "preferenceskfcul");

    let preferenceskfcli1 = document.createElement("li");
    preferenceskfcli1.setAttribute("id", "preferenceskfcli1");

    let preferenceskfChkbx1 = document.createElement("input");
    preferenceskfChkbx1.setAttribute("class", "preferences_input")
    preferenceskfChkbx1.setAttribute("type", "checkbox")

    let preferenceskfChkbx1div = document.createElement("div");
    preferenceskfChkbx1div.setAttribute("id", "preferenceskfChkbx1div");

    let preferenceskfChkbx1Lable = document.createElement("label");
    preferenceskfChkbx1Lable.innerText = "KFC news and announcements";

    let preferenceskfChkbx1Span = document.createElement("span");
    preferenceskfChkbx1Span.innerText = "Get occasional emails about site improvements or changes";

    preferenceskfChkbx1div.append(preferenceskfChkbx1Lable, preferenceskfChkbx1Span);

    let preferenceskfcli2 = document.createElement("li");
    preferenceskfcli2.setAttribute("id", "preferenceskfcli1");

    let preferenceskfChkbx2 = document.createElement("input");
    preferenceskfChkbx2.setAttribute("class", "preferences_input")
    preferenceskfChkbx2.setAttribute("type", "checkbox")

    let preferenceskfChkbx2div = document.createElement("div");
    preferenceskfChkbx2div.setAttribute("id", "preferenceskfChkbx1div");

    let preferenceskfChkbx2Lable = document.createElement("label");
    preferenceskfChkbx2Lable.innerText = "Keep me up to date with marketing emails from KFC";

    preferenceskfChkbx2div.append(preferenceskfChkbx2Lable);

    let preferenceskfcli3 = document.createElement("li");
    preferenceskfcli3.setAttribute("id", "preferenceskfcli1");

    let preferenceskfChkbx3 = document.createElement("input");
    preferenceskfChkbx3.setAttribute("class", "preferences_input")
    preferenceskfChkbx3.setAttribute("type", "checkbox")

    let preferenceskfChkbx3div = document.createElement("div");
    preferenceskfChkbx3div.setAttribute("id", "preferenceskfChkbx1div");

    let preferenceskfChkbx3Lable = document.createElement("label");
    preferenceskfChkbx3Lable.innerText = "Receive SMS";

    preferenceskfChkbx3div.append(preferenceskfChkbx3Lable);

    preferenceskfcli1.append(preferenceskfChkbx1, preferenceskfChkbx1div);
    preferenceskfcli2.append(preferenceskfChkbx2, preferenceskfChkbx2div);
    preferenceskfcli3.append(preferenceskfChkbx3, preferenceskfChkbx3div);

    preferenceskfcul.append(preferenceskfcli1, preferenceskfcli2, preferenceskfcli3);

    let preferences_savebtn = document.createElement("button");
    preferences_savebtn.setAttribute("id", "preferences_savebtn")
    preferences_savebtn.innerText = "Save";

    preferencesdiv_right.append(preferencesdiv_right_p, preferencesdiv_right_p1, hr, preferenceskfcul, preferences_savebtn)

    preferencesdiv.append(preferencesdiv_left, preferencesdiv_right)

    let preferences_DeleteAccount = document.createElement("button");
    preferences_DeleteAccount.setAttribute("id", "preferences_DeleteAccount")
    preferences_DeleteAccount.innerText = "Delete Account";
    preferences_DeleteAccount.addEventListener("click", function () {
        DeleteAccount(userDataArr2)

    })

    accountSettings_maindiv.append(accountSettings_Heading, persondiv, preferencesdiv, preferences_DeleteAccount);
    document.querySelector("#user_section_right").append(accountSettings_maindiv);
}


function DeleteAccount(userDataArr2) {
    userDataArr2.forEach(function (element, index) {
        deleteUserData(element, index);
    })
}

function deleteUserData(element, index) {
    userDataArr2.splice(index, 1);
    localStorage.setItem("userData", JSON.stringify(userDataArr2))
    flag2 = false;
    localStorage.setItem("flag_value", flag2);
    window.location.href = "index.html"
}

function addDetailsAgain() {
    let body = document.querySelector("body")
    // body.style.margin = "0";
    // body.style.height = "100%";
    // body.style.overflow = "hidden";
    body.style.backgroundColor = "#6e6e70";
    let Edit_parent_box = document.createElement("div");
    Edit_parent_box.setAttribute("id", "Edit_parent_box")

    let Edit_content_box = document.createElement("div");
    Edit_content_box.setAttribute("id", "Edit_content_box")

    let edit_heading_div = document.createElement("div");
    edit_heading_div.setAttribute("id", "edit_heading_div");

    let edit_heading = document.createElement("h3");
    edit_heading.innerText = "EDIT PERSONAL INFO";

    let edit_box_close = document.createElement("button");
    let edit_box_close_img = document.createElement("img");
    edit_box_close_img.setAttribute("src", "https://online.kfc.co.in/static/media/PopupCloseBtn.ee8133ae.svg");
    edit_box_close.append(edit_box_close_img);
    edit_heading_div.append(edit_heading, edit_box_close);
    edit_box_close.addEventListener("click", closeBox);
    let hr = document.createElement("hr");

    let edit_input_box = document.createElement("div");
    edit_input_box.setAttribute("id", "edit_input_box")

    let edit_input_heading = document.createElement("p");
    edit_input_heading.setAttribute("id", "edit_input_heading");
    edit_input_heading.innerText = "PERSONAL INFORMATION";

    let edit_input_First_Name = document.createElement("input");
    edit_input_First_Name.setAttribute("id", "First_Name");
    edit_input_First_Name.setAttribute("type", "text");
    edit_input_First_Name.setAttribute("placeholder", "First Name*");

    let edit_input_Last_Name = document.createElement("input");
    edit_input_Last_Name.setAttribute("id", "Last_Name");
    edit_input_Last_Name.setAttribute("type", "text");
    edit_input_Last_Name.setAttribute("placeholder", "Last Name*");

    let edit_input_Email = document.createElement("input");
    edit_input_Email.setAttribute("id", "Email");
    edit_input_Email.setAttribute("type", "email");
    edit_input_Email.setAttribute("placeholder", "Email*");

    let edit_input_Phone_Number = document.createElement("input");
    edit_input_Phone_Number.setAttribute("id", "Number");
    edit_input_Phone_Number.setAttribute("type", "text");
    edit_input_Phone_Number.setAttribute("maxlength", "10");
    edit_input_Phone_Number.setAttribute("placeholder", "Phone_Number*");

    let edit_input_btn = document.createElement("div");
    edit_input_btn.setAttribute("id", "edit_input_btn");

    let edit_input_Cancelbtn = document.createElement("button");
    edit_input_Cancelbtn.setAttribute("class", "edit_input_buttons");
    edit_input_Cancelbtn.innerText = "Cancel";
    edit_input_Cancelbtn.addEventListener("click", CancelForm);


    let edit_input_Savebtn = document.createElement("button");
    edit_input_Savebtn.setAttribute("class", "edit_input_buttons");
    edit_input_Savebtn.innerText = "Save";
    edit_input_Savebtn.addEventListener("click", SaveData);

    edit_input_btn.append(edit_input_Cancelbtn, edit_input_Savebtn);

    let showError = document.createElement("p")
    showError.setAttribute("id", "showError")

    edit_input_box.append(edit_input_heading, edit_input_First_Name, edit_input_Last_Name, edit_input_Email, edit_input_Phone_Number, edit_input_btn, showError)

    // Main Box
    Edit_content_box.append(edit_heading_div, hr, edit_input_box);

    Edit_parent_box.append(Edit_content_box)
    body.append(Edit_parent_box);
}

function closeBox() {
    window.location.reload();
}

function SaveData() {
    let first_Name = document.querySelector("#First_Name").value;
    let last_Name = document.querySelector("#Last_Name").value;
    let Email = document.querySelector("#Email").value;
    let Number = document.querySelector("#Number").value;

    userDataArr2.forEach(function (element) {
        if (Number === element.userNumber) {
            element.userNumber = Number;
            element.userName = `${first_Name} ${last_Name}`;
            element.userEmail = Email;

            document.querySelector("#showError").innerText = "Data Saved"
            document.querySelector("#showError").style.color = "Green"
            document.querySelector("input").addEventListener("click", function () {
                document.querySelector("#showError").innerText = "";
            })
        }
        else {
            document.querySelector("#showError").innerText = "Refresh Page & Enter Your Registered Mobile Number";
            document.querySelector("#showError").style.color = "red";
        }
    });
    localStorage.setItem("userData", JSON.stringify(userDataArr2));
}

if(NooOrders < 1){
    document.querySelector("#Noorders").innerText = "No orders have been placed in the past 2 months.";
}
else{
    document.querySelector("#Noorders").innerText = `You Have Ordered ${NooOrders} Meals in last few days.`;
}
function CancelForm() {
    window.location.reload();
}
document.querySelector("#userOrder").addEventListener('click', function () {
    document.querySelector(".popup1").style.display = "block"
})

document.querySelector(".close_button").addEventListener('click', function () {
    document.querySelector(".popup1").style.display = "none"
})

NameChange();
