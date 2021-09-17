function renderSliderVoucher() {
    const listSliderVoucher = [
        {
            image: 'https://cf.shopee.vn/file/75cf7dbba3c2cb2fc8e639f8896a2594'
        },

        {
            image: 'https://cf.shopee.vn/file/39b3e8cda843d5b5a661bff9281d779c'
        },

        {
            image: 'https://cf.shopee.vn/file/f0dc63cd98d92dfc5dd8a2cac4fbae6a'
        },
    ]

    let sliderVouchers = $('.category__slider-list')
    let sliderVoucher = ''

    for(getSliderVoucher of listSliderVoucher) {
        sliderVoucher += `
            <li class="category__slider-item">
               <img src="${getSliderVoucher.image}" alt="Banner-1">
            </li>

            `
            sliderVouchers.innerHTML = sliderVoucher

    }
}

renderSliderVoucher()



positionSliderVoucher = 0
indexVoucher = 0

dotItems.forEach((item) => {
    item.addEventListener('click', () => {
        sliderVoucher(1)
    })
})

function sliderVoucher(param) {
    const sliderVoucher = $('.category__slider-list')
    const sliderVoucherItems = $$('.category__slider-item')
    const sliderVoucherItemWidth = sliderVoucherItems[0].offsetWidth
    const sliderVoucherItemLength = sliderVoucherItems.length
    const sliderVoucherDotItems = $$('.list__dots-item__category-voucher');
   
    indexVoucher++
    positionSliderVoucher = positionSliderVoucher - sliderVoucherItemWidth
    if( indexVoucher >= sliderVoucherItemLength) {
        indexVoucher = 0
        positionSliderVoucher = 0
        sliderVoucherDotItems[sliderVoucherItemLength - 1].classList.remove('active');
    }
    sliderVoucher.style = `transform: translateX(${positionSliderVoucher}px)`

    if(param === 1) {
        positionSliderVoucher =  -1 * index * sliderVoucherItemWidth
        sliderVoucher.style = `transform: translateX(${positionSliderVoucher}px)`
    }

    sliderVoucherDotItems[indexVoucher].classList.add('active');
    const checkActive = $('.active')
        if(checkActive) {
            sliderVoucherDotItems[indexVoucher - 1].classList.remove('active');
        }
    
}

sliderVoucher()

setInterval(() => {sliderVoucher()}, 3000)

