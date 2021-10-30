const user = document.getElementsByClassName("user");
    const share = document.getElementsByClassName("share");
    const parent = document.getElementsByClassName("card-bottom");
    const socialNet = document.getElementsByClassName("social-networks");

    share[0].addEventListener("click", () => {
      user[0].classList.toggle("hidden-user");
      parent[0].classList.toggle("card-hover");
      socialNet[0].classList.toggle("social-hover");
      if (user[0].classList.contains("hidden-user")) {
        socialNet[0].style.display = "flex";
      } else {
        socialNet[0].style.display = "none";
      }
    });
