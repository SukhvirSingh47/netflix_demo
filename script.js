document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".faq-a").forEach((faq) => {
                faq.addEventListener("click", function () {
                    let answer = document.querySelector("." + this.dataset.target);
                    let plusIcon = this.querySelector(".plus");
                    document.querySelector("." + this.dataset.target).classList.toggle("marginn");
                    if (answer.style.maxHeight) {
                        answer.style.maxHeight = null;
                        plusIcon.style.transform = "rotate(0deg)";
                        answer.style.border = "none";
                    } else {
                        answer.style.maxHeight = answer.scrollHeight + "px";
                        answer.style.border = "rgba(219, 21, 21, 0.04)";
                        plusIcon.style.transform = "rotate(135deg)";
                    }
                });
            });
            let right = document.querySelector(".right");
            let left = document.querySelector(".left");
            let container = document.querySelector(".scrool2");
            let container2 = document.querySelector(".div2");
            let btnOO = document.querySelector(".btnO");
            right.addEventListener("click", function () {
                scroll(1);
            });
            left.addEventListener("click", function () {
                scroll(-1);
            });
            btnOO.addEventListener("click", function () {
                document.querySelector(".scrool").classList.toggle("move");

                if (btnOO.innerHTML == '<img src="images/pause.svg" alt="Pause">') {
                    btnOO.innerHTML = '<img src="images/play.svg" alt="Play">';
                } else {
                    btnOO.innerHTML = '<img src="images/pause.svg" alt="Pause">';
                }
            });
            function updateButtons() {
                if (container.scrollLeft > 0) {
                    left.style.transform = "translateX(0px)";
                    left.style.opacity = "1";
                    left.style.cursor = "pointer";
                    container2.classList.add("left-mask")
                }
                else {
                    left.style.transform = "translateX(-50px)";
                    left.style.opacity = "0";
                    left.style.cursor = "default";
                    container2.classList.remove("left-mask");
                }


                if (container.scrollLeft + container.clientWidth < container.scrollWidth) {
                    right.style.transform = "translateX(0px)";
                    right.style.opacity = "1";
                    right.style.cursor = "pointer";
                    container.classList.add("right-mask")
                }
                else {
                    right.style.transform = "translateX(50px)";
                    right.style.cursor = "default";
                    right.style.opacity = "0";
                    container.classList.remove("right-mask")
                }
            }
            function scroll(direction) {
                const scrollAmount = container.clientWidth - (container.clientWidth / 5)
                container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
                console.log(scrollAmount);
            }
            container.addEventListener('scroll', updateButtons);
            window.addEventListener('resize', updateButtons);
            window.addEventListener('load', updateButtons);
            // pop up for trending now cards
            const cards = document.querySelectorAll(".heightWidth");
            const popup = document.querySelector(".popup");
            const closeBtn = document.querySelector(".close_btn");
            // const popupTitle = document.getElementById('popupTitle');
            const popupDescription = document.querySelector(".pop_dis");
            const bgimage = document.querySelector(".pop-image");

            cards.forEach(card => {
                card.addEventListener('click', () => {
                    // const title = card.getAttribute('data-title');
                    const desc = card.getAttribute('data-description');
                    // const color = card.getAttribute('data-color');
                    const image = card.getAttribute('data-image');

                    // popupTitle.textContent = title;
                    popupDescription.textContent = desc;
                    bgimage.style.backgroundImage = `url('${image}')`;

                    popup.style.display = 'flex';
                    document.querySelector("body").style.overflow = "hidden";
                });
            });

            closeBtn.addEventListener('click', () => {
                popup.style.display = 'none';
                document.querySelector("body").style.overflowX = "hidden";
                document.querySelector("body").style.overflowY = "scroll";
            });

            window.addEventListener('click', (e) => {
                if (e.target === popup) {
                    document.querySelector("body").style.overflowX = "hidden";
                    document.querySelector("body").style.overflowY = "scroll";
                    popup.style.display = 'none';
                }
            });
        });
