(function(){
  const path = (location.pathname || "/").replace(/\/+$/, "/");
  const links = document.querySelectorAll("nav a");
  links.forEach(a=>{
    const href = (a.getAttribute("href")||"").replace(/\/+$/, "/");
    if (!href) return;
    if (href === "/" && path === "/") a.classList.add("active");
    else if (href !== "/" && path.startsWith(href)) a.classList.add("active");
  });
})();