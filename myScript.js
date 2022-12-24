
let openDots = document.querySelector(".dots")
    openDots.addEventListener("click", function(e) {
    console.log(dots.classList)
    openDots.classList.toggle("open");
});

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//  Api
// //autocomplite
// const options = {
// method: 'GET',
// headers: {
//     'X-RapidAPI-Key': '86a7651479mshb0e0b0f6978676bp14675ajsn26a50bebdd10',
//     'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
// }
// };

// fetch('https://yummly2.p.rapidapi.com/feeds/auto-complete?q=chicken%20soup', options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));
// //search
// const options = {
// method: 'GET',
// headers: {
//     'X-RapidAPI-Key': '86a7651479mshb0e0b0f6978676bp14675ajsn26a50bebdd10',
//     'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
// }
// };

// fetch('https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=18&maxTotalTimeInSeconds=7200&q=chicken%20soup&allowedAttribute=diet-lacto-vegetarian%2Cdiet-low-fodmap&FAT_KCALMax=1000', options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));
// //list
// const options = {
// method: 'GET',
// headers: {
//     'X-RapidAPI-Key': '86a7651479mshb0e0b0f6978676bp14675ajsn26a50bebdd10',
//     'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
// }
// };

// fetch('https://yummly2.p.rapidapi.com/feeds/list?limit=24&start=0', options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));
// //similatiries
// const options = {
// method: 'GET',
// headers: {
//     'X-RapidAPI-Key': '86a7651479mshb0e0b0f6978676bp14675ajsn26a50bebdd10',
//     'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
// }
// };

// fetch('https://yummly2.p.rapidapi.com/feeds/list-similarities?limit=18&start=0&id=15-Minute-Baked-Salmon-with-Lemon-9029477&apiFeedType=moreFrom&authorId=Yummly', options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));
// //tag-list
// const options = {
// method: 'GET',
// headers: {
//     'X-RapidAPI-Key': '86a7651479mshb0e0b0f6978676bp14675ajsn26a50bebdd10',
//     'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
// }
// };

// fetch('https://yummly2.p.rapidapi.com/tags/list', options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));
// //categories
// const options = {
// method: 'GET',
// headers: {
//     'X-RapidAPI-Key': '86a7651479mshb0e0b0f6978676bp14675ajsn26a50bebdd10',
//     'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
// }
// };

// fetch('https://yummly2.p.rapidapi.com/categories/list', options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));

// //reviewList

// const options = {
// method: 'GET',
// headers: {
//     'X-RapidAPI-Key': '86a7651479mshb0e0b0f6978676bp14675ajsn26a50bebdd10',
//     'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
// }
// };

// fetch('https://yummly2.p.rapidapi.com/reviews/list?offset=0&globalId=a8d6747a-bfaa-46a7-92fb-892e3f76b264&limit=20', options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));

