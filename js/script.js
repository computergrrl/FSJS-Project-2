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

    console.log(min);
    console.log(max);

    for (let i=0; i <= list.length; i++) {

          if (i >= min && i <= max) {
              list[i].style.display = "block";

          }   else {
          list[i].style.display = "none";
          }
    }

}


const appendPageLinks = (list) => {

    const pageDiv = document.createElement('div');
    pageDiv.className = "pagination";

    //create a ul
    const ul = document.createElement('ul');


        for (let i = 1; i <= pagesNeeded; i += 1) {

        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#">${i}</a>`;
        ul.appendChild(listItem);

        }

    pageDiv.appendChild(ul);



    return pageDiv;

}


div.appendChild(appendPageLinks(allStudents));

showPage(allStudents, 3);


/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/
