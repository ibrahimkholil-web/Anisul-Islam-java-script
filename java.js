console.clear();

const clickerId = document.querySelector(".click");

 clickerId.addEventListener("click" , function(){
    //  console.log("click");
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.innerHTML);
    // console.log(e.target.textContent); 
});
// clickerId.addEventListener("click" , function(){
//     console.log("click is occured");
// });

// clickerId.addEventListener("dblclick" , function(){
//     console.log("dblclick is occured ");
// });
// clickerId.addEventListener("mousedown" , function(){
//     console.log("mousedown is occured");
// });
// clickerId.addEventListener("mouseup" , function(){
//     console.log("mouseup is occured");
// });
// clickerId.addEventListener("mouseenter" , function(){
//     console.log("mouseenter is occured");
// });
// clickerId.addEventListener("mouseleave" , function(){
//     console.log("mouseleave is occured");
// });
// clickerId.addEventListener("mouseover" , function(){
//     console.log("mouseover is occured");
// });
// clickerId.addEventListener("mousemove" , function(e) {
//     // console.log("mousemove is occured");
//     // console.log("clientX = " + e.clientX + "clientY = " + e.clientY) ;
//     console.log("offsetX = " + e.offsetX + " offsetY = " + e.offsetY) ;
// });

const buttons = document.querySelectorAll(".btn");

Array.from(buttons).map((button) => {
    button.addEventListener("click", function(e){
        console.log(e.target.innerText)
    })
})

// key boardEven lessner

const key = document.querySelector("textarea");

key.addEventListener("keyup", function (e){
    console.log(e.key);
});

// focus 
const fo = document.querySelector(".focus");
fo.addEventListener("blur", function(e){
    //    fo.style.backgroundColor = "transparent"
    // fo.style.padding = "0"

    // console.log(e.target.value);
    fo.value = e.target.value.toUpperCase();
});
fo.addEventListener("focus", function(){
    // console.log("focus is occured ");
    // fo.style.backgroundColor = "red"
    // fo.style.padding = "5px"
    // console.log("focus is occured");
});
// fo.addEventListener("focusin", function(){
//     console.log("focusin is occured ");
// });
// fo.addEventListener("focusout", function(){
//     console.log("focusout is occured ");
// });



// clipbord eveb

const clip = document.querySelector(".clipboart");
clip.addEventListener("copy", function(){
    console.log('You have copy');
});
clip.addEventListener("cut", function(){
    console.log('You have cut');
});
clip.addEventListener("paste", function(){
    console.log('You have paste');
});



// drage 
const div1 =  document.querySelector(".div1");
const drage1 = document.querySelector("#drage1");

drage1.addEventListener("dragstart", function(e){
    e.dataTransfer.setData("Text", e.target.id);
});

div1.addEventListener("dragover", function(e){
    e.preventDefault();
});

div1.addEventListener("drop", function(e){
    let newId = e.dataTransfer.getData("Text");
    div1.appendChild(document.getElementById(newId));
    e.preventDefault();
})




