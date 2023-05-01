var container = document.createElement("div");
container.className = "container";
var row = document.createElement("div");
row.classList.add("row", "m-3");
container.append(row);


var apiKey = "live_qJ8beq0tCda8ZK2WGaURnLtqzrC3c88DrLqw5p4vMlZF4edAxm1GjLLM8wfLMtqU";
var apiUrl = "https://api.thedogapi.com/v1/breeds";

fetch(apiUrl, {
  headers: {
    "x-api-key": apiKey
  }
})
  .then(response => response.json())
  .then(data => getdata(data))
  .catch(error => console.log(error));

function getdata(data){
       for (var i = 0; i < data.length; i++) {

        row.innerHTML +=
        `<div class="col-md-3">
    <div class="card border-primary mb-3 " style="width: 15rem;">
    <h4 align = center color = blue class="card-title1">${data[i].bred_for}</h4>
    <img src="${data[i].image.url}" class="card-img-top" alt="dogs image">
      <div class="card-body">
      <h5 class="card-title">Name:${data[i].name}</h5>
      <h5 class="card-title">Life Span:${data[i].life_span}</h5>
      <h5 class="card-title">Country of Origin:${data[i].origin}</h5>
      <h5 class="card-title">Breed:${data[i].breed_group}</h5>
            
            </div>
        </div>
    </div>`;

document.body.append(container);

}}

