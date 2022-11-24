const myForm = document.querySelector('#my-form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const msg = document.querySelector('.msg');
  const userList = document.querySelector('#users');
  
                       //show list of users

  let k =JSON.parse(localStorage.getItem('userdetails'));

  if(k){
    k.forEach(element => {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${element.name}: ${element.email}`));
      userList.appendChild(li);
    });
  }

  myForm.addEventListener('submit', onSubmit);
  
  function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '') {
      
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    
        
        setTimeout(() => msg.remove(), 3000);
      } else {
        
        

                                   // add multiple details to local storage

        let item = localStorage.getItem('userdetails') || '[]';
        item = JSON.parse(item);
        item.push({name: nameInput.value, email: emailInput.value});
        localStorage.setItem('userdetails', JSON.stringify(item));

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);


        nameInput.value = '';
        emailInput.value = '';
         //
      }
    }
    
  
    
    
  
    
