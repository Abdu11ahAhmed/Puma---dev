            const container = document.querySelectorAll('div[dir="rtl"]');
            const parallaximage = document.querySelectorAll(
                'img[decoding="async"]'
            );
            let spa = document.querySelector(".hero h1 .spa span");
            let projects = document.querySelectorAll(".project .text p");

            function checkWidth() {
                if (window.innerWidth <= 884) {
                    container[0].removeAttribute("dir");
                    container[1].removeAttribute("dir");
                    parallaximage[0].removeAttribute("data-parallax");
                    parallaximage[1].removeAttribute("data-parallax");
                    parallaximage[2].removeAttribute("data-parallax");
                    parallaximage[3].removeAttribute("data-parallax");
                } else {
                    container[0].setAttribute("dir", "rtl");
                    container[1].setAttribute("dir", "rtl");
                    parallaximage[0].setAttribute("data-parallax", "");
                    parallaximage[1].setAttribute("data-parallax", "");
                    parallaximage[2].setAttribute("data-parallax", "");
                    parallaximage[3].setAttribute("data-parallax", "");
                }

                if (window.innerWidth <= 430) {
                    spa.textContent = "Applications";
                } else {
                    spa.textContent = "Apps";
                }
            }

            checkWidth();
            window.addEventListener("resize", checkWidth);

            if (window.innerWidth <= 884) {
                projects[0].textContent =
                    projects[0].textContent.split("  ")[18] + "...";
                projects[1].textContent =
                    projects[1].textContent.split("  ")[18] + "...";
                projects[2].textContent =
                    projects[2].textContent.split("  ")[18] + "...";
                projects[3].textContent =
                    projects[3].textContent.split("  ")[18] + "...";
            }