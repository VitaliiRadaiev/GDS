{
    let wpRadios = document.querySelectorAll('.wpcf7-form-control.wpcf7-radio label input');
    if(wpRadios.length) {
        wpRadios.forEach(input => {
            let radioSquare = document.createElement('div');
            radioSquare.className = 'checkbox-radio__square';

            input.after(radioSquare);
        })
    }

    let wpCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    if(wpCheckboxes.length) {
        wpCheckboxes.forEach(checkbox => {
            let wrapper = checkbox.closest('.checkbox-radio');

            if(wrapper) {
                checkbox.addEventListener('change', () => {
                    if(checkbox.checked) {
                        wrapper.classList.add('checkbox-radio--checked');
                    } else {
                        wrapper.classList.remove('checkbox-radio--checked');
                    }
                })
            }
        })
    }
}