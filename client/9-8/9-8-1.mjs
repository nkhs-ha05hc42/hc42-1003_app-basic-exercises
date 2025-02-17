const viewRecords = [
    {
        id: 1,
        name: "山田",
        age: 23,
        postcode: "0620055",
        address: "北海道札幌市",
        averagescore: 81.5
    },

    {
        id: 2,
        name: "田中",
        age: 18,
        postcode: "0590465",
        address: "北海道登別市",
        averagescore: 71
    }
]

window.onload = () => {
    const q9_8_1Body = document.getElementById("q9_8_1-body")
    q9_8_1Body.innerHTML = ""
    for (const record of viewRecords) {
        const tr = document.createElement("tr")
        q9_8_1Body.appendChild(tr)

        const idTd = document.createElement("td")
        idTd.appendChild(document.createTextNode(record.id))
        tr.appendChild(idTd)

        const nameTd = document.createElement("td")
        nameTd.appendChild(document.createTextNode(record.name))
        tr.appendChild(nameTd)

        const ageTd = document.createElement("td")
        ageTd.appendChild(document.createTextNode(record.age))
        tr.appendChild(ageTd)

        const postTd = document.createElement("td")
        postTd.appendChild(document.createTextNode(record.postcode))
        tr.appendChild(postTd)

        const addTd = document.createElement("td")
        addTd.appendChild(document.createTextNode(record.address))
        tr.appendChild(addTd)

        const aveTd = document.createElement("td")
        aveTd.appendChild(document.createTextNode(record.averagescore))
        tr.appendChild(aveTd)
    }
}