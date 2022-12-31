// ---------------------------------------------------------------------------
// SET HEIGHT OF THE BACKGROUND IMAGES AND SECTIONS TO THE WINDOW INNER HEIGHT
// ---------------------------------------------------------------------------

//
// --- 'FUNCTIONS' ---
//

// => set the height of the sections
const setSectionsHeight = ()=>{
    sections.forEach(section =>{
        section.style.height = window.innerHeight;
    })
}

// => set the height of the backgrounds
const setBackgroundsHeight = ()=>{
    sectionBackgrounds.forEach(background => {
        background.style.height = window.innerHeight;
    })

    console.log('set height');
}

// => set the height of the nav
const setNavHeight = ()=>{
    nav.style.height = window.innerHeight;
}



//
// --- 'EXECUTE THE FUNCTION' ---
//

// => initial executes
setBackgroundsHeight();
setSectionsHeight();
setNavHeight();

// => executes on every resize of the window
window.onresize = ()=>{
    setBackgroundsHeight();
    setSectionsHeight();
    setNavHeight();
}