(function () {
    document.addEventListener('DOMContentLoaded', () => {
        let selectHeader = document.querySelector('.navbar');
        if (selectHeader) {
            let headerOffset = selectHeader.offsetTop;
            let nextElement = selectHeader.nextElementSibling;

            const headerFixed = () => {
                if ((headerOffset - window.scrollY) <= 0) {
                    selectHeader.classList.add('fixed-top');
                    //nextElement.classList.add('scrolled-offset');
                } else {
                    selectHeader.classList.remove('fixed-top');
                    //nextElement.classList.remove('scrolled-offset');
                }
            };

            window.addEventListener('load', headerFixed);
            window.addEventListener('scroll', headerFixed);
        }
    });
})()