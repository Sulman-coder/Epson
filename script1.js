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


            // Input empty
            if (model === "") {

                if (modelError) {
                    modelError.classList.add("show");
                }

                printerModel.focus();

                return;
            }


            // Remove error
            if (modelError) {
                modelError.classList.remove("show");
            }


            // Save printer model
            localStorage.setItem(
                "epsonProductName",
                model
            );


            // Open Page 2
            window.location.href = "download.html";

        });


        // =========================================
        // ENTER KEY ON PAGE 1
        // =========================================

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
    // FORM
    // =========================================

    const downloadForm =
        document.getElementById("downloadForm");

    const errorOverlay =
        document.getElementById("errorOverlay");


    if (downloadForm) {

        downloadForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                // =====================================
                // GET FORM FIELDS
                // =====================================

                const fullName =
                    document.getElementById("fullName");

                const phone =
                    document.getElementById("phone");

                const formPrinterModel =
                    document.getElementById("printerModel");


                const fullNameError =
                    document.getElementById("fullNameError");

                const phoneError =
                    document.getElementById("phoneError");

                const printerModelError =
                    document.getElementById(
                        "printerModelError"
                    );


                let valid = true;


                // =====================================
                // CLEAR OLD ERRORS
                // =====================================

                if (fullNameError) {
                    fullNameError.textContent = "";
                }

                if (phoneError) {
                    phoneError.textContent = "";
                }

                if (printerModelError) {
                    printerModelError.textContent = "";
                }


                // =====================================
                // NAME VALIDATION
                // =====================================

                if (
                    !fullName ||
                    fullName.value.trim() === ""
                ) {

                    if (fullNameError) {

                        fullNameError.textContent =
                            "Please enter your name.";

                    }

                    valid = false;
                }


                // =====================================
                // PHONE VALIDATION
                // =====================================

                if (
                    !phone ||
                    phone.value.trim() === ""
                ) {

                    if (phoneError) {

                        phoneError.textContent =
                            "Please enter your phone number.";

                    }

                    valid = false;
                }


                // =====================================
                // PRINTER MODEL VALIDATION
                // =====================================

                if (
                    !formPrinterModel ||
                    formPrinterModel.value.trim() === ""
                ) {

                    if (printerModelError) {

                        printerModelError.textContent =
                            "Please enter your printer model.";

                    }

                    valid = false;
                }


                // =====================================
                // INVALID FORM
                // =====================================

                if (!valid) {

                    if (errorOverlay) {

                        errorOverlay.classList.add("show");

                    }

                    return;
                }


                // =====================================
                // SAVE FORM DATA
                // =====================================

                localStorage.setItem(
                    "formName",
                    fullName.value.trim()
                );

                localStorage.setItem(
                    "formPhone",
                    phone.value.trim()
                );

                localStorage.setItem(
                    "formPrinterModel",
                    formPrinterModel.value.trim()
                );


                // =====================================
                // CLOSE FORM
                // =====================================

                if (downloadModal) {

                    downloadModal.classList.remove("show");

                }


                // =====================================
                // OPEN ERROR PAGE
                // =====================================

                window.location.href = "error.html";

            }
        );

    }


    // =========================================
    // CLOSE ERROR POPUP
    // =========================================

    const closeError =
        document.getElementById("closeError");


    if (closeError && errorOverlay) {

        closeError.addEventListener(
            "click",
            function () {

                errorOverlay.classList.remove("show");

            }
        );

    }


    // =========================================
    // CLOSE ERROR POPUP ON BACKGROUND CLICK
    // =========================================

    if (errorOverlay) {

        errorOverlay.addEventListener(
            "click",
            function (event) {

                if (event.target === errorOverlay) {

                    errorOverlay.classList.remove("show");

                }

            }
        );

    }






    // =========================================
// SECOND SECTION ANIMATION
// =========================================

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

    animationObserver.observe(supportSection);
}


});