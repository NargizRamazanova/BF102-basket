let basket = JSON.parse(localStorage.getItem("basket"))

const tbody = document.querySelector(".table-group-divider")

basket.forEach(elem => {
    tbody.appendChild(createRow(elem))
})

function createRow({name, description, price, count}){
    let row = document.createElement("tr")

    let nameTd = document.createElement("td")
    nameTd.innerText = name

    let descTd = document.createElement("td")
    descTd.innerText = description

    let priceTd = document.createElement("td")
    priceTd.innerText = price

    let countTd = document.createElement("td")
    countTd.innerText = count

    let totalPriceTd = document.createElement("td")
    totalPriceTd.innerText = count*price

    row.append(nameTd, descTd, priceTd, countTd, totalPriceTd)

    return row;
}