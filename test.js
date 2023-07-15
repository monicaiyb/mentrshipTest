
const loginValidation =()=>{
    const userName=document.getElementById("userName");
    const errorName=document.getElementById("error_user");
      
    // this condition checks if the username format entered by the user matches with what we specicified.
    if (userName === '' || userName == null){
        userName.style.border="1px solid red";
        errorName.innerHTML = "Sorry your username is wrong!";
        errorName.style.color="red";
        return false;
    }
}
function validate() {

    var A = document.getElementById("userName").value;
    if (A !== /^[a-zA-Z]/) {
        alert("enter letters only");
        return false;
    }
}
function Validate ()  {
    // picking input fields with their names or IDs
    let firstName =  document.getElementById('userName').value;
     
    console.log("Firstname" ,firstName)
    // picking error fields
    let firstNameError = document.getElementById("errorName")
 
// validating full name
// validating for emptiness
if (firstName !==  /^[a-zA-Z]/){
    console.log("hello")
    
    firstNameError.innerHTML = "First Name is required";
    firstNameError.style ="color:red;font-size:11pxfont family: helvetica,Arial,sans-serif"
        
    return false;
}


 }