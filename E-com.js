let icon = document.querySelector(".icon")
let ul = document.querySelector("ul")

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showdata");
    
    if(ul.className == "showdata"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className= "fa-solid fa-bars";
    }
})

let shops = document.getElementById("shops");
let reviewss = document.getElementById("reviewss");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

shops.addEventListener("click", ()=>{
    shops.style.color="aqua"
    reviews.style.color="white"
    blogs.style.color="white"
    contacts.style.color="white"
   

})
reviewss.addEventListener("click", ()=>{
    shops.style.color="white"
    reviewss.style.color="aqua"
    blogs.style.color="white"
    contacts.style.color="white"
    

})
blogs.addEventListener("click", ()=>{
    shops.style.color="white"
    reviewss.style.color="white"
    blogs.style.color="aqua"
    contacts.style.color="white"
    // reviews.style.color="white"

})
contacts.addEventListener("click", ()=>{
    shops.style.color="white"
    reviewss.style.color="white"
    blogs.style.color="white"
    contacts.style.color="aqua"
    // reviews.style.color="white"

})

// card js

let crd = document.querySelectorAll(".crd");
let itemPage = document.querySelector(".itempage")
let container = document.querySelector(".container");
let itemImg = document.getElementById("itempage");
let buyBtn = document.getElementById("buyBtn");

console.log(crd);


    crd.forEach(function(curValue){
         curValue.addEventListener("click", function(){
            itemPage.style.display="flex";
            container.style.display="none";

            let imgSrc = curValue.firstElementChild.src ;
            itemImg.src=imgSrc;
             
            let buyText =  document.querySelector(".buyText");
            let buyBtn = document.getElementById("buyBtn");

            buyBtn.addEventListener("click", function(){
                document.querySelector(".buyPage").style.display="block";
                buyText.innerHTML=`
                <h3>Enter Details :</h3>
                <input type="text" placeholder="Enter Your Name" id="name"> <br>
                <input type="text" placeholder="Enter Your Address" id="address"> <br>
                <input type="text" placeholder="Enter Your Mobile Number" id="num"> <br>
                <h3>Payment Option :</h3>
                <select>
                    <option value="Google-Pay">Google-Pay</option>
                    <option value="Phone-Pay">Phone-Pay</option>
                    <option value="Bharat-Pay">Bharat-Pay</option>
                    <option value="Cash-on-Delivery">Cash-on-Delivery</option>
    
                </select> <br>
                
    
                `
                
               let button =  document.createElement("button");
               button.innerText="Submit";
               buyText.appendChild(button);

               button.addEventListener("click", function(){
               let name = document.getElementById("name");

               if(name.value == "" && address.value == "" && num.value == ""){
                alert("Please Enter Detail")
               }else{
                alert("Your Response Recorded");
                document.querySelector(".buyPage").style.display="none";

               }
               })
                 
                let cross = document.querySelector(".cross");
                cross.addEventListener("click", function(){
                document.querySelector(".buyPage").style.display="none";

                }
                )
            })

             
         })

    })


     // connect

     function connect(){
        let email = document.getElementById("email");
        let num = document.getElementById("number");
        if(email.value == "" && num.value == ""){
            alert("Fill Details")
        }else{
            alert("Thanks For Connecting")
        }

    }