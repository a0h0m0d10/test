let classroom = document.querySelector("#classroom");
let sub3 = document.querySelector("#sub3");
let main3 = document.querySelector("#main3");
let geology = document.querySelector("#geology");
let biology3 = document.querySelector("#biology3");




let qu = document.querySelector("#qu");
let qu2 = document.querySelector("#qu2");

let les = document.querySelector("#les");
let les2 = document.querySelector("#les2");



let three = document.querySelector("#three");
let lessongeology = document.querySelector("#lessongeology");

three.addEventListener("click",() => {
    classroom.style.display = "none";
    sub3.style.display = "block";

});

geology.addEventListener("click",() => {
    sub3.style.display = "none";
    lessongeology.style.display = "block";

});

biology3.addEventListener("click",() => {
    sub3.style.display = "none";
    lessongeology3.style.display = "block";

});


les.addEventListener("click",() => {
    main3.style.display = "none";
    qu.style.display = "block";

});

les2.addEventListener("click",() => {
    main3.style.display = "none";
    qu2.style.display = "block";

});