const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


//handle when hover img show imgMain
function handleHoverImg() {
    const listImgInfo = $$('.product__item-img')
    listImgInfo.forEach(function(imgInfo) {
        imgInfo.addEventListener('mousemove', function() {
            const imgDs = $$('.product1__image')
            const indexImgInfo = this.dataset.index
            imgDs.forEach((img) => {
                if(img.getAttribute('data-index') === indexImgInfo) {
                    img.style.display = 'block'
                }else {
                    img.style.display = 'none'
                }
            })
        })
    })
    
}

handleHoverImg()

//handle click button transform
function handleClickBtnImg() {
    const btnPrevImg = $('.product__list-img-prev')
    const btnNextImg = $('.product__list-img-next')
    const listImgWidth = $('.product__list-img').offsetWidth
    const listImgContent = $('.product__list-img-content')

    btnPrevImg.addEventListener('click', () => {
        listImgContent.style = `transform: translateX(0}px)`
    })

    btnNextImg.addEventListener('click', () => {
        listImgContent.style = `transform: translateX(-${listImgWidth}px)`
    })
   
}

handleClickBtnImg()



// handle click change size
function handleChangeClickSize() {
   const btnProductSize = $$('.product1__size-main')
   btnProductSize.forEach((btn) => {
       btn.addEventListener('click', () => {
           btnProductSize.forEach(e => e.classList.remove('active'))
           btn.classList.add('active')
       })
   })
}

handleChangeClickSize()


// handle click add and subtract input
function handleAddSubtractInput() {
   const addInput = $('.product1__amount-main-plus')
   const subtractInput = $('.product1__amount-main-minus')
   const inputProduct = $('.product1__amount-main-input-content')

   addInput.addEventListener('click', function() {
    inputProduct.value++
   })

   subtractInput.addEventListener('click', function() {
    inputProduct.value--
    if(inputProduct.value < 1) {
        inputProduct.value = 1
    }
   })

   inputProduct.addEventListener('input', () => {
       
   })

}

handleAddSubtractInput()
