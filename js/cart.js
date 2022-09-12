let flag2 = JSON.parse(localStorage.getItem("flag_value"));

if (flag2 === true) {
    document.querySelector("#signIn_index").innerText = "";
    let a = document.createElement("a");
    a.setAttribute("href", "account.html")
    a.innerText = "Account"
    document.querySelector("#signIn_index").append(a);
}

let obj = JSON.parse(localStorage.getItem("CartData")) || [];
let count = 0;
// document.querySelector('#length').innerText=obj.length;
let data = document.getElementById('length').innerText = obj.length;
function display(obj) {
    let mainDiv = document.querySelector('.mainContainer');
    obj.forEach(function (element, index) {
        let div1 = document.createElement('div');
        div1.setAttribute('class', 'cards');
        let div2 = document.createElement('div');
        div2.setAttribute('class', 'cardsLeft')
        let div3 = document.createElement('div');
        div3.setAttribute('class', 'logo');
        let img = document.createElement('img');
        img.setAttribute('src', element.Image)
        div3.append(img);
        div2.append(div3);
        // div1.append(div2);
        let div4 = document.createElement('div');
        div4.setAttribute('class', 'cardName')
        let div5 = document.createElement('div');
        div5.innerText = element.Name;
        let div6 = document.createElement('div');
        let span = document.createElement('span');
        span.innerText = element.Varity;
        let span2 = document.createElement('span');
        span2.innerText = 'Remove item';
        span2.addEventListener("click", function () {
            removeCartData(element, index)
        })
        div6.append(span, span2);
        div4.append(div5, div6)
        // div1 2 work 
        let div7 = document.createElement('div');
        div7.setAttribute('class', 'right')
        let span3 = document.createElement('span');
        span3.innerHTML = '<img src="https://online.kfc.co.in/static/media/cart-minus-disabled.77dd1768.svg" alt="">'
        let span4 = document.createElement('span');
        span4.innerHTML = '1'
        let span5 = document.createElement('span');
        span5.innerHTML = '<img src="https://online.kfc.co.in/static/media/cart-plus.81d0f379.svg" alt="">';
        let span6 = document.createElement('span')
        span6.setAttribute('class', 'total');
        span6.innerText = element.Price;
        div7.append(span3, span4, span5, span6);
        div1.append(div2, div4, div7);
        mainDiv.append(div1);
        span3.addEventListener('click', function () {
            console.log("hello")
            let count = +span4.innerText;
            let price = +element.Price;

            if (count == 1) {
                count = 1;
            }
            else {
                count--;
            }

            span4.innerText = count;
            span6.innerText = (price * count).toFixed();
            total();

        })
        span5.addEventListener('click', function () {
            let count = +span4.innerText;
            let price = +element.Price;
            count++;
            span4.innerText = count;
            span6.innerText = (price * count).toFixed();
            total();
        })
    });
}

function total() {
    let count = 0;
    let totalValue = document.querySelectorAll('.right span:last-child');
    console.log(totalValue)
    totalValue.forEach(e => {
        count += Number(e.innerText);
    })
    // let sub=+document.getElementById('subtotal').innerText;
    console.log(count)
    document.getElementById('subtotal').innerText = count.toFixed();
    let last = ((count / 100) * 10).toFixed();
    document.querySelector('#gst').innerText = last;
    showAll(last, count)

}


function showAll(last, count) {
    console.log(last, count)
    let chek = document.getElementById('check');
    let check1 = document.getElementById('check1');
    let total = (Number(last) + count + 11)

    console.log(total)
    if (chek.checked == true && check1.checked == true) {
        document.getElementById('totalSum').innerText = total.toFixed();
    }
    else if (check1.checked) {
        document.getElementById('totalSum').innerText = (Number(last) + count + 5).toFixed();
    }
    else if (check.checked) {
        document.getElementById('totalSum').innerText = (Number(last) + count + 6).toFixed();
    }
    else {
        document.getElementById('totalSum').innerText = (Number(last) + count).toFixed();

    }
    // console.log(check1.checked , chek.checked)
}

document.getElementById('check').addEventListener('change', function () {
    total();
})
document.getElementById('check1').addEventListener('change', function () {
    total();
})
document.getElementById('display').addEventListener('click', function () {
    document.getElementById('dis').style.display = 'none';
    document.querySelector('body').style.filter = ''
})
display(obj);
document.getElementById('disblock').addEventListener('click', function () {
    document.getElementById('dis').style.display = 'block';
    document.querySelector('body').style.filter = 'blur(1px);'
})

function removeCartData(element, index) {
    obj.splice(index, 1);
    localStorage.setItem("CartData", JSON.stringify(obj));
    window.location.reload();
}


document.querySelector("#applyCode").addEventListener("click", promoCode);
function promoCode() {
    let totalPromp = + document.querySelector("#totalSum").innerText;
    if (document.querySelector("#promo").value === "masai30") {
        if (count == 0) {
            document.querySelector("#totalSum").innerText = totalPromp * 0.3
            count++;
        }
        else if (count != 0) {
            return;
        }
    }
    else {
        alert('Coupon code is masai30')
    }
}

document.querySelector(".checkout").addEventListener("click", function () {
    if (flag2 === true) {
        window.location.href = "debitcard.html"
    }
    else{
        window.location.href = "signin.html"
    }
})
total();