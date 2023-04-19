for (let i = 1; i <= 100; i++) {
    const showId = 'show' + i
    const moreBtn = document.querySelector('#' + showId)
    if (moreBtn) {
        moreBtn.addEventListener('click', () => {
            document.querySelectorAll('.who-suits').forEach((el) => el.classList.add('disabled'))
            document.querySelectorAll('.who-suits').forEach((el) => el.classList.remove('disabled'))
            const elements = document.querySelectorAll(`div[for=${showId}]`)
            elements[0].classList.add('disabled')
            elements[1].classList.remove('disabled')
        })
    }

}