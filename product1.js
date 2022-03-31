const productImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelector(".image-slider");
let activeImageSlide = 0;


productImages.forEach((item, i) => {
    item.addEventListener('mouseover', () => {
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})




const decreaseNumber = () =>{
    var itemval = document.getElementById('textbox');
    if(itemval.value <= 0){
        itemval.value = 0;
    }else{
        itemval.value = parseInt(itemval.value) - 1;
    }
}
const increaseNumber = () =>{
    var itemval = document.getElementById('textbox');
    if(itemval.value >= 5){
        itemval.value = 5;
        alert("maximum 5 allow");
        itemval.style.background = 'red';
        itemval.style.color = '#fff';
    }else{
        itemval.value = parseInt(itemval.value) + 1;
    }
}






