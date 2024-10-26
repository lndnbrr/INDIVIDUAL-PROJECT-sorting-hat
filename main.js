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
// submit create student
// function to take student's name, house and id. This function needs to return an object to push onto the allStudents array.

// ******************** //
// ****** Step 1 ****** //
// ******************** //

// This event listener is waiting for a click found in the element with an id of 'introButton'. When the button is clicked, the element with an id of 'idForSortHat' will disappear, and we add formString to the DOM through the element with an id of 'placeHere'.
document.getElementById("introButton").addEventListener("click", () => {
  const insertToDiv = document.getElementById("placeHere");
  document.getElementById("idForSortHat").style.display = "none";
  let formString = `<form>
  <div class="mb-3">
  <label for="studentname">What's Your Name?</label>
  <input type ="text" name='name' id="nameOfStudent">
  </div>
    <button type="submit" class="btn btn-primary" id="subButton" onclick = 'submitClicked(event)' >Submit</button>
  </form>`;
  insertToDiv.innerHTML = formString;
});

// ******************** //
// ****** Step 2 ****** //
// ******************** //

// This function holds all of the functions that will occur when we click the submit button in our form that we rendered to the DOM. addCurrentstudents() adds all of the students to the DOM through the div with id 'putAllStudentsHere'. assignRandomHouse() is our function that is a random house generator. createNewStudent() is our function that creates a new student(NOTE: the name will pop up in the console.log but it will appear as undefined on the card).
const submitClicked = (e) => {
  e.preventDefault();

  const addCurrentstudents = () => {
    let domString = "";
    for (const student of allStudents) {
      domString += `<div class="card">
        <div class="card-body">
          <p class="card-text">${student.studentName}</p>
          <p class="card-text">${student.house}</p>
        </div>
      </div>`;
    }

    document.getElementById("putAllStudentsHere").innerHTML = domString;
  };

  const assignRandomHouse = () => {
    let randomNumGen = Math.floor(Math.random() * allHouses.length);
    return allHouses[randomNumGen].house;
  };

  // const form = document.querySelector('form')

  const createNewStudent = () => {
    const newStudent = {
      identificatiomNumber: allStudents.length + 1,
      studentName: document.getElementById("nameOfStudent").value,
      house: assignRandomHouse(),
    };
    allStudents.push(newStudent);

    addCurrentstudents(allStudents);

    // form.reset();
  };
  createNewStudent();
  console.log(allStudents);
};
