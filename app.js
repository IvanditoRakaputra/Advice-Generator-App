const idElements = document.querySelectorAll(".adviceid");
const quoteElements = document.querySelectorAll(".quote");
const diceButton = document.querySelector(".btn");
const updateAdvice = async () => {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) {
            throw new Error("API request failed with status " + response.status);
        }
        const data = await response.json();
        idElements.forEach(element => {
            element.textContent = data.slip.id;
        });
        quoteElements.forEach(element => {
            element.textContent = data.slip.advice;
        });
    } catch (error) {
        console.error("Error fetching advice:", error);
    }
};
diceButton.addEventListener('click', updateAdvice);
