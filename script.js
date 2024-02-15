


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




        
        const productList = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = count + ". " + title;
        productList.appendChild(p);
        count++;






    })

}

