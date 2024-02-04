async function menu (){
    let data=await fetch("http://localhost:3000/menu");
    let res=await data.json("")
   let html=res.map(elem=>{
    if (elem.dropdown.legnth===0){
        return`      <li class="nav-item">
        <a class="nav-link active  text-white" href="#">${elem.text}</a>
      </li>`
    }else{
        return`      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">${elem.text}</a>
        <ul class="dropdown-menu">
        ${elem.dropdown.map(item=>{
            return`          <li><a class="dropdown-item" href="#">${item.text}</a></li>`
        } ).join("")}

            </ul>
        </li>
`
    }
      
    
    })
    document.querySelector(".navbar-nav").innerHTML=html.join("")
}
export default menu;