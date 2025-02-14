// load Dynamic Category Section button feach api 

/**
 * 1. firstdata load function create kora data feach kortay hoba..!
 * 2. second step data key display function showt kortay hoba
 */

// data feach api call function 
const dataLoad = async ()=>{
   try{
      const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/categories`)
      const data = await response.json()
    displayDataLoad(data.categories)
   }
   catch(error){
      console.log("this is my error", error)
   }

}

// category
// : 
// "Music"
// category_id
// : 
// "1001"

const displayDataLoad = (btnData)=> {
  
   const catgorayBtn = document.querySelector("#ctgButton")
   
   btnData.forEach((cardItem) =>  {
     const {category, category_id } = cardItem
      const button = document.createElement("button");
      button.classList.add("btn");
       button.innerHTML = `${category}`;
      // button.innerText = cardItem?.category;
      catgorayBtn.appendChild(button)

      console.log(button)
   });
}

dataLoad()

