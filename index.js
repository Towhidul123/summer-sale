let total = 0;
let discount = 0;
let grand = 0;

function handleClickBtn(target){

    const selectedItemContainer = document.getElementById("selected-items");

    const itemName = target.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;
    const li=document.createElement('li')
    li.innerText = itemName;
    console.log(li);

    selectedItemContainer.appendChild(li);

    const price= target.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(" ")[0];
    
    total = parseInt(total) + parseInt(price);

   document.getElementById("total").innerText = total.toFixed(2);

   document.getElementById("discountPrice").innerText = 0;
   document.getElementById("grandPrice").innerText = total.toFixed(2);


   if(total>200)
   {
      couponApply.removeAttribute('disabled');

      document.getElementById('couponApply').classList.remove('bg-[#11111180]')
      document.getElementById('couponApply').classList.remove('text-black')

      document.getElementById('couponApply').classList.add('bg-[#E527B2]')
      document.getElementById('couponApply').classList.add('text-white')
      document.getElementById('couponApply').classList.add('hover:bg-rose-500')
   }



    if(total>0)
    {
        makePurchase.removeAttribute('disabled');

      document.getElementById('makePurchase').classList.remove('bg-[#11111180]')
      document.getElementById('makePurchase').classList.remove('text-black')

      document.getElementById('makePurchase').classList.add('bg-[#E527B2]')
      document.getElementById('makePurchase').classList.add('text-white')
      document.getElementById('makePurchase').classList.add('hover:bg-rose-500')
    }

  
   
}



function handleDiscount(){

    let couponInput = document.getElementById("promoCode").value;
    
    if(couponInput ==="SELL200")
    {
        discount=total*0.2;
        grand= total-discount;
    }

    else
    {
        discount=0;
        grand=total;
        alert("Enter correct promo code")
    }
    
    console.log(discount, total);
    document.getElementById("discountPrice").innerText = discount.toFixed(2);
    document.getElementById("grandPrice").innerText = grand.toFixed(2);

    couponInput= "";
}


function goHome(){

 total = 0;
 discount = 0;
 grand = 0;

 document.getElementById("total").innerText = 0;

 document.getElementById("discountPrice").innerText = 0;
 document.getElementById("grandPrice").innerText = 0;


let selectedItems = document.getElementById("selected-items");

var child = selectedItems.lastElementChild; 
        while (child) {
            selectedItems.removeChild(child);
            child = selectedItems.lastElementChild;
        }


makePurchase.setAttribute("disabled","disabled");
couponApply.setAttribute('disabled','disabled');

document.getElementById("promoCode").value= '';



      document.getElementById('couponApply').classList.add('bg-[#11111180]')
      document.getElementById('couponApply').classList.add('text-black')

      document.getElementById('couponApply').classList.remove('bg-[#E527B2]')
      document.getElementById('couponApply').classList.remove('text-white')
      document.getElementById('couponApply').classList.remove('hover:bg-rose-500')



      document.getElementById('makePurchase').classList.add('bg-[#11111180]')
      document.getElementById('makePurchase').classList.add('text-black')

      document.getElementById('makePurchase').classList.remove('bg-[#E527B2]')
      document.getElementById('makePurchase').classList.remove('text-white')
      document.getElementById('makePurchase').classList.remove('hover:bg-rose-500')





}


