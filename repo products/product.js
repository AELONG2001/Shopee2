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