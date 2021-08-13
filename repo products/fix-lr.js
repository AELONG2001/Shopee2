window.onload = () => {
    //bar skiing for mobile
    const listItem = $('.header__sort-bar-item');
    const listItems = $$('.header__sort-bar-item');
    const line = $('.line');

    line.style.left = listItem.offsetLeft + 'px';
    line.style.width = listItem.offsetWidth + 'px';

    listItems.forEach((item) => {

        item.onclick = (e) => {
            e.preventDefault();

            line.style.left = item.offsetLeft + 'px';
            line.style.width = item.offsetWidth + 'px';
           }
    })
}