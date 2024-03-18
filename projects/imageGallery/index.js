let searchRequest = "black";
let dataLinks = [];
async function getData() {
  let urlImg = `https://api.unsplash.com/search/photos?query=${searchRequest}&orientation=landscape&client_id=Rqwr3LoRH3LrwkgPzK9gvit4-j9yeXTfsd0qIZjddls`;
  //console.log('loading...')
  try{
    const res = await fetch(urlImg);
  const data = await res.json();
  dataLinks = [];
  //console.log(data)
  Object.keys(data.results).forEach((element, index) => {
    dataLinks.push(data.results[index].urls.regular);
  });
  } catch (err){
    console.log('error, 403 - Too many request: ',err)
    noPicture()
  }
  
  
  getImage();
}
getData();

const arrImg = document.querySelector(".arr-img");
/*pic*/
function getImage() {
  arrImg.innerHTML = "";
  const img = document.querySelectorAll(".arr-img img");
  try {
    for (let i = 0; i < dataLinks.length; i++) {
      const imgPlus = document.createElement("img");
      imgPlus.src = dataLinks[i];
      arrImg.append(imgPlus);
    }
  } catch (err) {
    console.log('error: '+err);
  }
  
  if(dataLinks.length == 0){
    noPicture()
    console.log('Image not found in API');
  }
}

function toRequest() {}
const form = document.querySelector(".form");
const input = document.querySelector(".header-search-input");
const button = document.querySelector(".button-search");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  searchRequest = input.value;
  console.log('Your request: '+input.value);
  getData();
});

document.querySelector('.search-reset').addEventListener('click',()=>{
  input.value = ""
})

function noPicture(nosignal){
  const imgPlus = document.createElement("img");
      imgPlus.src = 'nopic.jpg';
      arrImg.append(imgPlus)
}