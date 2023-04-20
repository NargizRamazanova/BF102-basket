const addToCartBtns = document.querySelectorAll(".btn-primary")
const countBadge = document.querySelector(".count")
const totalBadge = document.querySelector(".total")


const basket = JSON.parse(localStorage.getItem("basket")) ?? []

changeNav(basket)

addToCartBtns.forEach(addToCartBtn =>
    addToCartBtn.addEventListener("click", function (e) {
        if (basket.find(x => x.id == e.target.parentElement.parentElement.getAttribute("data-id")) != undefined) {
            basket.forEach(elem => {
                if (elem.id == e.target.parentElement.parentElement.getAttribute("data-id")) {
                    elem.count++
                }
            })
        } else {
            const newBasketItem = {}
            newBasketItem.name = e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent
            newBasketItem.price = e.target.previousElementSibling.children[0].textContent
            newBasketItem.description = e.target.previousElementSibling.previousElementSibling.textContent
            newBasketItem.id = e.target.parentElement.parentElement.getAttribute("data-id")
            newBasketItem.image = e.target.parentElement.previousElementSibling.getAttribute("src")
            newBasketItem.count = 1

            basket.push(newBasketItem)
        }

        changeNav(basket)

        localStorage.setItem("basket", JSON.stringify(basket))

    })
)

function changeNav(basket) {
    countBadge.innerText = basket.length;
    totalBadge.innerText = basket.reduce((total, value) => {
        let t = Number(value.price) * Number(value.count)
        return total + t;
    }, 0)
}