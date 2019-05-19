/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//global variables
const allStudents = document.getElementsByClassName('student-item cf');
const div = document.querySelector('.page');
let pagesNeeded = Math.ceil(allStudents.length/10);
const studentsPerPage = 10;
const pageButtons = document.getElementsByTagName('a');
let page = 1;



const showPage = (list, page) => {

  let min = '';
    // set a min number to figure out the lowest index number to show
    if (page ===1) {
       min = (page -1);
    }  else {
        min = (page * 10);
      }
    // set a max number to be the highest index number to show
    let max = min + 9;


    for (let i=0; i < list.length; i++) {

          if (i >= min && i <= max) {
              list[i].style.display = "block";

          }   else {
          list[i].style.display = "none";
          }
    }

}

//function to dynamically append the page links
const appendPageLinks = (list) => {

    const pageDiv = document.createElement('div');
    pageDiv.className = "pagination";

    //create a ul
    const ul = document.createElement('ul');

        /*this loop is to create an "li" tag and an "a" tag for every page needed */
        for (let i = 1; i <= pagesNeeded; i += 1) {

        //create the li and a tags
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#" class="active">${i}</a>`;





        //append each set of li & a tags to the ul
        ul.appendChild(listItem);

        }
    //append the ul to the newly created div
    pageDiv.appendChild(ul);


    //return the whole div
    return pageDiv;

}




//use appendChild to call the appendPageLinks function
div.appendChild(appendPageLinks(allStudents));

    for (i =0; i < (pagesNeeded -1); i++) {
      pageButtons[i].addEventListener('click' , () => {
        showPage(allStudents, i);
      });
}
 // pageButtons[2].addEventListener('click' , () => {
 //   showPage(allStudents, 3);
 // });
