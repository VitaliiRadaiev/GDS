let bookingSelects = document.querySelectorAll('[data-booking-select]');
if (bookingSelects.length) {
    bookingSelects.forEach(bookingSelect => {
        let head = bookingSelect.querySelector('.booking-select__head');
        let headText = bookingSelect.querySelector('.booking-select__chosen-item');
        let collapseBox = bookingSelect.querySelector('.booking-select__collapse-box');
        let innerInputs = Array.from(bookingSelect.querySelectorAll('input[type="radio"], input[type="checkbox"]'));

        head.addEventListener('click', () => {
            bookingSelect.classList.toggle('booking-select--open');

            bookingSelects.forEach(i => {
                if (i === bookingSelect) return;

                let collapseBox = i.querySelector('.booking-select__collapse-box');

                i.classList.remove('booking-select--open');
            })
        })

        if (innerInputs.length) {
            innerInputs.forEach(checkboxRadio => {
                if(checkboxRadio.type === 'radio') {
                    let textEl = checkboxRadio.closest('.checkbox-radio').querySelector('.checkbox-radio__text');
                    // init
                    if (checkboxRadio.checked) {
                        bookingSelect.classList.add('booking-select--selected');
                        headText.innerText = textEl.innerText;
                    }

                    checkboxRadio.addEventListener('change', () => {
                        if (checkboxRadio.checked) {
                            bookingSelect.classList.add('booking-select--selected');
                            headText.innerText = textEl.innerText;
                        }
                    })
                } else if(checkboxRadio.type === 'checkbox') {
                    checkboxRadio.addEventListener('change', () => {
                        let text = innerInputs.filter(i => i.checked).map(i => i.closest('.checkbox-radio').querySelector('.checkbox-radio__text').innerText);
                        if(text.length) {
                            bookingSelect.classList.add('booking-select--selected');
                            headText.innerText = text.join(', ');
                        } else {
                            bookingSelect.classList.remove('booking-select--selected');
                            headText.innerText = 'Select'
                        }
                    })
                    
                }
            })
        }

    })

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.booking-select')) {
            bookingSelects.forEach(bookingSelect => {
                let collapseBox = bookingSelect.querySelector('.booking-select__collapse-box');
                bookingSelect.classList.remove('booking-select--open');
            })
        }
    })
}