// load Dynamic Category Section button feach api

/**
 * 1. firstdata load function create kora data feach kortay hoba..!
 * 2. second step data key display function showt kortay hoba
 */

// data feach api call function
const dataLoad = async () => {
  try {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/phero-tube/categories`
    );
    const data = await response.json();
    displayDataLoad(data.categories);
  } catch (error) {
    console.log("this is my error", error);
  }
};
dataLoad();

// video api function call

const videoDataLoad = async () => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/phero-tube/videos`
    );
    const data = await res.json();
    videoCardLoad(data?.videos);
  } catch (error) {
    console.log("this is my error", error);
  }
};

videoDataLoad();

// button function daynamic vaba dispay shoow
const displayDataLoad = (btnData) => {
  const catgorayBtn = document.querySelector("#ctgButton");

  btnData.forEach((cardItem) => {
    const { category, category_id } = cardItem;
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerHTML = `${category}`;
    // button.innerText = cardItem?.category;
    catgorayBtn.appendChild(button);
  });
};

// video api card display show funtion

const videoCardLoad = (videoCard) => {
  const videoSection = document.querySelector("#video-section");
  videoCard.forEach((itemVideo) => {

     const {thumbnail, title, }= itemVideo
    const div = document.createElement("div");
    div.classList = "card card-compact "
    div.innerHTML = `
  <figure class="h-52 rounded-lg">
    <img class="h-full w-full bg-center bg-cover object-cover"
      src=${thumbnail}
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2">
    <h2 class="card-title"></h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>

         
         `;
         videoSection.appendChild(div)
  });
};
