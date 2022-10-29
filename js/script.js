let schowcaseImg = document.querySelector('.image');
let cup1 = document.getElementById('cup1-id');
let cup2 = document.getElementById('cup2-id');
let cup3 = document.getElementById('cup3-id');
let cup4 = document.getElementById('cup4-id');
let select = document.getElementById('select');
let itemName = document.getElementById('item-name');
let btn = document.getElementById('btn');
let getItem = document.getElementById('get-item');
let quantity = document.querySelector('.quantity');
let prodChoice = document.querySelector('.prod-choice');
let formOrder = document.querySelector('.form-order');
let orderForm = document.querySelector('.order-form');
let selDisable = document.querySelector('select option:first-of-type');

let imgArr = ['images/cup1.jpg', 'images/cup3.jpg', 'images/cup6.jpg'];
let imgLoop = 0;

function setImg() {
    schowcaseImg.setAttribute('src', imgArr[imgLoop]);
    imgLoop++;

    if (imgLoop >= imgArr.length) {
        imgLoop = 0;
    }

}

setInterval(setImg, 1000);


// Toggle
const bar = document.querySelector('.bars');
const menu = document.querySelector('.menu');
const navSmall = document.querySelector('.nav-small');

bar.addEventListener('click', () => {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        bar.innerHTML = '<i class="fa fa-close fa-2x"></i>';
        navSmall.style.display = 'block';
    } else {
        bar.innerHTML = '<i class="fa fa-bars fa-2x"></i>';
        navSmall.style.display = 'none';
    }
});

// Swipe Animation
const animation = document.querySelectorAll('.anim');
window.addEventListener('scroll', runAnim);

function runAnim() {
    const triggerBottom = window.innerHeight / 5 * 4;
    animation.forEach(anim => {
        const animTop = anim.getBoundingClientRect().top;

        if (animTop < triggerBottom) {
            anim.classList.add('show');
        } else {
            anim.classList.remove('show');
        }
    });
}
runAnim();


// Order Products
cup1.addEventListener('click', runEvent);
cup2.addEventListener('click', runEvent1);
cup3.addEventListener('click', runEvent2);
cup4.addEventListener('click', runEvent3);
orderForm.addEventListener('submit', placeOrder);


select.innerText = '$Price';
calVal = price => {
    if (quantity.value >= 1) {
        select.innerText = '$' + quantity.value * price;
    }

    else {
        select.innerText = 0;
    }
}
// calVal(price);

function runEvent() {
    itemName.value = 'Espresso';
    if (itemName.value == 'Espresso') {
        calVal(120);
    }

}

function runEvent1(e) {
    itemName.value = 'Latte';
    if (itemName.value == 'Latte') {
        calVal(100);
    }

}
function runEvent2(e) {
    itemName.value = 'Cappuccino';
    if (itemName.value == 'Cappuccino') {
        calVal(200);
    }
}
function runEvent3(e) {
    itemName.value = 'Caffe mocha';
    if (itemName.value == 'Caffe mocha') {
        calVal(150);
    }
}

function placeOrder(e) {
    e.preventDefault();
    if (itemName.value == 'Espresso') {
        calVal(120);
    } else if (itemName.value == 'Latte') {
        calVal(100);
    } else if (itemName.value == 'Cappuccino') {
        calVal(200);
    } else if (itemName.value == 'Caffe mocha') {
        calVal(150);
    }
    else {
        select.innerText = 'Please Select an Item!';
    }

    if (quantity.value === '' || quantity.value === null) {
        select.innerText = 'Please Enter order quantity.';
    }

    if (itemName.value !== '' && quantity.value !== '') {
        if (quantity.value > 0 && itemName.value !== selDisable.value) {
            const li = document.createElement('li');
            const li1 = document.createElement('li');
            const li2 = document.createElement('li');
            const headd = document.createElement('h1');
            const link = document.createElement('button');
            const ord = document.createElement('button');
            ord.id = 'btn-hide';
            ord.classList = 'btn';
            headd.id = 'headd';
            link.classList = 'btn';
            li.classList = 'get-item-li';
            li1.classList = 'get-item-li';
            li2.classList = 'get-item-li';
            link.appendChild(document.createTextNode('Cancel Order'));
            li.appendChild(document.createTextNode(`Item Name - ${itemName.value}`));
            li1.appendChild(document.createTextNode(`  Quantity - ${quantity.value}`));
            li2.appendChild(document.createTextNode(` Price = ${select.innerText}`));
            headd.appendChild(document.createTextNode('Are you sure you want to Place order for'));
            ord.appendChild(document.createTextNode('Order'));
            getItem.appendChild(headd);
            getItem.appendChild(li);
            getItem.appendChild(li1);
            getItem.appendChild(li2);
            getItem.appendChild(link);
            getItem.appendChild(ord);

            // Order
            ord.addEventListener('click', () => location.href = 'order.html')


            // Remove Order 
            link.addEventListener('click', reMove);

            function reMove() {
                li.style.display = 'none';
                li1.style.display = 'none';
                li2.style.display = 'none';
                link.style.display = 'none';
                ord.style.display = 'none';
                headd.style.display = 'none';
            }

        }
    }
}



