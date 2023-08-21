let total = 0;


function handleClickBtn(target){

    const selectedItemContainer = document.getElementById("selected-items");

    const itemName = target.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;
    const li=document.createElement('li')
    li.innerText = itemName;
    console.log(li);

    selectedItemContainer.appendChild(li);

    const price= target.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(" ")[0];
    
    total = parseInt(total) + parseInt(price);

   document.getElementById("total").innerText = total;


}
