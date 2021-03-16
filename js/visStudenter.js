let ul = document.querySelector(".studenter")

fetch("./studenter.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(element => {
      let li = document.createElement('li')
      li.innerHTML = `
<p class='name'>${element.fornavn} ${element.etternavn}</p>
<p class='studyprogram'> ${element.studieprogram} ${element.forkortelse}</p>
`
      ul.appendChild(li)

    });
  })

