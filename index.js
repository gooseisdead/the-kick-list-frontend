document.addEventListener("DOMContentLoaded", function(){

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
    const selectBrand = document.querySelector("#brand_id")
    const kickForm = document.querySelector("#new-kick-form")
    
    function renderOption(brandObj) {
        const option = document.createElement("option")
        option.textContent = brandObj.name
        option.value = brandObj.id
        selectBrand.append(option)
    }

    function allNike(brandObj) {
        if (brandObj.id == "1") {
            brandObj.sneakers.forEach(sneaker => {
                sneaker.name
            })  
        }      
    }


    function renderBrand(brandObj) {
        
        const img = document.createElement("img")
        img.dataset.id = brandObj.id
        img.setAttribute('src', '')
        img.setAttribute('alt', 'brand-logo')
        img.setAttribute("id", "brand-logo")
        img.src = brandObj.logo
        selector.append(img)
        
            img.addEventListener("click", function(event) {
                if (img.dataset.id == brandObj.id) {
                brandObj.sneakers.forEach(sneakerObj => {
                    let kickCard = document.createElement("div")
                    kickCard.className = "kick-card"
                    kickCard.innerHTML = `
                    <p class="kick-name">${sneakerObj.name}</p>
                    <p class="kick-release">${sneakerObj.release}</p>
                    <img src="${sneakerObj.image}" alt="sneakers" class="kick-image">
                    <p class="kick-value">$${sneakerObj.value}</p>       
                    <p class="kick-rarity">${sneakerObj.rarity}</p>
                    <p class="kick-description">${sneakerObj.description}</p>
                    <p class="kick-rating">${sneakerObj.rating}</p> 
                    `
                if (sneakerObj.rarity == "Gold") {
                    kickCard.className = "kick-gold"
                } else if (sneakerObj.rarity == "Silver") {
                    kickCard.className = "kick-silver"
                } else if (sneakerObj.rarity == "Bronze") {
                    kickCard.className = "kick-bronze"
                } else if (sneakerObj.rarity == "Platinum") {
                    kickCard.className = "kick-platinum"
                } 

                    kickContainer.append(kickCard)
                })
            }
        })
    }

    function calculateValue(brandObj) {
        brandObj.sneakers.forEach(sneakerObj => {
            
        })
    }

    kickForm.addEventListener("submit", function(event) {
        event.preventDefault()
        const newSneakerObj = {
            brand_id: parseInt(event.target.brand_id.value),
            name: event.target.name.value,
            release: event.target.release.value,
            image: event.target.image.value,
            rarity: event.target.rarity.value,
            value: event.target.value.value,
            description: event.target.description.value
        }
        fetch("http://localhost:3000/sneakers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSneakerObj)
        })
            .then(response => response.json())
            .then(newSneaker => {
                console.log(newSneaker)
                
            })
        event.target.reset()
    })

    function getBrandData() {
        fetch(BRANDS_URL)
        .then(r => r.json())
        .then(brandsArray => {
            brandsArray.forEach(brandObj => {
            renderBrand(brandObj)
            renderOption(brandObj)
            calculateValue(brandObj)
            allNike(brandObj)
            })
        })
    }

    getBrandData()
   
})
