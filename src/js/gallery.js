let 
    currentPicPosition,
    currentPicSrc;

// ------------------------------------
// CALLBACK FUNCTIONS
// ------------------------------------

// => set the src of the big modal image
const setModalImage = (idx)=>{
    modalImage.src = galleryImages[idx].src
}

 // => if it is the last picture in the gallery disable the next button
const ifLastImage = ()=>{
    currentPicPosition === galleryImages.length -1 && (buttonNextImage.disabled = true)
}

// => if it is the first image disable the previous button
const ifFirstImage = ()=>{
    currentPicPosition === 0 && (buttonPreviousImage.disabled = true)
}

// ------------------------------------
// EVENT LISTENERS
// ------------------------------------

// => handle click on thumbnail image
galleryImages.forEach(img =>{
    img.addEventListener('click', ()=>{
        // console.log('img src =>', img.src)

        // => get the src of the clicked image
        currentPicSrc = img.src
        
        // => get the node list index of the clicked image
        galleryImages.forEach((image, idx) =>{
            image.src === currentPicSrc && (currentPicPosition = idx)
        })

        // => bring the parent section to the top of the stack
        gallerySection.style.zIndex = '200'

        // => open the modal
        bigImageModal.style.display = 'flex'

        // => hide the scrollbar
        document.body.classList.toggle('hide-scrollbar')

       
        setModalImage(currentPicPosition)

        ifFirstImage()
        ifLastImage()

    })
})

// => close the modal
buttonCloseModal.addEventListener('click', ()=>{
    bigImageModal.style.display = 'none'

     // => bring the parent section to the lowest stack
     gallerySection.style.zIndex = '0'

    // => show the scrollbar
    document.body.classList.toggle('hide-scrollbar')
})

// => bring the next image
buttonNextImage.addEventListener('click', ()=>{
    currentPicPosition++
    // console.log('current pic position', currentPicPosition)
    // console.log('current pic src', currentPicSrc)
    // console.log('length of the image node list', galleryImages.length)
    
    setModalImage(currentPicPosition)
    ifLastImage()

    // => if previous button is disabled, enable it
    buttonPreviousImage.disabled = true && (buttonPreviousImage.disabled = !true)
  
})

// => bring the previous image
buttonPreviousImage.addEventListener('click', ()=>{
    currentPicPosition--

    setModalImage(currentPicPosition)
    ifFirstImage()

    // => if next button is disabled, enable it
    buttonNextImage.disabled = true && (buttonNextImage.disabled = !true)
})

// => toggle the big image size and screen mode (fullscreen / windowed)
buttonImageView.addEventListener('click', ()=>{
    console.log(buttonImageViewIcon.classList.contains('fa-maximize'))

    if(buttonImageViewIcon.classList.contains('fa-maximize')){
        buttonImageViewIcon.classList.replace('fa-maximize', 'fa-minimize' )
        modalImage.classList.toggle('full')
        document.documentElement.requestFullscreen()
    }
    else if(buttonImageViewIcon.classList.contains('fa-minimize')){
        buttonImageViewIcon.classList.replace('fa-minimize', 'fa-maximize' )
        modalImage.classList.toggle('full')
        document.exitFullscreen()
    }
})