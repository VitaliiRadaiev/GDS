{
    let buttonsBorderGradietnAll = document.querySelectorAll('.btn-default--border-gradient');
    if(buttonsBorderGradietnAll.length) {
        buttonsBorderGradietnAll.forEach(buttonsBorderGradietn => {
            let border = document.createElement('div');
            border.className = 'btn-default__border';
            border.innerHTML = `
            <svg height="100%" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect height="100%" width="100%" x="1" y="1"
                    stroke="url(#paint0_linear_1_869)" stroke-width="1.5" />
                <defs>
                    <linearGradient id="paint0_linear_1_869" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#51D6FB"  />
                    </linearGradient>
                </defs>
            </svg>
            `

            let textWrap = document.createElement('span');
            textWrap.className = 'button__text-wrap';

            textWrap.append(...buttonsBorderGradietn.childNodes);
        
            buttonsBorderGradietn.append(border, textWrap);
        })
    }
}