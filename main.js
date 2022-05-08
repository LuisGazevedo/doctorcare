window.addEventListener('scroll', onScroll )
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonScroll()

  activateMenuAtCuttentSection(home)
  activateMenuAtCuttentSection(services)
  activateMenuAtCuttentSection(about)
  activateMenuAtCuttentSection(contact)
  //activateMenuAtCuttentSection(services)
  }

function activateMenuAtCuttentSection(section) {
  //Linha Alvo
    const targetLine = scrollY + innerHeight /2
  
  //Verificar se a seção passou da linha
  //Quais dados vou precisar?

  //O topo da seção
    const sectionTop = section.offsetTop

  //Altura da seção   
    const sectionHeight = section.offsetHeight

  //O topod da seção chegou ou ultrapssou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //Informação dos dados e da lógica
    console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)


  //verificar se a base está abaixo da linha alvo
  //quais dados vou precisar?
  //A seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight

   const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

   console.log('O fundo da seção passou da linha? ', sectionEndPassedTargetLine )

   //limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAtribute('id')
    const menuElemnt=document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElemnt.classList.remove('active')
    if(sectionBoundaries) {
      menuElemnt.classList.add('active')
    }

}


function showNavOnScroll(){
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonScroll(){
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
   
  function openMenu() {
    document.body.classList.add('menu-expanded')
  }
  
  function closeMenu() {
    document.body.classList.remove('menu-expanded')
  }

  ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1200,
  }).reveal(`
  #home, 
  #home img, 
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about content`)

