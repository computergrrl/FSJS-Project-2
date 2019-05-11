/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/

const li = document.getElementsByClassName('student-item cf');




//const showPage = () => {

    // for (let i=0; i <= li.length; i++) {
    //
    //       if (i == 3) {
    //           li[i].style.display = "block";
    //
    //       }   else {
    //       li[i].style.display = "none";
    //       }
    // }

//}

//make a
const div = document.querySelector('.page');


const appendPageLinks = (list) => {

    const pageDiv = document.createElement('div');
    pageDiv.className = "pagination";

    //create a ul
    const ul = pageDiv.createElement('ul');

    //create an li
    const listItem = ul.createElement('li');

    /*create temporary link tag for li (this will not be how I do this
    and is just for the sake of testing this to see if it works)*/
    listItem.textContent = '<a href="#">Click me</a>';

    //append the ul to pageDiv
    pageDiv.appendChild(ul);

    //create a loop that makes a button for every 10 names in the list
          for (let i=0; i < list.length; i += 10) {

              ul.appendChild(listItem);

          }

    return pageDiv;

}


div.appendChild(appendPageLinks(li));


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




/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.
