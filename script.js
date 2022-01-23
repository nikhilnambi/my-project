
//Login Page//
/*function validate(){
    let email=document.getElementById("email");
    let password=document.getElementById("password");
    
      if(email.value.trim()=="")
         {
           alert("Email can't be empty");
           return false;
         }
    var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
        
      if(regexp.test(email.value)!="1")
         {
            alert("Email Is Invalid");
            return false;
         }
      if(password.value.trim()=="")
        {
            alert("password can't be empty")
            return false;
        }
      if(password.value.length<=8)
        {
            alert("password should contain minimum 8 letters")
            return false;
        }
            return true;  
    }
    
    
        
    
    const visToggle = document.querySelector('.eyeIcon');
    
    const input = document.querySelector('.password');
    
    var password = true;
    
    visToggle.addEventListener('click', function(){
             if(password) {
                 input.setAttribute('type','text'); 
                 visToggle.classList.remove('fa-eye');
                 visToggle.classList.add('fa-eye-slash');
             } else {
                 input.setAttribute('type','password');
                 visToggle.classList.remove('fa-eye-slash');
                 visToggle.classList.add('fa-eye');
             }
        password = !password;
          })

//login page end//
*/

//signup page start//

const visToggle = document.querySelector('.eyeIcon');

const input = document.querySelector('#password');

var password = true;

visToggle.addEventListener('click', function(){
         if(password) {
             input.setAttribute('type','text'); 
             visToggle.classList.remove('fa-eye');
             visToggle.classList.add('fa-eye-slash');
         } else {
             input.setAttribute('type','password');
             visToggle.classList.remove('fa-eye-slash');
             visToggle.classList.add('fa-eye');
         }
    password = !password;
      });
   
function validate(){
let email=document.getElementById("emailid");
let password=document.getElementById("password");
let firstname=document.getElementById("firstname");
let lastname=document.getElementById("lastname");
let phonenumber=document.getElementById("phoneid");

  if(firstname.value.trim()=="")
     {
       alert("firstname can't be empty");
       return false;
     }
  if(lastname.value.trim()=="")
     {
       alert("lastname can't be empty");
       return false;
     }

  if(email.value.trim()=="")
     {
       alert("Email can't be empty");
       return false;
     }
var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    
  if(regexp.test(email.value)!="1")
     {
        alert("Email Is Invalid");
        return false;
     }
var phoneno =/^([0-9]{3})([0-9]{3})([0-9]{4})$/;
  if(phoneno.test(phonenumber.value))
        {
           alert("invalid phone number")
           return false;
        }
  if(phonenumber.value.length!="12")
    {
      alert("Invalid phone number")
      return false;
    }
  if(password.value.trim()=="")
    {
        alert("password can't be empty")
        return false;
    }
  if(password.value.length<=8)
    {
        alert("password should contain minimum 8 letters")
        return false;
    }
        return true;  
}
      function dovalidate(){
        document.getElementById("strength").style.display="block";
        
      }
 
      var pass = document.getElementById('password'); 
        pass.addEventListener('keyup', function(){ 
            checkPassword(pass.value);
        })
        function checkPassword(password) {
            var strengthBar = document.getElementById('strength'); 
            var strength = 0; 
            if (password.match(/(?=.*\d)+/)){ 
                strength += 1
            }
            if (password.match(/(?=.*[a-z])(?=.*[A-Z])+/)) { 
                strength += 1
            }
            if (password.match(/(?=.*[!@#$%^&*()~<>?])+/)) { 
                strength += 1
            }
            if (password.length > 10) {   
                strength += 1
            }
            switch(strength){ 
                case 0:
                    strengthBar.value = 20;
                    strengthBar.className = 'firstbar'; 
                    strengthBar.classList.add('pb20');
                    break;
                case 1: 
                    strengthBar.value = 40;
                    strengthBar.className = 'secondbar';
                    strengthBar.classList.add('pb40');
                    break;
                case 2:
                    strengthBar.value = 60;
                    strengthBar.className = 'thirdbar';
                    strengthBar.classList.add('pb60');
                    break;
                case 3:
                    strengthBar.value = 80;
                    strengthBar.className = 'fourthbar';
                    strengthBar.classList.add('pb80');
                    break;
                case 4:
                    strengthBar.value = 100;
                    strengthBar.className = 'fifthbar';
                    strengthBar.classList.add('pb100');
                    break;
            }
        }




