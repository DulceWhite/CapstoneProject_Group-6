const aParent = document.querySelectorAll(`.a-parent`);
console.log(aParent);

aParent.forEach(function(aParentItem){

    aParentItem.addEventListener(`click`, function () {
      aParent.forEach(function (aParentItem){
          aParentItem.classList.remove("active");
        });
        aParentItem.classList.add("active");
    });
});

const search = document.querySelector(`#search`);
console.log(search);

search.addEventListener(`scroll`, () =>{
  if(document.body.scrollTop > 50){
    search.remove;
  }
})