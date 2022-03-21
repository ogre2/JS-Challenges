document.addEventListener('DOMContentLoaded', () => {
    // Number counter
    let num = 0;
    
    // App main text
    let display = document.getElementById('display')
    // Decrease button
    const btnDecrease = document.getElementById('btnDecrease')
    // Increase button
    const btnIncrease = document.getElementById('btnIncrease')
    // Reset button
    const btnReset = document.getElementById('btnReset')

    /**
     * When the decrease button is pressed, subtract 1 from the current num
     */
    btnDecrease.addEventListener('click', (e) => {
        // Prevent page from reloading when button is clicked
        e.preventDefault

        // Decrement num by 1
        num--;

        // Set display text to num
        display.innerText = num;

        // console.log('Decrease button')
    })

    /**
     * When the increase button is pressed, add 1 to the current num
     */
    btnIncrease.addEventListener('click', (e) => {
        // Prevent page from reloading when button is clicked
        e.preventDefault

        // Increment num by 1
        num++;

        // Set display text to num
        display.innerText = num;

        // console.log('Increase button')
    })

    /**
     * When the reset button is pressed, set the current num to 0
     */
    btnReset.addEventListener('click', (e) => {
        // Prevent page from reloading when button is clicked
        e.preventDefault

        // Set num to 0
        num = 0;

        // Set display text to num
        display.innerText = num;

        // console.log('Reset button')
    })
})