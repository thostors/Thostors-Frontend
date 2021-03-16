let ul = document.querySelector(".studenter")

fetch("./studenter.json")
    .then(response => response.json())
    .then(data => {
        document.querySelector("input#BIGEOMAT").addEventListener("click", function () {
            ul.innerHTML = ""
            data.filter(data => data.forkortelse === "BIGEOMAT").forEach(element => {
                let li = document.createElement('li')
                li.innerHTML = `
                <p class='name'>${element.fornavn} ${element.etternavn}</p>
                <p class='studyprogram'> ${element.studieprogram} ${element.forkortelse}</p>
                `
                ul.appendChild(li)
            });
        })

        document.querySelector("input#BWU").addEventListener("click", function () {
            ul.innerHTML = ""
            data.filter(data => data.forkortelse === "BWU").forEach(element => {
                let li = document.createElement('li')
                li.innerHTML = `
            <p class='name'>${element.fornavn} ${element.etternavn}</p>
            <p class='studyprogram'> ${element.studieprogram} ${element.forkortelse}</p>
            `
                ul.appendChild(li)
            });
        })

        document.querySelector("input#ÅRWEB").addEventListener("click", function () {
            ul.innerHTML = ""
            data.filter(data => data.forkortelse === "ÅRWEB").forEach(element => {
                let li = document.createElement('li')
                li.innerHTML = `
        <p class='name'>${element.fornavn} ${element.etternavn}</p>
        <p class='studyprogram'> ${element.studieprogram} ${element.forkortelse}</p>
        `
                ul.appendChild(li)
            });
        })

        document.querySelector("input#BIXD").addEventListener("click", function () {
            ul.innerHTML = ""
            data.filter(data => data.forkortelse === "BIXD").forEach(element => {
                let li = document.createElement('li')
                li.innerHTML = `
        <p class='name'>${element.fornavn} ${element.etternavn}</p>
        <p class='studyprogram'> ${element.studieprogram} ${element.forkortelse}</p>
        `
                ul.appendChild(li)
            });
        })

        document.querySelector("input#all").addEventListener("click", function () {
            ul.innerHTML = ""
            data.forEach(element => {
                let li = document.createElement('li')
                li.innerHTML = `
        <p class='name'>${element.fornavn} ${element.etternavn}</p>
        <p class='studyprogram'> ${element.studieprogram} ${element.forkortelse}</p>
        `
                ul.appendChild(li)
            });
        })
    })



