function clock(selector, deadline) {
    if (typeof selector !== 'string' || selector === '') {
        console.error('Error: netinkamo formato selektorius.')
        return false;
    }
    if (typeof deadline !== 'string' || deadline === '' || !isFinite((new Date(`2000-${deadline}`)).getTime())) {
        console.error('Error: netinkamo formato deadline reiksme.')
        return false;
    }


    const clockDOM = document.querySelector(selector);
    if (!clockDOM) {
        console.error('Error: pagal pateikta selektoriu nepavyko rasti norimo DOM elemento.')
        return false;
    }
    let allValuesDOM = null;


    const labels = ['days', 'hours', 'minutes', 'seconds']
    let numbers = calctime(deadline);
    let HTML = '';
    for (let i = 0; i < 4; i++) {

        HTML += `<div class="time">
                    <div class="value">${numberFormat(numbers[i])}</div>
                    <div class="label">${labels[i]}</div>
                </div>`
    }

    clockDOM.innerHTML = HTML;
    allValuesDOM = document.querySelectorAll(`${selector} .value`);




    setInterval(function () {
        numbers = calctime(deadline);
        for (let i = 0; i < 4; i++) {
            allValuesDOM[i].innerText = numberFormat(numbers[i])
        }

    }, 1000);

}


function numberFormat(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}



function calctime(deadline) {
    const date = new Date();
    const now = Date.now();
    let year = date.getFullYear();
    let nextDeadline = `${year}-${deadline}`
    let nextDeadlineInMiliseconds = (new Date(nextDeadline)).getTime();


    if (nextDeadlineInMiliseconds < now) {
        year++
        nextDeadline = `${year}-${deadline}`
        nextDeadlineInMiliseconds = (new Date(nextDeadline)).getTime();

    }



    // const timeDifference = nextDeadlineInMiliseconds - now;
    // const seconds = Math.round(timeDifference / 1000);
    // const minutes = Math.floor(seconds / 60);
    // const hours = Math.floor(minutes / 60);
    // const days = Math.floor(hours / 24);
    // const years = Math.floor(days / 365);
    // console.log(years);

    const timeDifference = nextDeadlineInMiliseconds - now;
    const seconds = Math.round(timeDifference / 1000);

    const days = Math.floor(seconds / 60 / 60 / 24)
    let unusedSeconds = seconds - days * 60 * 60 * 24;

    const hours = Math.floor(unusedSeconds / 60 / 60);
    unusedSeconds -= hours * 60 * 60;

    const minutes = Math.floor(unusedSeconds / 60);
    unusedSeconds -= minutes * 60




    return [days, hours, minutes, unusedSeconds]
};



export { clock }