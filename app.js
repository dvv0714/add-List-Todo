const input = document.querySelector('.question input');


input.addEventListener('keyup', (e) => {
   if (e.key === 'Enter' && input.value) {

      showList();
      input.value = '';
      input.placeholder = '';

   }
});


function showList() {
   let li = '';
   li += `
         <ul class="list__item">
            <li class="list__text">${input.value}</li>
            <div onclick="addChecked(this)" class="checkbox"></div>
         </ul>`;
   document.querySelector('.lists').innerHTML += li;
}

// showList();

function addChecked(elem) {
   elem.classList.toggle('active');
}