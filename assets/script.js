// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

let yourName = "Melidia Smith" 

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = (gb + cc + sugar)

// selecting the element with an id of credit
//const credit = document.querySelector('#credit')

// Code to update name display
credit.textContent = `Created by ${yourName}`



const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

// Event listener for clicks on the "+" button for Gingerbread cookies

let gbCell = document.querySelector("#qty-gb");

//code to be run when the "+" button for "Gingerbread" is clicked

gbPlusBtn.addEventListener('click', function() {
    let gb = parseInt(gbCell.textContent);
    gb = gb + 1;
    gbCell.textContent = gb;

    let totalCell = document.querySelector("#qty-total");
    totalCell.textContent = (gb +cc + sugar)
  
})

//code to be run when the "-" button for "Gingerbread" is clicked

gbMinusBtn.addEventListener('click', function(){
    let gb = parseInt(gbCell.textContent);
    gb = gb - 1;
    gbCell.textContent = gb;
    
    let totalCell = document.querySelector("#qty-total");
    totalCell.textContent = (gb +cc + sugar);

})


// TODO: Hook up event listeners for the rest of the buttons

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

// Event listener for clicks on the "+" button for Chocolate Chip cookies

let ccCell = document.querySelector("#qty-cc");

//code to be run when the "+" button for "Chocolate Chip" is clicked

ccPlusBtn.addEventListener('click', function() {
    let cc = parseInt(ccCell.textContent);
    cc = cc + 1;
    ccCell.textContent = cc;

    let totalCell = document.querySelector("#qty-total");
    totalCell.textContent = (gb + cc+ sugar);
   
})

//code to be run when the "-" button for "Chocolate Chip" is clicked

ccMinusBtn.addEventListener('click', function(){
    let cc = parseInt(ccCell.textContent);
    cc = cc - 1;
    ccCell.textContent = cc;

    let totalCell = document.querySelector("#qty-total");
    totalCell.textContent = (gb +cc + sugar);
})

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Event listener for clicks on the "+" button for Sugar cookies

let sugarCell = document.querySelector("#qty-sugar");

//code to be run when the "+" button for "Sugar" is clicked

sugarPlusBtn.addEventListener('click', function() {
    letsugar = parseInt(sugarCell.textContent);
    sugar = sugar + 1;
    sugarCell.textContent = sugar;

    let totalCell = document.querySelector("#qty-total");
    totalCell.textContent = (gb + cc+ sugar);
   
})

//code to be run when the "-" button for "Sugar" is clicked

sugarMinusBtn.addEventListener('click', function(){
    let sugar = parseInt(sugarCell.textContent);
    sugar = sugar - 1;
    sugarCell.textContent = sugar;

    let totalCell = document.querySelector("#qty-total");
    totalCell.textContent = (gb +cc + sugar);
})

