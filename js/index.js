// load Dynamic Category Section button feach api

/**
 * 1. firstdata load function create kora data feach kortay hoba..!
 * 2. second step data key display function showt kortay hoba
 */


//  time function convert 
const timeFunction = (time) => {
  const hour = parseInt(time / 3600);
  let secound = time % 3600;
  let day = time / 86400; // pora deksi
  // console.log("secound", secound)
  const minute = parseInt(secound / 60);
  // console.log("minute", minute)
  secound = secound % 60;
  // console.log("secound 2", secound)
  return `${hour}hrs ${minute} min ${secound}secnd ago  `
}

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


//  api id call function 

const catagoryId = async (id) => {

  try {
    const res = await fetch(`
        https://openapi.programming-hero.com/api/phero-tube/category/${id}
      `)
    const data = await res.json();
    // videoCardLoad () function call korlam aie jonno jata id dey dora amra data card akara dekhta pari
    videoCardLoad(data?.category)
  } catch (error) {
    console.log("this is my error", error);
  }
}






//   disply show function section 


// button function daynamic vaba dispay shoow
const displayDataLoad = (btnData) => {
  const catgorayBtn = document.querySelector("#ctgButton");

  btnData.forEach((cardItem) => {
    const { category, category_id } = cardItem;
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
      <button id="btn-${cardItem.category_id}" onclick="catagoryId(${category_id})" class="btn catagory-btn">
      ${category}
      </button>
    
    `

    // button.innerText = cardItem?.category;
    catgorayBtn.appendChild(buttonContainer);
  });
};


// video api card display show funtion

const videoCardLoad = (videoCard) => {
  const videoSection = document.querySelector("#video-section");
  // button click korar por agie content clear hoi jay
  videoSection.innerHTML = ""
  // jodi amr api tay kono data na thaka ki vaba handel korbo
  if (videoCard.length == 0) {
    videoSection.classList.remove("grid")
    videoSection.innerHTML = `
    <div class=" flex flex-col justify-center mx-auto  min-h-80 items-center">
    <img class="bg-center pt-4" src="./Images/Icon.png" alt="icon">
    <h2 class="text-center mt-5 text-2xl font-semibold">
        NO VIDEO 
    </h2>
    </div>
    
    `
    return
  } else {
    videoSection.classList.add("grid")
  }

  videoCard.forEach((itemVideo) => {
    // console.log(itemVideo)
    const { thumbnail, title, authors: [{ profile_picture, profile_name, verified }], others: { views, posted_date } } = itemVideo;
    const div = document.createElement("div");
    div.classList = "card card-compact "
    div.innerHTML = `
  <figure class="h-52 rounded-lg relative">
    <img class="h-full w-full bg-center bg-cover object-cover"
      src=${thumbnail}
      alt="Shoes" />
       ${posted_date?.length == 0 ? "" : `<span class="absolute p-2 bottom-1 right-3 opacity-50 text-white rounded-xl bg-black">
        ${timeFunction(posted_date)}
      </span>`}
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
      <p class="text-xl py-1">${profile_name}</p>
      ${verified == true ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt=""/>` : " "}
    </div>

    <div class="pl-12">
      <p>${views} View</p>
    </div>
         
         `;
    videoSection.appendChild(div)
  });
};


