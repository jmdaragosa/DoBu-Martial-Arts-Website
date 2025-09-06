function openInstructorDetails(instructor) {
    const instructorCard = instructor.closest(".instructor-card")
    const instructorDetails = instructorCard.querySelector(".instructor-details");

   
    if (instructorDetails.style.display === 'none' || instructorDetails.style.display === '') {
        instructorDetails.style.display = 'block'; 
    } else {
        instructorDetails.style.display = 'none'; 
    }
}
function toggleMenu() {
    document.querySelector(".site-nav ul").classList.toggle("active");
    document.querySelector(".hamburger-menu").classList.toggle("active");
}

document.getElementById("signupButton").addEventListener("click", function () {
    const formContainer = document.getElementById("signupForm");
  
    if (formContainer.classList.contains("active")) {
      formContainer.classList.remove("active");
    } else {
      formContainer.classList.add("active");
      window.scrollTo(0, formContainer.offsetTop);
    }
  });
  
  document.querySelector("#signupForm form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const membershipOption = document.getElementById("membership").value;
    const fullName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    alert(
      `Thank you, ${fullName}!\n\nYou have successfully signed up for DoBu Martial Arts. A confirmation email will be sent to ${email}.`
    );
  
    this.reset(); 
    document.getElementById("signupForm").classList.remove("active");
  });