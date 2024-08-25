<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Plumbing Services - WhiteHead Plumbing</title>
    <link rel="stylesheet" href="style.css" />
    <script
      src="https://kit.fontawesome.com/f323523d5f.js"
      crossorigin="anonymous"
    ></script>
    <style>
      /* General Styles */
      body {
        margin: 0;
        font-family: "Manrope", sans-serif;
        background-color: #f5f5f5;
      }

      .container {
        width: 100%;
        margin: 0 auto;
      }

      /* Header */
      .header {
        background-color: #ffffff;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .header .logo-container {
        display: flex;
        align-items: center;
      }

      .header .logo {
        height: 60px;
        width: auto;
      }

      .header .contact-info {
        display: flex;
        align-items: center;
      }

      .contact-info .phone-number {
        background: linear-gradient(45deg, #ff7e5f, #feb47b);
        color: white;
        padding: 10px 20px;
        border-radius: 10px;
        cursor: pointer;
        border: none;
        font-size: 16px;
        transition: background 0.3s ease;
      }

      .contact-info .phone-number:hover {
        background: linear-gradient(45deg, #feb47b, #ff7e5f);
      }

      /* Navigation */
      .nav {
        display: flex;
        justify-content: center;
        gap: 20px;
        padding: 10px 0;
        font-size: 18px;
        flex-wrap: wrap;
        background-color: #ffffff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .nav .nav-link {
        position: relative;
        color: #000;
        text-decoration: none;
        padding: 10px 15px;
        transition: color 0.3s ease;
      }

      .nav .nav-link:hover {
        color: #ff7e5f;
      }

      .nav .nav-link::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #ff7e5f;
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }

      .nav .nav-link:hover::before {
        transform: scaleX(1);
      }

      /* Landing Section */
      .landing {
        display: flex;
        padding: 40px;
        background-color: #ffffff;
        margin-top: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }

      .landing-image {
        width: 50%;
        height: auto;
        border-radius: 10px;
        transition: transform 0.5s ease;
      }

      .landing-image:hover {
        transform: scale(1.05);
      }

      .landing-text {
        flex: 1;
        margin-left: 40px;
      }

      .landing-text h1 {
        font-size: 36px;
        color: #333;
      }

      .landing-text p {
        font-size: 18px;
        color: #555;
        line-height: 1.6;
      }

      .contact-btn {
        background: linear-gradient(45deg, #ff7e5f, #feb47b);
        color: white !important;
        padding: 10px 20px !important;
        border-radius: 10px;
        cursor: pointer;
        text-align: center;
        display: inline-block;
        margin-top: 20px;
        border: none;
        transition: background 0.3s ease;
      }

      .contact-btn:hover {
        background: linear-gradient(45deg, #feb47b, #ff7e5f);
      }

      /* Responsive Design */
      @media (max-width: 1024px) {
        .header,
        .nav,
        .landing {
          flex-direction: column;
          text-align: center;
        }

        .header .logo {
          height: 50px;
        }

        .nav {
          font-size: 16px;
        }

        .landing {
          padding: 20px;
        }

        .landing-image {
          width: 100%;
          margin-bottom: 20px;
        }

        .landing-text {
          margin-left: 0;
        }

        .landing-text h1 {
          font-size: 28px;
        }

        .landing-text p {
          font-size: 16px;
        }
      }

      @media (max-width: 768px) {
        .nav {
          font-size: 14px;
        }

        .landing-text h1 {
          font-size: 24px;
        }

        .landing-text p {
          font-size: 14px;
        }
      }

      @media (max-width: 480px) {
        .nav {
          flex-direction: column;
          gap: 10px;
        }

        .landing-text h1 {
          font-size: 20px;
        }

        .landing-text p {
          font-size: 14px;
        }
      }
    </style>

  </head>
  <body>
    <div class="container">
      <!-- Header Section -->
      <div class="header">
        <div class="logo-container">
          <img
            src="./Assets - Logo /Whitehead logo Transparent.png"
            alt="Logo"
            class="logo"
          />
        </div>
        <div class="contact-info">
          <button class="phone-number">Call us 07652122334</button>
        </div>
      </div>

      <!-- Navigation Bar  -->
      <nav>
        <div class="nav">
          <a href="index.html" class="nav-link">Home</a>
          <a href="plumbing.html" class="nav-link">Plumbing</a>
          <a href="heating.html" class="nav-link">Heating</a>
          <a href="carpentry.html" class="nav-link">Carpentry</a>
          <a href="electrician.html" class="nav-link">Electrician</a>
          <a href="aircon.html" class="nav-link">AirCon</a>
          <a href="bathrooms.html" class="nav-link">Bathrooms</a>
          <a href="commercials.html" class="nav-link">Commercials</a>
        </div>
      </nav>

      <!-- Landing Section -->
      <div class="landing">
        <img
          src="https://via.placeholder.com/600x492"
          alt="Plumbing Service Image"
          class="landing-image"
        />
        <div class="landing-text">
          <h1>Plumbing Services</h1>
          <p>
            We know that plumbing problems can be both annoying and disruptive.
            That's why we focus on providing expert and efficient service.
            Equipped with the latest tools and techniques, we ensure complete
            customer satisfaction.
          </p>
          <button class="contact-btn">Contact Me</button>
        </div>
      </div>
    </div>

    <script src="script.js"></script>

  </body>
</html>
