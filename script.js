// for navbar style change on scroll

// window.addEventListener('scroll' , () => {
//     document.querySelector('nav').classList.toggle
//     {'window-scroll', window.scrollY > 0 }
// })

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
      nav.classList.add('window-scroll');
    } else {
      nav.classList.remove('window-scroll');
    }
  }); 

  // for faq answer part
  const faqs = document.querySelectorAll('.faq');

  faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
      faq.classList.toggle('open');

      //change icon
      const icon = faq.querySelector('.faq__icon i')
      if(icon.className === 'fas fa-plus fa-sm'){
        icon.className = 'fas fa-minus fa-sm'
      } else {
        icon.className = 'fas fa-plus fa-sm'
      }
    })
  });

  // js for nav responsive nav menu
  const menu = document.querySelector(".nav__menu");
  const menuBtn = document.querySelector("#open-menu-btn");
  const closeBtn = document.querySelector("#close-menu-btn");

  menuBtn.addEventListener('click' , () =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
  })


  // close btn
  const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
  }

  closeBtn.addEventListener('click' , closeNav) 


  // form
  document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () =>{
       if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
    };
 });
 
 AOS.init({
    duration: 400,
    delay: 200,
 });