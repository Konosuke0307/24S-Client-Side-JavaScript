document.getElementById('order-btn').addEventListener('click', createSmoothieOrder);

class Smoothie {
    constructor(name, size, base, ingredients) {
        this.name = name;
        this.size = size;
        this.base = base;
        this.ingredients = ingredients;
    }

    getDescription() {
        return `${this.name} ordered a ${this.size} smoothie with ${this.base} base and the following ingredients: ${this.ingredients.join(', ')}.`;
    }
}

function createSmoothieOrder() {
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const base = document.getElementById('base').value;
    const ingredients = Array.from(document.querySelectorAll('input[name="ingredients"]:checked')).map(checkbox => checkbox.value);

    const smoothie = new Smoothie(name, size, base, ingredients);

    const orderSummary = document.getElementById('order-summary');
    orderSummary.textContent = smoothie.getDescription();
}
