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

        /* this loop is to create an "li" tag and an "a" tag for every page needed */
        for (let i = 1; i <= pagesNeeded; i += 1) {

        //create the li and a tags
        const listItem = document.createElement('li');
        //use innerHTML to add a tags to listItem
        listItem.innerHTML = `<a href="#">${i}</a>`;
        //then add an eventListener to each listItem as it's created
        listItem.addEventListener('click' , (event) => {
            //call function to remove the active class from all the buttons
            removeActiveClass();

            //attach showPage function to each button
            showPage(list, i);
            //set button class name to "active"
            event.target.className = 'active';

        });


        //append each set of li & a tags to the ul
        ul.appendChild(listItem);

        }
    //append the ul to the newly created div
    pageDiv.appendChild(ul);


    //return the whole div
    return pageDiv;

}


function removeActiveClass() {
    let paginationLinks = document.querySelectorAll(".pagination li a");

    for(let link of paginationLinks) {
        link.classList.remove("active");

    }
}

function searchStudents() {
      // Declare variables
      const input = document.getElementById('searchBox');
       ul = document.querySelector('.student-list');
       li = ul.getElementsByTagName('li');


/* The next 5 lines of code I borrowed from
https://www.w3schools.com/howto/howto_js_filter_lists.asp
*/
      let filter = input.value.toUpperCase();
      for (i = 0; i < li.length; i++) {
      span = li[i].getElementsByTagName("span")[0];
      txtValue = span.textContent || span.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
  }
}

//use appendChild to call the appendPageLinks function
div.appendChild(appendPageLinks(allStudents));
//by default only show the first page on initial page load
showPage(allStudents, 1);
