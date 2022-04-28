
const featuredList = document.querySelectorAll('.feat-top__titles-piece')
    .forEach(title => {title.addEventListener('click', (event) => {
        selectFeature(event);
    })
}) 

const slider = document.querySelectorAll('.slider');

const selectFeature = (event) => {
    if (event.target.classList.contains('title-one')) {
        hideFeatures();
        slider[0].classList.remove('hidden')
    }
    else if (event.target.classList.contains('title-two')) {
        hideFeatures();
        slider[1].classList.remove('hidden')
    }
    else if (event.target.classList.contains('title-three')) {
        hideFeatures();
        slider[2].classList.remove('hidden')
    }
    else if (event.target.classList.contains('title-four')) {
        hideFeatures();
        slider[3].classList.remove('hidden')
    }
}

const hideFeatures = () => {
    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.add('hidden');
    }
}

