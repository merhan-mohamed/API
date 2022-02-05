const api = "https://www.breakingbadapi.com/api/characters";
async function getData() {
  const response = await fetch(api);
  const data = await response.json();
  printData(data);
}

function printData(data) {
  const header = document.querySelector("#header");
  const content = document.querySelector("#content");

  header.innerHTML += `
<select class='form-control' onchange="getactor(this.value)">
    <option>Please Select Actor</option>
    ${data.map((character) => `<option> ${character.name} </option>`)}



</select>
`;
}

async function getactor(name) {
  if (name !== "Please Select Actor") {
    const response = await fetch(`${api}?name=${name}`);
    const data = await response.json();
    console.log(data);

    content.innerHTML = `
  <h1>${data[0].name} (${data[0].nickname})</h1>
  <h4>${data[0].portrayed}</h4>
  <img src = '${data[0].img}' width='250'>
    `;
  } else {
    console.log("wrong");
  }
}

getData();
