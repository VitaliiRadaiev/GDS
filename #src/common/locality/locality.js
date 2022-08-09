{
    let localitySection = document.querySelector('[data-locality]');
    if(localitySection) {
        let mobList = localitySection.querySelector('.locality__list--mob');
        let btn = localitySection.querySelector('.locality__view-all');

        Array.from(mobList.children).forEach((item, index) => {
            if(index > 4) {
                item.classList.add('d-none');
            }
        })

        btn.addEventListener('click', () => {
            Array.from(mobList.children).forEach((item, index) => {
                item.classList.remove('d-none');
                btn.classList.add('d-none');
            })
        })
        
    }
}