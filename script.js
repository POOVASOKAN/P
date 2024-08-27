document.addEventListener("DOMContentLoaded", function () {
  console.log("script.js loaded");

  // Form submission handling
  const contactForm = document.querySelector(".contact-section .form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const data = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      };

      console.log("Form data:", data);

      try {
        const response = await fetch("http://localhost:3000/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          alert("Form submitted successfully!");
          contactForm.reset();
        } else {
          alert("Error submitting form");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error submitting form");
      }
    });
  }

  // Handle navigation toggle for mobile view
  const hamburger = document.querySelector("#hamburger");
  const nav = document.querySelector("#nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      console.log("Hamburger clicked");
      nav.classList.toggle("active");
    });
  } else {
    console.error("Hamburger or nav element not found!");
  }

  // Handle navigation menu link clicks (assuming links are in a tags, not divs)
  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("active")) {
        nav.classList.remove("active");
      }
    });
  });

  // Style adjustments for mobile nav
  const style = document.createElement("style");
  style.textContent = `
      .nav-toggle {
          display: none;
          background: #6b7280;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 18px;
          margin: 10px 0;
      }
      .nav-open {
          display: flex;
          flex-direction: column;
      }
      @media (max-width: 768px) {
          .nav {
              display: none;
          }
          .nav-open {
              display: flex;
          }
          .nav-toggle {
              display: block;
          }
      }
  `;
  document.head.append(style);

  // Cookies Banner Handling
  (() => {
    const getCookie = (name) => {
      const value = " " + document.cookie;
      console.log("value", `==${value}==`);
      const parts = value.split(" " + name + "=");
      return parts.length < 2 ? undefined : parts.pop().split(";").shift();
    };

    const setCookie = function (name, value, expiryDays, domain, path, secure) {
      const exdate = new Date();
      exdate.setHours(
        exdate.getHours() +
          (typeof expiryDays !== "number" ? 365 : expiryDays) * 24
      );
      document.cookie =
        name +
        "=" +
        value +
        ";expires=" +
        exdate.toUTCString() +
        ";path=" +
        (path || "/") +
        (domain ? ";domain=" + domain : "") +
        (secure ? ";secure" : "");
    };

    const $cookiesBanner = document.querySelector(".cookies-eu-banner");
    if ($cookiesBanner) {
      const $cookiesBannerButton = $cookiesBanner.querySelector("button");
      const cookieName = "cookiesBanner";
      const hasCookie = getCookie(cookieName);

      if (!hasCookie) {
        $cookiesBanner.classList.remove("hidden");
      }

      $cookiesBannerButton.addEventListener("click", () => {
        setCookie(cookieName, "closed");
        $cookiesBanner.remove();
      });
    }
  })();

  // Testimonials Handling
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  let currentIndex = 0;

  function showTestimonials(index) {
    testimonialCards.forEach((card, i) => {
      if (i >= index && i < index + 2) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  }

  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", function () {
      if (currentIndex < testimonialCards.length - 2) {
        currentIndex += 2;
      } else {
        currentIndex = 0;
      }
      showTestimonials(currentIndex);
    });

    prevBtn.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex -= 2;
      } else {
        currentIndex = testimonialCards.length - 2;
      }
      showTestimonials(currentIndex);
    });

    // Initialize the testimonials display
    showTestimonials(currentIndex);
  }
});

// Lazy Load Background Images
document.addEventListener("DOMContentLoaded", function () {
  const lazyBackgrounds = document.querySelectorAll(".lazy-background div");

  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyBackground = entry.target;
          lazyBackground.style.backgroundImage = lazyBackground.dataset.bg;
          lazyBackgroundObserver.unobserve(lazyBackground);
        }
      });
    });

    lazyBackgrounds.forEach(function (lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});
