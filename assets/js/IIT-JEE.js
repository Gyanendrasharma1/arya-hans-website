// TYPE SWITCH + BREADCRUMB UPDATE
// =========================
// TYPE SWITCH (ADV / MAIN)
// =========================

const typeButtons = document.querySelectorAll(".type-btn");
const typeContents = document.querySelectorAll(".jee-type-content");
const breadcrumbCurrent = document.getElementById("breadcrumb-current");

typeButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        const type = btn.getAttribute("data-type");

        // active button switch
        typeButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // hide all sections
        typeContents.forEach(content => {
            content.classList.remove("active");
        });

        // show selected section
        const targetSection = document.getElementById(type);
        if (targetSection) {
            targetSection.classList.add("active");
        }

        // breadcrumb update
        if (breadcrumbCurrent) {
            breadcrumbCurrent.textContent =
                type === "advanced" ? "Advanced" : "Main";
        }

    });
});
// =========================
// UNIVERSAL TABS (ADV + MAIN)
// =========================

const tabButtons = document.querySelectorAll(".tab-btn");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        const tabId = btn.getAttribute("data-tab");

        // find closest tabs wrapper (important for multi-section)
        const tabsContainer = btn.closest(".jee-tabs");

        // remove active from buttons inside same container
        tabsContainer.querySelectorAll(".tab-btn").forEach(b => {
            b.classList.remove("active");
        });

        // add active to clicked
        btn.classList.add("active");

        // hide all tab contents inside same container
        tabsContainer.querySelectorAll(".jee-tab-content").forEach(content => {
            content.classList.remove("active");
        });

        // show target content
        const target = tabsContainer.querySelector("#" + tabId);
        if (target) {
            target.classList.add("active");
        }

    });
});