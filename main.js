const allStudents = [
  {identificatiomNumber : 1,
    studentName : "Harry",
    house : ""
  },
  {identificatiomNumber : 2,
    studentName : "Billy",
    house : ""
  },
  {identificatiomNumber : 3,
    studentName : "Hagrid",
    house : ""
  }
]

// ******************** //
// ****** Step 1 ****** //
// ******************** //


// This event listener is waiting for a click found in the element with an id of 'introButton'. When the button is clicked, the element with an id of 'idForSortHat' will disappear, and we add formString to the DOM through the element with an id of 'placeHere'.
document.getElementById('introButton').addEventListener('click', ()=>{
  const insertToDiv = document.getElementById('placeHere');
  document.getElementById("idForSortHat").style.display = "none";
  let formString = `<form>
  <div class="mb-3">
  <label for="studentname">What's Your Name?</label>
  <input type ="text" id="nameOfStudent">
  </div>
  <button type="submit" class="btn btn-primary" id="subButton">Submit</button>
  </form>`;
  insertToDiv.innerHTML = formString;
});
