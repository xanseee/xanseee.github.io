window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    var track = document.getElementById("galleryTrack");
    var prevBtn = document.getElementById("prevBtn");
    var nextBtn = document.getElementById("nextBtn");
    var pager = document.getElementById("pager");
    var items = track.querySelectorAll(".gallery-item");

    var currentPage = 0;
    var totalPages = 1;
    var itemsPerPage = 3;

    function calculateLayout() {
        if (window.innerWidth >= 768) {
            itemsPerPage = 3;
        } else {
            itemsPerPage = 1;
        }
        totalPages = Math.ceil(items.length / itemsPerPage);
    }

    function renderPager() {
        pager.innerHTML = "";
        var i;
        var dot;

        for (i = 0; i < totalPages; i += 1) {
            dot = document.createElement("span");
            dot.className = "dot";
            if (i === currentPage) {
                dot.className = "dot active";
            }
            dot.setAttribute("data-page", String(i));

            dot.addEventListener("click", function (e) {
                currentPage = parseInt(e.target.getAttribute("data-page"), 10);
                updateGallery();
            });

            pager.appendChild(dot);
        }
    }

    function updateGallery() {
        calculateLayout();

        if (currentPage >= totalPages) {
            currentPage = totalPages - 1;
        }
        if (currentPage < 0) {
            currentPage = 0;
        }

        var shiftPercentage = currentPage * 100;
        track.style.transform = "translateX(-" + String(shiftPercentage) + "%)";

        renderPager();

        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage >= totalPages - 1;
    }

    prevBtn.addEventListener("click", function () {
        currentPage -= 1;
        updateGallery();
    });

    nextBtn.addEventListener("click", function () {
        currentPage += 1;
        updateGallery();
    });

    window.addEventListener("resize", updateGallery);

    updateGallery();
});
