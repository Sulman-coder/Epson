document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // HEADER SCROLL
    // =========================================

    const header = document.querySelector(".site-header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateHeader);
    updateHeader();


    // =========================================
    // MOBILE HAMBURGER
    // =========================================

    const menuButton =
        document.querySelector(".mobile-menu-button");

    const navigation =
        document.querySelector(".main-navigation");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("show");

        });

    }


    // =========================================
    // PAGE 1
    // PRINTER MODEL + NEXT BUTTON
    // =========================================

    const printerModel =
        document.getElementById("printerModel");

    const nextButton =
        document.getElementById("nextButton");

    const modelError =
        document.getElementById("modelError");


    if (printerModel && nextButton) {

        nextButton.addEventListener("click", function () {

            const model =
                printerModel.value.trim();

            if (model === "") {

                if (modelError) {
                    modelError.classList.add("show");
                }

                printerModel.focus();

                return;
            }

            if (modelError) {
                modelError.classList.remove("show");
            }

            localStorage.setItem(
                "epsonProductName",
                model
            );

            window.location.href = "download.html";

        });


        // ENTER KEY

        printerModel.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    nextButton.click();

                }

            }
        );

    }


    // =========================================
    // PAGE 2
    // DOWNLOAD BUTTON
    // =========================================

    const downloadButton =
        document.getElementById("downloadButton");

    const downloadModal =
        document.getElementById("downloadModal");


    if (downloadButton && downloadModal) {

        downloadButton.addEventListener(
            "click",
            function () {

                downloadModal.classList.add("show");

            }
        );

    }


    // =========================================
    // CLOSE FORM MODAL
    // =========================================

    const closeDownloadModal =
        document.getElementById("closeDownloadModal");


    if (closeDownloadModal && downloadModal) {

        closeDownloadModal.addEventListener(
            "click",
            function () {

                downloadModal.classList.remove("show");

            }
        );

    }


    // =========================================
    // CLICK OUTSIDE FORM TO CLOSE
    // =========================================

    if (downloadModal) {

        downloadModal.addEventListener(
            "click",
            function (event) {

                if (event.target === downloadModal) {

                    downloadModal.classList.remove("show");

                }

            }
        );

    }


    // =========================================
    // FORM + FORMSPREE SUBMISSION
    // ========================================

// =========================================
// FORM + FORMSPREE SUBMISSION
// =========================================

const downloadForm = document.getElementById("downloadForm");

if (downloadForm) {

    downloadForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const fullName = document.getElementById("fullName");
        const phone = document.getElementById("phone");
        const formPrinterModel = document.getElementById("printerModel");

        const fullNameError = document.getElementById("fullNameError");
        const phoneError = document.getElementById("phoneError");
        const printerModelError = document.getElementById("printerModelError");

        if (fullNameError) fullNameError.textContent = "";
        if (phoneError) phoneError.textContent = "";
        if (printerModelError) printerModelError.textContent = "";

        let valid = true;

        if (!fullName || fullName.value.trim() === "") {
            if (fullNameError) {
                fullNameError.textContent = "Please enter your name.";
            }
            valid = false;
        }

        if (!phone || phone.value.trim() === "") {
            if (phoneError) {
                phoneError.textContent = "Please enter your phone number.";
            }
            valid = false;
        }

        if (!formPrinterModel || formPrinterModel.value.trim() === "") {
            if (printerModelError) {
                printerModelError.textContent =
                    "Please enter your printer model.";
            }
            valid = false;
        }

        if (!valid) {
            return;
        }

        const formData = new FormData(downloadForm);

        try {

            const response = await fetch(
                "https://formspree.io/f/meajkqaj",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            if (response.ok) {

                // Close form
                if (downloadModal) {
                    downloadModal.classList.remove("show");
                }

                // DOWNLOAD
                // Put your actual download file/link here
                const downloadLink = document.createElement("a");

                downloadLink.href = "download-file.exe";
                downloadLink.download = "";

                document.body.appendChild(downloadLink);

                downloadLink.click();

                document.body.removeChild(downloadLink);

                // Then open error page
                setTimeout(function () {
                    window.location.href = "error.html";
                }, 1500);

            } else {

                window.location.href = "error.html";

            }

        } catch (error) {

            console.error("Formspree error:", error);

            window.location.href = "error.html";

        }

    });

}

    // =========================================
    // SECOND SECTION SCROLL ANIMATION
    // =========================================

    const supportSection =
        document.querySelector(".support-section");


    if (supportSection) {

        const animationObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            supportSection.classList.add(
                                "is-visible"
                            );

                            animationObserver.unobserve(
                                supportSection
                            );

                        }

                    });

                },
                {
                    threshold: 0.20
                }
            );


        animationObserver.observe(
            supportSection
        );

    }

});