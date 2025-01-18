document.addEventListener('DOMContentLoaded', function(){
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item =>{
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', function(){
            const currentlyActiveItem = document.querySelector('.accordion-item.active');

            if(currentlyActiveItem && currentlyActiveItem !== item){
                currentlyActiveItem.classList.remove('active');
                currentlyActiveItem.querySelector('.accordion-header').classList.remove('active');
            }

            item.classList.toggle('active');
            this.classList.toggle('active');
        });
    })
})