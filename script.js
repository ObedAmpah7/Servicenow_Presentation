// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var challenges = document.getElementById("challenges");
var experiences = document.getElementById("experience");
var modalHeader = document.getElementById("modal-header");
var modalParagraph = document.getElementById("modal-p");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close");
var closeModal = document.querySelector("#close");
var modalContent = document.getElementById("modal-con");

// When the user clicks on the button, open the modal
challenges.onclick = function() {
  modal.style.display = "block";
  modalHeader.innerText = "Challenges" ;
  modalParagraph.innerText = `All acitives on the platform are done online and with a slow internet working on it can be frustrating.

                                The use of text only slows down the learning pace as I am able to grasp concept faster if I can visualize it.`                       
}
experience.onclick = function() {
    modal.style.display = "block";
    modalHeader.innerText = "Learning Experiences";
    modalParagraph.innerText =`I have learnt how to plan and structure code in other to implement logics sequencially.

                                Exercises are well structured with clear instruction making it simple to follow and understand.
                                `
    console.log(modalParagraph);
}
// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}