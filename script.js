


const cards = document.querySelectorAll('.card');
let count = 1;
let total = 0;



for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    
    element.addEventListener('click', function() {
        const title = element.querySelector('h3').innerText;
        const price = parseFloat(element.querySelector('span').innerText.split(' ')[1]);


        const totalPrice = document.getElementById('totalPrice');
        total += price
        totalPrice.innerText = total;




        if( total >= 200) {

            const couponCode = document.getElementById('apply-btn');
            couponCode.addEventListener('click', function() {
                const inputValue = document.getElementById('input-field').value.toUpperCase();
                const input = inputValue.split(' ').join('');

                if( input === "SELL200"){
                    const discountValue = document.getElementById('discountPrice');
                    const grandTotal = document.getElementById('total');
                    const discount = total * 0.2;
                    discountValue.innerText = discount;
                    const currentTotal = total - discount;
                    console.log(currentTotal);

                } else {
                    // console.log('coupon code not match')
                }
            })


        }
        
        const productList = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = count + ". " + title;
        productList.appendChild(p);
        count++;






    })

}

