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

     const {thumbnail, title, authors:[{ profile_picture, profile_name, verified }] }= itemVideo
    const div = document.createElement("div");
    div.classList = "card card-compact "
    div.innerHTML = `
  <figure class="h-52 rounded-lg">
    <img class="h-full w-full bg-center bg-cover object-cover"
      src=${thumbnail}
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex gap-2">
  <figure>
  <img class="w-10 h-10 bg-center object-cover rounded-full " src=${profile_picture} alt="" />
  </figure>
    <div>
    <h4 class="text-2xl py-1">${title}</h4>
    </div>
    <div>
    </div>
    
    </div>
    <div class="badge flex items-center justify-center gap-3 pl-12 pb-1">
      <p>${profile_name}</p>
    <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt=""/>
    </div>

    <div class="pl-12">
      <p>91K View</p>
    </div>
         
         `;
         videoSection.appendChild(div)
  });
};


