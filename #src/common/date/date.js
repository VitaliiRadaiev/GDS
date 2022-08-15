{ 
    let dateAll = document.querySelectorAll('[data-date]');
    if(dateAll.length) {
        dateAll.forEach(date => {
            let input = date.querySelector('.date__input');

            if(input) {
                console.log(datepicker);
                const bookingDate = datepicker(input, {
                    formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
                    customDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                    minDate: new Date(),
                    onShow: () => {
                        date.classList.add('date--open');
                    },
                    onHide: () => {
                        date.classList.remove('date--open');
                    }
                })
            }
        })
    }
}