const allExternalLinks = document.querySelectorAll('a[rel="noopener external"]')

console.log(allExternalLinks)

// => all external links must be opened in a new tab
allExternalLinks.forEach(link =>{
    link.setAttribute('target', '_blank')
})