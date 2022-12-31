// --------------------------------------------------------------
// SCROLL REACTIONS
// ---------------------------------------------------------------

//
// --- VARIABLES ---
//

let 
    currentScroll = 0,
    scrollState = null,
    lastScrollPosition = 0;

//
// --- FUNCTIONS ---
//

// => roll the image
const rollTheImage = (imageIndex)=>{
    console.log('imageIndex', imageIndex);

    // => select the right image from the node list
    imageToRoll = sectionBackgrounds[imageIndex];

    // => set the new height of the image
    imageToRoll.style.height = window.innerHeight - (scrollY - window.innerHeight * imageIndex);
     
    scrollState = imageIndex;
}

// => reduce the brightness of the section background 
const setBackgroundBrightness = (workHintName, state)=>{

    switch (workHintName){
        case 'Wildlife':
            state === 1 && (sectionBackgrounds[1].style.filter = 'brightness(0.2)');
            state !== 1 && (sectionBackgrounds[1].style.filter = 'brightness(1)');
            break;

        case 'Nature':
            state === 1 && (sectionBackgrounds[2].style.filter = 'brightness(0.2)');
            state !== 1 && (sectionBackgrounds[2].style.filter = 'brightness(1)');
            break;

        case 'Pets':
            state === 1 && (sectionBackgrounds[3].style.filter = 'brightness(0.2)');
            state !== 1 && (sectionBackgrounds[3].style.filter = 'brightness(1)');
            break;
    }
}

//
// --- EVENT LISTENERS ---
//

// 'ROLL THE IMAGES'
document.addEventListener('scroll', ()=>{
    // console.log('backgrounds', {sectionBackgrounds})
    console.log('scrollY', scrollY);


    currentScroll = scrollY;


    // => image of the landing section
    scrollY <= window.innerHeight 
        && rollTheImage(0);

    // => image of work hint wildlife
    scrollY >= window.innerHeight && scrollY <= (window.innerHeight * 2)
        && rollTheImage(1);

    // => image of work hint nature
    scrollY >= (window.innerHeight * 2) && scrollY <= (window.innerHeight * 3)
        && rollTheImage(2);

    // => image of work hint pets
    scrollY >= (window.innerHeight * 3) && scrollY <= (window.innerHeight * 4)
        && rollTheImage(3);
     
    // => if scroll up ...
    if(currentScroll < lastScrollPosition){
        console.log('scroll up');

        // => set the height of all backgrounds below the current background eqal to window height
        for(let x = scrollState+1; x < sectionBackgrounds.length; x++){
            sectionBackgrounds[x].style.height = window.innerHeight;
        }
    }
 
  
    lastScrollPosition = scrollY;
})

// 'CHANGE BACKGROUNDS'
document.addEventListener('scroll', ()=>{

    // => change the background color of the main heading
    scrollY < 100 && (mainHeading.style.backgroundColor = `rgba(0, 0, 0, ${scrollY / 100})`);
    scrollY >= 100 && (mainHeading.style.backgroundColor = `rgba(0, 0, 0, 1)`);

    // => change the current section background 
    workHints.forEach(workHint =>{
        const 
            headingOfThisWorkHint = workHint.querySelector('h2'),
            thisWorkHintTitle = workHint.querySelector('a').innerHTML,
            headingRect = headingOfThisWorkHint.getBoundingClientRect();

        console.log('work hint heading', headingOfThisWorkHint);

        headingRect.top <= window.innerHeight * 0.6
            && setBackgroundBrightness(thisWorkHintTitle, 1);
        
        headingRect.top >= window.innerHeight * 0.6
           && setBackgroundBrightness(thisWorkHintTitle, 0);
    })
})

// 'BUTTON CLICKS'

// => scroll to the first work hint section
buttonScrollDown.addEventListener('click', ()=> scrollTo(0, window.innerHeight))

// => scroll to the top of the document
buttonScrollToTop.addEventListener('click', () => scrollTo(0,0))