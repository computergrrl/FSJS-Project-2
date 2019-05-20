/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//global variables
const allStudents = document.getElementsByClassName('student-item cf');
const div = document.querySelector('.page');
const studentsPerPage = 10;
const pageButtons = document.getElementsByTagName('a');
let page = 1;



const showPage = (list, page) => {

  //calculate what the minimum index number is
  let  min = ((page -1) * studentsPerPage);
  //calculate what the maximum index number is
  let max = min + (studentsPerPage -1);

    //loop through the entire list
    for (let i=0; i < list.length; i++) {
        // if index value is between min and max (inclusive) then show
        if (i >= min && i <= max) {
            list[i].style.display = "block";
          //hide index values that don't fall into above range
        }   else {
        list[i].style.display = "none";
        }
    }

}

//function to dynamically append the page links
const appendPageLinks = (list) => {

    const pagesNeeded = Math.ceil(allStudents.length/studentsPerPage);

    const pageDiv = document.createElement('div');
    pageDiv.className = "pagination";

    //create a ul
    const ul = document.createElement('ul');

        /*this loop is to create an "li" tag and an "a" tag for every page needed */
        for (let i = 1; i <= pagesNeeded; i += 1) {

        //create the li and a tags
        const listItem = document.createElement('li');
        //use innerHTML to add a tags to listItem
        listItem.innerHTML = `<a href="#">${i}</a>`;
        //then add an eventListener to each listItem as it's created
        listItem.addEventListener('click' , () => {
            showPage(list, i);
        });





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

showPage(allStudents, 1);
