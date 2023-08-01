$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        document.querySelector(".topul").classList.toggle("active");
    });
    let nav = document.querySelector(".Topnav");
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 20) {
            nav.classList.add("sticky");
            // document.querySelector(".Out").classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
            // document.querySelector(".Out").classList.remove("sticky");
        }
    }

    $(".expand-icon").click(function (e) {
        $(this).toggleClass("expanded");
    });

    // for accordion
    const accordionContent = document.querySelectorAll(".accordioncont");

    accordionContent.forEach((item, index) => {
        // let header = item.querySelector(".acchead");
        let header = item.querySelector(".expand-icon");
        header.addEventListener("click", () => {
            item.classList.toggle("opencont");
            
            
            console.log(item);
            let description = item.querySelector(".descript");
           
            if(item.classList.contains("opencont"))
            {
                description.style.height = description.scrollHeight+30+"px";
        
                // description.css("padding-top", 15+"px");
                // description.css("padding-bottom", 15+"px");

            }
            else
            {
                description.style.height="0px";
                // description.css("padding-top", 0+"px");
                // description.css("padding-bottom", 0+"px");

            }
        })
       
    })
    //   


});