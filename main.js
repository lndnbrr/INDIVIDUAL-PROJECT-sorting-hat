const allStudents = [
  { identificatiomNumber: 1, studentName: "Harry", house: "Gryffindor" },
  { identificatiomNumber: 2, studentName: "Billy", house: "Hufflepuff" },
  { identificatiomNumber: 3, studentName: "Hagrid", house: "Gryffindor" },
];

const allHouses = [
  { idNum: 1, house: "Gryffindor" },
  { idNum: 2, house: "Hufflepuff" },
  { idNum: 3, house: "Ravenclaw" },
  { idNum: 4, house: "Slytherin" },
];

// ******************** //
// ****** Step 1 ****** //
// ******************** //

// This event listener is waiting for a click found in the element with an id of 'introButton'. When the button is clicked, the element with an id of 'idForSortHat' will disappear, and we add formString to the DOM through the element with an id of 'placeHere'.
document.getElementById("introButton").addEventListener("click", () => {
  const insertToForm = document.getElementById("placeHere");
  document.getElementById("idForSortHat").style.display = "none";
  let formString = ` 
  <div class="mb-3">
  <label for="studentname">What's Your Name?</label>
  <input type ="text" name='name' id="nameOfStudent" required> 
  </div>
    <button type="submit" class="btn btn-primary" id="subButton" onclick = 'submitClicked(event)' >Submit</button>`;
    insertToForm.innerHTML = formString;
});

// ******************** //
// ****** Step 2 ****** //
// ******************** //

// This function holds all of the functions that will occur when we click the submit button in our form that we rendered to the DOM. addCurrentstudents() adds all of the students to the DOM through the div with id 'putAllStudentsHere'. assignRandomHouse() is our function that is a random house generator. createNewStudent() is our function that creates a new student(NOTE: the name will pop up in the console.log but it will appear as undefined on the card).


const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const submitClicked = (e) => {
  e.preventDefault();


  let buttonString = `<div class="houseButtons">
    <button type="button" class="btn btn-dark" id="allHousesButton" onclick = "everyHouse()">All Houses</button>
    <button type="button" class="btn btn-danger" id="gryffindorButton" onclick ="callGryffindorHouse()">Gryffindor</button>
    <button type="button" class="btn btn-warning" id="hufflepuffButton">Hufflepuff</button>
    <button type="button" class="btn btn-primary" id="ravenclawButton">Ravenclaw</button>
    <button type="button" class="btn btn-success" id="slytherinButton">Slytherin</button>

  </div>`;
  document.getElementById("filterButtons").innerHTML = buttonString;


  // const addCurrentstudents = () => {
  //   let domString = "";
  //   for (const student of allStudents) {
  //     domString += `<div class="card">
  //       <div class="card-body">
  //         <p class="card-text">${student.studentName}</p>
  //         <p class="card-text">${student.house}</p>
  //       </div>
  //     </div>`;
  //   };
  //   document.getElementById("putAllStudentsHere").innerHTML = domString;

  // };

  const addCurrentstudents = () => {
    let domString = "";
  
  allStudents.map(function(cv) {

     domString += `<div class="card">
            <div class="card-body">
              <p class="card-text">${cv.studentName}</p>
              <p class="card-text">${cv.house}</p>
            </div>
          </div>`;

   return document.getElementById("putAllStudentsHere").innerHTML = domString;
  });
}


  const assignRandomHouse = () => {
    let randomNumGen = Math.floor(Math.random() * allHouses.length);
    return allHouses[randomNumGen].house;
  };


  const createNewStudent = () => {
    const newStudent = {
      identificatiomNumber: allStudents.length + 1,
      studentName: document.getElementById("nameOfStudent").value,
      house: assignRandomHouse(),
    };
    allStudents.push(newStudent);

    addCurrentstudents(allStudents);

  };
  createNewStudent();

  document.querySelector("form").reset();

  console.log(allStudents);



  // THE CODE ABOVE WORKS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  const filter = (studentsArray, houseType) => {
    const studentsFiltered = [];
  
  
    for (const studentObj of studentsArray) {
      if (studentObj.house === houseType) {
        studentsFiltered.push(studentObj);
      }
    }
  
    return studentsFiltered;
  };
  
// THIS FILTER SET UP FUNCTION WORKS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



  const everyHouse = () => {
  
      return addCurrentstudents(allStudents);
    };
  
  console.log(everyHouse());
  
  
  
  const callGryffindorHouse = () => {
      const gryffindorOnly = filter(allStudents, "Gryffindor");
    return gryffindorOnly;
  };
   console.log(callGryffindorHouse())

};
