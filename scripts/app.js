const studentFullName= 'Mohd.Saif Malam';
const studentNumber= 1162507;
const name1= `${studentFullName}-${studentNumber}`;
console.log(name1);
const headerContent= document.querySelector(`h1`);
headerContent.innerHTML=name1;
headerContent.classList.add("headingPrimary");