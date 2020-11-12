const selectorOne = document.querySelector(".selector1")
const selectorTwo = document.querySelector(".selector2")
const selectorThree = document.querySelector(".selector3")
const selectorFour = document.querySelector(".selector4")
const selectorFive = document.querySelector(".selector5")
const kickContainer = document.querySelector(".kick-container")
const kickForm = document.querySelector(".brand-form")
const parentCont = document.querySelector(".parent")

const renderBrand = (brandObj) => {
    brandObj.forEach(brand => {
        let img = document.createElement('img')
        img.setAttribute = ('src', '')
        if (brand.id == "1") {
            img.className = 'brand-img1'
            img.src = brand.logo
            selectorOne.append(img)
        } else if (brand.id == "2") {
            img.className = 'brand-img2'
            img.src = brand.logo
            selectorTwo.append(img)
        } else if (brand.id == "3") {
            img.className = 'brand-img3'
            img.src = brand.logo
            selectorThree.append(img)
        } else if (brand.id == "4") {
            img.className = 'brand-img4'
            img.src = brand.logo
            selectorFour.append(img)
        } else if (brand.id == "5") {
            img.className = 'brand-img5'
            img.src = brand.logo
            selectorFive.append(img)
            };
            
        });    
    }
    
    const renderSneaker = (sneakerObj) =>{
    sneakerObj.forEach(sneaker => {
        let img = document.createElement('img')
        img.className = 'sneaker-img'
        img.setAttribute = ('src', '')
        if (sneaker.brand.id == "1") {
            const kickCard1 = document.createElement("div")
            img.src = sneaker.image
            kickCard1.className = "kick-card-1"
            kickCard1.innerHTML = `
            <ul>${sneaker.name}</ul>
            <ul>Release Date; ${sneaker.release}</ul>
            <ul>Resell Value: $${sneaker.value} dollars</ul>
            <ul>Rating: ${sneaker.rating} out of 5</ul>
            <ul>${sneaker.description}</ul>
            <ul>${sneaker.brand.name}</ul>
            `
            kickCard1.append(img)
            kickContainer.append(kickCard1)                
        } else if (sneaker.brand.id == "2") {
            const kickCard2 = document.createElement("div")
            img.src = sneaker.image
            kickCard2.className = "kick-card-2"
            kickCard2.innerHTML = `
            <ul>${sneaker.name}</ul>
            <ul>Release Date: ${sneaker.release}</ul>
            <ul>Resell Value: $${sneaker.value} dollars</ul>
            <ul>Rating: ${sneaker.rating} out of 5</ul>
            <ul>${sneaker.description}</ul>
            <ul>${sneaker.brand.name}</ul>
            `
            kickCard2.append(img)
            kickContainer.append(kickCard2)
        } else if (sneaker.brand.id == "3") {
            const kickCard3 = document.createElement("div")
            img.src = sneaker.image
            kickCard3.className = "kick-card-2"
            kickCard3.innerHTML = `
            <ul>${sneaker.name}</ul>
            <ul>Release Date: ${sneaker.release}</ul>
            <ul>Resell Value: $${sneaker.value} dollars</ul>
            <ul>Rating: ${sneaker.rating} out of 5</ul>
            <ul>${sneaker.description}</ul>
            <ul>${sneaker.brand.name}</ul>
            `
            kickCard3.append(img)
            kickContainer.append(kickCard3)
        } else if (sneaker.brand.id == "4") {
            const kickCard4 = document.createElement("div")
            img.src = sneaker.image
            kickCard4.className = "kick-card-2"
            kickCard4.innerHTML = `
            <ul>${sneaker.name}</ul>
            <ul>Release Date: ${sneaker.release}</ul>
            <ul>Resell Value: $${sneaker.value} dollars</ul>
            <ul>Rating: ${sneaker.rating} out of 5</ul>
            <ul>${sneaker.description}</ul>
            <ul>${sneaker.brand.name}</ul>
            `
            kickCard4.append(img)
            kickContainer.append(kickCard4)
        } else if (sneaker.brand.id == "5") {
            const kickCard5 = document.createElement("div")
            img.src = sneaker.image
            kickCard5.className = "kick-card-5"
            kickCard5.innerHTML = `
            <ul>${sneaker.name}</ul>
            <ul>Release Date: ${sneaker.release}</ul>
            <ul>Resell Value: $${sneaker.value} dollars</ul>
            <ul>Rating: ${sneaker.rating} out of 5</ul>
            <ul>${sneaker.description}</ul>
            <ul>${sneaker.brand.name}</ul>
            `
            kickCard5.append(img)
            kickContainer.append(kickCard5)
        };
    });
}

    parentCont.addEventListener('click', e => {
        if (e.target.className === "brand-img1") {
            // console.log('yahoo!')
            


        } else if (e.target.className === "brand-img2") {
            // console.log('yahoo! again')


        } else if (e.target.className === "brand-img3") {
            // console.log('and again')


        } else if (e.target.className === "brand-img4") {
            // console.log('one more time')


        } else if (e.target.className === 'brand-img5') {
            // console.log('last one')


        }
    })

    kickForm.addEventListener('submit', e => {
        e.preventDefault()
        const sneakerInput = document.querySelector('#sneaker-input')
        const releaseInput = document.querySelector('#release-info')
        const imageInput = document.querySelector('#image-url')
        const valueInput = document.querySelector('#value-input')
        const rarityInput = document.querySelector('#rarity-input')
        const brandInput = document.querySelector('#brand-id')
        console.log(sneakerInput.value)
        

        

    })


    fetch('http://localhost:3000/brands')
        .then(r => r.json())
        .then(brandObj => 
            renderBrand(brandObj)
        )

    fetch('http://localhost:3000/sneakers')
        .then(r => r.json())
        .then(sneakerObj=> 
            renderSneaker(sneakerObj)
        )

    fetch('http://localhost:3000/sneakers')
    
