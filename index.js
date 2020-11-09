const selectorOne = document.querySelector(".selector1")
const selectorTwo = document.querySelector(".selector2")
const selectorThree = document.querySelector(".selector3")
const selectorFour = document.querySelector(".selector4")
const selectorFive = document.querySelector(".selector5")


function renderBrandImages(brand) {
    brand.forEach(brand => {
        const img = document.createElement("img")
        img.className = "brand-image"
        img.setAttribute('src', '')
        img.setAttribute('alt', 'brand-logo')
        img.setAttribute("id", "brand-logo")
        if (brand.id == "1") {
            img.src = brand.logo
            selectorOne.append(img)
            console.log(img)
        } else if (brand.id == "2") {
            img.src = brand.logo
            selectorTwo.append(img)
        } else if (brand.id == "3") {
            img.src = brand.logo
            selectorThree.append(img)
        } else if (brand.id == "4") {
            img.src = brand.logo
            selectorFour.append(img)
        } else if (brand.id == "5") {
            img.src = brand.logo
            selectorFive.append(img)
        }
    }) 
}








function getAllBrands() {
    fetch("http://localhost:3000/brands")
    .then(response => response.json())
    .then(data => 
        renderBrandImages(data))
}

getAllBrands()