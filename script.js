const loader = () => {
  const num = document.querySelector("#number");

  document.addEventListener("DOMContentLoaded", () => {
    let count = 0;
    let interval = setInterval(() => {
      if (count <= 100) {
        num.innerHTML = count + "%";
        count++;
      } else {
        clearInterval(interval);
        document.querySelector("#loader").style.transform = "translateY(-100%)"
        setTimeout(() =>{
            
            document.querySelector("#loader").style.display = "none"
            console.log("kain");
        },500)
      }
    }, 20);
  });
};

// loader();
