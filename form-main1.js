const myForm = document.querySelector('#my-form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const msg = document.querySelector('.msg');
  const userList = document.querySelector('#users');
  
  
  myForm.addEventListener('submit', onSubmit);
  
  function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '') {
      
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    
        
        setTimeout(() => msg.remove(), 3000);
      } else {
        
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);

        // add to local storage

        // localStorage.setItem('user_name' , nameInput.value);
        // localStorage.setItem('user_email' , emailInput.value);

        const obj = {};
        obj.name = nameInput.value;
        obj.email = emailInput.value;

        let userobj = JSON.stringify(obj);
        localStorage.setItem('user' , userobj);

    
       
        nameInput.value = '';
        emailInput.value = '';
         //
      }
    }
    
  
    