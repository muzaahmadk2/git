const myForm = document.querySelector('#my-form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const msg = document.querySelector('.msg');
  const userList = document.querySelector('#users');
  
                       //show list of users

  let k =JSON.parse(localStorage.getItem('userdetails'));

  if(k){
    k.forEach(element => {
      addele(element);
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

        var ele ={
          name:nameInput.value,
          email:emailInput.value
        };
        addele(ele);



        nameInput.value = '';
        emailInput.value = '';
         //
      }
    }

    // function to delete item
    userList.addEventListener('click' , remove);
    function remove(e){
      if(e.target.classList.contains('delete')){
        
          var li = e.target.parentElement;
          var ri = li.childNodes[1].textContent
          userList.removeChild(li);

          let k =JSON.parse(localStorage.getItem('userdetails'));
          if(k){
            k = k.filter(element => {
              return element.email != ri;
                
            });
    
          }
          localStorage.setItem('userdetails', JSON.stringify(k));
        }
      }

    //function to edit item
    userList.addEventListener('click' , remove1);
    function remove1(e){
      if(e.target.classList.contains('edit')){

        
          var li = e.target.parentElement;
          var ri = li.childNodes[1].textContent
          userList.removeChild(li);

          let k =JSON.parse(localStorage.getItem('userdetails'));
          if(k){
            k = k.filter(element => {
              if(element.email == ri){
                nameInput.value = element.name;
                emailInput.value = element.email;
              }
              return element.email != ri;
                
            });
    
          }
          localStorage.setItem('userdetails', JSON.stringify(k));
        }
      }



    function addele(element){
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${element.name}: `));
      li.appendChild(document.createTextNode(element.email));

      // add edit button;
      var ebutt = document.createElement('button');
      ebutt.className = 'edit';
      ebutt.appendChild(document.createTextNode('Edit'));
      ebutt.style.marginLeft = '10px';
      li.appendChild(ebutt);

      //add delete button
      var dbutt = document.createElement('button');
      dbutt.className = 'delete';
      dbutt.appendChild(document.createTextNode('Delete'));
      dbutt.style.marginLeft = '10px';
      li.appendChild(dbutt);


      userList.appendChild(li);

    }


    
  
    
