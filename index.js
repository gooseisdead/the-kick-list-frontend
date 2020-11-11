

// document.addEventListener("DOMContentLoaded", function(){
    const BASE_URL = "http://localhost:3000"
    const BRANDS_URL = `${BASE_URL}/brands`
    const SNEAKERS_URL = `${BASE_URL}/sneakers`
    const selector = document.querySelector(".selector")
    const kickName = document.querySelector(".kick-name")
    const kickRelase = document.querySelector(".kick-release")
    const kickImage = document.querySelector(".kick-image")
    const kickValue = document.querySelector(".kick-value")
    const kickRarity = document.querySelector(".kick-rarity")
    const kickDescription = document.querySelector(".kick-description")
    const kickRating = document.querySelector(".kick-rating")
    const kickContainer = document.querySelector(".kick-container")
    // const kickCard = document.querySelector("#kick-card")

    // function renderSneakers(sneakerObj) {

    //     kickCard.innerHTML = `
    //         <p class="kick-name">${sneakerObj.name}</p>
    //         <p class="kick-release">${sneakerObj.release}</p>
    //         <img src="${sneakerObj.image}" alt="sneakers" class="kick-image">
    //         <p class="kick-value">${sneakerObj.value}</p>
    //         <p class="kick-rarity">${sneakerObj.rarity}</p>
    //         <p class="kick-description">${sneakerObj.description}</p>
    //         <p class="kick-rating">${sneakerObj.rating}</p> 
    //         `





        // kickName.innerText = sneakerObj.name
        // kickValue.innerText = sneakerObj.release
        // kickImage.src = sneakerObj.image
        // kickRarity.innerText = sneakerObj.rarity 
        // kickDescription.innerText = sneakerObj.description 
        // kickRating.innerText = sneakerObj.rating 
        // const p = document.createElement("p")
        // p.textContent = sneakerObj.name 

        // const ul = document.createElement("ul")
        // const button = document.createElement("button")
        // button.innerText = "DELETE"
        // const li = document.createElement("li")
        // li.innerHTML = `
        // ${sneakerObj.name}`
        // ul.append(li, button)
        // kickCard.append(p, ul)
        // kickContainer.append(kickCard)
    // }


    function renderBrand(brandObj) {
        
        const img = document.createElement("img")
        img.dataset.id = brandObj.id
        img.setAttribute('src', '')
        img.setAttribute('alt', 'brand-logo')
        img.setAttribute("id", "brand-logo")
        img.src = brandObj.logo
        selector.append(img)
        
        // brandObj.sneakers.forEach(sneakerObj => {
            // renderSneaker(sneakerObj, kickCard)
            img.addEventListener("click", function(event) {
                if (img.dataset.id == brandObj.id) {
                    // renderSneakers(sneakerObj)
                brandObj.sneakers.forEach(sneakerObj => {
            let kickCard = document.createElement("div")
            kickCard.innerHTML = `
            <p class="kick-name">${sneakerObj.name}</p>
            <p class="kick-release">${sneakerObj.release}</p>
            <img src="${sneakerObj.image}" alt="sneakers" class="kick-image">
            <p class="kick-value">$${sneakerObj.value}</p>
            <p class="kick-rarity">${sneakerObj.rarity}</p>
            <p class="kick-description">${sneakerObj.description}</p>
            <p class="kick-rating">${sneakerObj.rating}</p> 
            `
            kickContainer.append(kickCard)
                })
            }
        })
        
       
    }

    


    function initialize() {
        fetch(BRANDS_URL)
        .then(r => r.json())
        .then(brandsArray => {
            brandsArray.forEach(brandObj => {
            renderBrand(brandObj)
            })
        })
    }

    initialize()
// })












// const selectorOne = document.querySelector(".selector1")
// const selectorTwo = document.querySelector(".selector2")
// const selectorThree = document.querySelector(".selector3")
// const selectorFour = document.querySelector(".selector4")
// const selectorFive = document.querySelector(".selector5")
// const kickContainer = document.querySelector(".kick-container")


// function renderBrandImages(brand) {
//     brand.forEach(brand => {
//         const img = document.createElement("img")
//         img.className = "brand-image"
//         img.setAttribute('src', '')
//         img.setAttribute('alt', 'brand-logo')
//         img.setAttribute("id", "brand-logo")
//         if (brand.id == "1") {
//             img.src = brand.logo
//             selectorOne.append(img)
//         } else if (brand.id == "2") {
//             img.src = brand.logo
//             selectorTwo.append(img)
//         } else if (brand.id == "3") {
//             img.src = brand.logo
//             selectorThree.append(img)
//         } else if (brand.id == "4") {
//             img.src = brand.logo
//             selectorFour.append(img)
//         } else if (brand.id == "5") {
//             img.src = brand.logo
//             selectorFive.append(img)
//         }
//     }) 
// }



// function renderAllSneakers(sneaker) {
//     sneaker.forEach(pair => {
//         if (pair.brand.id == "1") {
//             const kickCard1 = document.createElement("div")
//             kickCard1.className = "kick-card-1"
//             kickCard1.innerHTML = `
//             <p>${pair.name}</p>
//             <p>${pair.release}</p>
//             `
//             kickContainer.append(kickCard1)
//         } else if (pair.brand.id == "2") {
//             const kickCard2 = document.createElement("div")
//             kickCard2.innerHTML = `
//             <p>${pair.name}</p>
//             <p>${pair.release}</p>
//             `
//             kickContainer.append(kickCard2)
//         }
//     })
    
// }


// function getAllSneakers() {
//     fetch("http://localhost:3000/sneakers")
//     .then(response => response.json())
//     .then(data => 
//         renderAllSneakers(data))
// }


// function getAllBrands() {
//     fetch("http://localhost:3000/brands")
//     .then(response => response.json())
//     .then(data => 
//         renderBrandImages(data))
// }

// getAllSneakers()
// getAllBrands()



