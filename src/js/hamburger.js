let navState = 0;

// => blend the nav in or out / change the hamburger
hamburgerButton.addEventListener('click', ()=>{

    // => if the nav is hidden ...
    if(navState === 0){
        // => change the hamburger button
        hamburgerButton.classList.toggle('nav-in');

        // => blend the nav in
        nav.style.display = 'flex';

        // => set the nav state to 1
        navState = 1;
    }
    else{
        // => change the hamburger button
        hamburgerButton.classList.toggle('nav-in');

        // => blend the nav out
        nav.style.display = 'none';

        // => set the nav state to 0
        navState = 0;
    }
})