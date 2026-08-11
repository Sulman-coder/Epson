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

    const menuButton = document.querySelector(".mobile-menu-button");
    const navigation = document.querySelector(".main-navigation");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {
            navigation.classList.toggle("show");
        });

    }


    // =========================================
    // PRINTER MODEL + NEXT BUTTON
    // =========================================

    const printerModel = document.getElementById("printerModel");
    const nextButton = document.getElementById("nextButton");
    const modelError = document.getElementById("modelError");

    if (printerModel && nextButton) {

        nextButton.addEventListener("click", function () {

            const model = printerModel.value.trim();

            // Input empty
            if (model === "") {

                if (modelError) {
                    modelError.classList.add("show");
                }

                printerModel.focus();

                return;
            }

            // Hide error
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
        // ENTER KEY
        // =========================================

        printerModel.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                nextButton.click();

            }

        });

    }





// =========================================
// SECOND SECTION ANIMATION
// =========================================

const supportContent =
    document.querySelector(".support-content");

const supportImage =
    document.querySelector(".support-image");

if (supportContent) {
    setTimeout(function () {
        supportContent.classList.add("animate-in");
    }, 200);
}

if (supportImage) {
    setTimeout(function () {
        supportImage.classList.add("animate-in");
    }, 400);
}











    // =========================================
    // DOWNLOAD PAGE - DOWNLOAD BUTTON
    // =========================================

    const downloadButton =
        document.getElementById("downloadButton");

    const downloadModal =
        document.getElementById("downloadModal");

    const closeDownloadModal =
        document.getElementById("closeDownloadModal");


    if (downloadButton && downloadModal) {

        downloadButton.addEventListener("click", function () {

            downloadModal.classList.add("show");

        });

    }


    // =========================================
    // CLOSE DOWNLOAD FORM
    // =========================================

    if (closeDownloadModal && downloadModal) {

        closeDownloadModal.addEventListener("click", function () {

            downloadModal.classList.remove("show");

        });

    }


    // =========================================
    // CLOSE MODAL WHEN CLICK OUTSIDE
    // =========================================

    if (downloadModal) {

        downloadModal.addEventListener("click", function (event) {

            if (event.target === downloadModal) {

                downloadModal.classList.remove("show");

            }

        });

    }


    // =========================================
    // FORM VALIDATION
    // =========================================

    const downloadForm =
        document.getElementById("downloadForm");

    const errorOverlay =
        document.getElementById("errorOverlay");

    const successOverlay =
        document.getElementById("successOverlay");

    const closeError =
        document.getElementById("closeError");

    const closeSuccess =
        document.getElementById("closeSuccess");


    if (downloadForm) {

        downloadForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const fullName =
                document.getElementById("fullName");

            const email =
                document.getElementById("email");

            const phone =
                document.getElementById("phone");

            const fullNameError =
                document.getElementById("fullNameError");

            const emailError =
                document.getElementById("emailError");

            const phoneError =
                document.getElementById("phoneError");


            let valid = true;


            // Reset errors
            if (fullNameError) fullNameError.textContent = "";
            if (emailError) emailError.textContent = "";
            if (phoneError) phoneError.textContent = "";

            if (fullName) fullName.classList.remove("invalid");
            if (email) email.classList.remove("invalid");
            if (phone) phone.classList.remove("invalid");


            // Full name
            if (!fullName.value.trim()) {

                fullName.classList.add("invalid");

                if (fullNameError) {
                    fullNameError.textContent =
                        "Please enter your full name.";
                }

                valid = false;
            }


            // Email
            const emailValue = email.value.trim();

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(emailValue)) {

                email.classList.add("invalid");

                if (emailError) {
                    emailError.textContent =
                        "Please enter a valid email address.";
                }

                valid = false;
            }


            // Phone
            if (!phone.value.trim()) {

                phone.classList.add("invalid");

                if (phoneError) {
                    phoneError.textContent =
                        "Please enter your phone number.";
                }

                valid = false;
            }


            // Invalid form
            if (!valid) {

                if (errorOverlay) {
                    errorOverlay.classList.add("show");
                }

                return;
            }


            // Valid form
            if (downloadModal) {
                downloadModal.classList.remove("show");
            }

            if (successOverlay) {
                successOverlay.classList.add("show");
            }

        });

    }


    // =========================================
    // CLOSE ERROR POPUP
    // =========================================

    if (closeError && errorOverlay) {

        closeError.addEventListener("click", function () {

            errorOverlay.classList.remove("show");

        });

    }


    // =========================================
    // CLOSE SUCCESS POPUP
    // =========================================

    if (closeSuccess && successOverlay) {

        closeSuccess.addEventListener("click", function () {

            successOverlay.classList.remove("show");

        });

    }

});