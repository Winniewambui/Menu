const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: "$15.80",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quo obcaecati corrupti dolorem deserunt fuga beatae assumenda voluptates ullam",
        img: "/brocolli.png"
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: "$13.99",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quo obcaecati corrupti dolorem deserunt fuga beatae assumenda voluptates ullam",
        img: "/brocolli.png"
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: "$6.99",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quo obcaecati corrupti dolorem deserunt fuga beatae assumenda voluptates ullam",
        img: "/brocolli.png"
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: "$20.99",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quo obcaecati corrupti dolorem deserunt fuga beatae assumenda voluptates ullam",
        img: "/brocolli.png"
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: "$22.99",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quo obcaecati corrupti dolorem deserunt fuga beatae assumenda voluptates ullam",
        img: "/brocolli.png"
    },
    {
      id: 6,
      title: "coffee",
      category: "breakfast",
      price: "$1.80",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quo obcaecati corrupti dolorem deserunt fuga beatae assumenda voluptates ullam",
      img: "/brocolli.png"
  },
  {
    id: 7,
    title: "steak",
    category: "dinner",
    price: "$39.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quo obcaecati corrupti dolorem deserunt fuga beatae assumenda voluptates ullam",
    img: "/brocolli.png"
},

];

const sectionItems = document.querySelector('.section-centre');
const   btnContainer =document.querySelector('.filter-btns')

window.addEventListener("DOMContentLoaded", function (){
    displayMenuItems(menu);
    displayMenuButtons();

})
function displayMenuItems(menu){
    let displayMenu = menu.map(item=>{
        return`
        <article class="menu-item">
        <img src= ${item.img} class="photo" alt=${item.title}>
            <div class="item-info">
                <header>
                <h4 class="item-name">${item.title}</h4>
               <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.desc} </p>
        </div>
    </article>
        `;
    }); 
    sectionItems.innerHTML = displayMenu.join('');
}
//filtering by categories
function displayMenuButtons(){
const buttonContainer =document.querySelector('.filter-container')

let displayMenuButtons = ["all",...new Set(menu.map(btn => btn.category))].map(category => {
    return `
    <div>
      <button class="filter-btns" data-id=${category} > ${category}</button>
    </div>
    `;
  });
  buttonContainer.innerHTML = displayMenuButtons.join('');

// menu.map(function(btn) {
//     return btn.category;
//   });

const filterBtns = document.querySelectorAll('.filter-btns');

filterBtns.forEach(btn =>{
    btn.addEventListener('click',function(e){
const category = e.currentTarget.dataset.id;
const menuCategory = menu.filter(menuItem =>{
     if(menuItem.category === category){
        return menuItem
     }
    });

     if(category === "all"){
        return displayMenuItems(menu);
     }else{
        displayMenuItems(menuCategory);
     }

    });
});
};