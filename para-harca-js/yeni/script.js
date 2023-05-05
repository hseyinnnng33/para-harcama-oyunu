const adetBtn = document.querySelectorAll(".al-urun");
const silBtn = document.querySelectorAll(".sil-urun");
const kalanpara = document.querySelector(".kalan-para-span");
const btngorunmez = document.querySelectorAll(".sil-urun1");


let cikar = 0;
let donusturKalan = Number(kalanpara.textContent);
kalanpara.innerHTML = donusturKalan.toLocaleString();

adetBtn.forEach((item)=>{
    item.addEventListener("click", function(){
        let bir =  item.getAttribute("data-id");
        cikar = donusturKalan - Number(bir);
        if(donusturKalan>=bir){
        donusturKalan = cikar;
        kalanpara.innerHTML = `${donusturKalan.toLocaleString()}`;
        let inputAdet = item.parentNode.querySelector('.input-adet');
        inputAdet.innerHTML = Number(inputAdet.innerHTML) + 1;
        if(inputAdet>=0){
        item.classList.remove("active")
        }
        }
        else{
            alert("HAHAHHAAH FAKİR PARAN YETMİYOR")
        }
    })
})

silBtn.forEach((item)=>{
    item.addEventListener("click", function(){
        let bir =  item.getAttribute("data-id");
        cikar = donusturKalan+ Number(bir);   // 1
        donusturKalan = cikar;  // 2
        let inputAdet = item.parentNode.querySelector('.input-adet');
        let adet = parseInt(inputAdet.innerHTML) - 1;
        if(adet>=0){
        kalanpara.innerHTML = `${donusturKalan.toLocaleString()}`;
        inputAdet.innerHTML = adet;
        item.classList.add("active");
        }
        else{
            item.classList.add("active")
        }
    })
})

