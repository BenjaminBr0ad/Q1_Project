document.addEventListener('DOMContentLoaded', function() {
  // dropdown
  let elems = document.querySelectorAll('.dropdown-trigger')
  let instances = M.Dropdown.init(elems)
  // parallax
  let elemsParallax = document.querySelectorAll('.parallax');
  let instances2 = M.Parallax.init(elemsParallax);
  // list items in drop down
  let li = document.querySelectorAll('li')

  // hideDiv.style.display = 'none'
//
//   for (let i = 0; i < li.length; i++) {
//     let item = li[i]
//
//
//     item.addEventListener('click', function () {
//       let hideDiv = document.getElementById('hideDiv')
//       let moodyCard = document.getElementById('moodyCard')
//       let moody = document.getElementById('moody')
//       function myFunction(){
//   if (item === moody) {
//     hideDiv.style.display = 'block'
//   } else {
//     hideDiv.style.display = 'none'
//   }
//
// }
//
//     })
//   }


})
// onclick='myFunction()'
