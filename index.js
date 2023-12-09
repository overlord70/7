let box = document.querySelectorAll('.box')


  box.forEach(item => {
   item.onmouseenter = () => {
    item.classList.add('active')
   }
   
  }) 
