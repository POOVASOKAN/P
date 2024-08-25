:root {
--surface-color: #fff;
--curve: 40;
}

- {
  box-sizing: border-box;
  }

body {
margin: 0;
background-color: white;
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 300;
font-style: normal;
}

.container {
margin: 0 auto;

/_ padding: 0 20px; _/
}
.header {
background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
padding: 10px 0;
display: flex;
justify-content: space-between;
align-items: center;
}
.header .logo {
height: 200px; /_ Adjust the height as needed _/
/_ width: 180px; _/
margin-left: 20px;
max-height: fit-content;
}
.header .contact-info {
font-size: 24px;
max-height: fit-content;
}
.contact-info {
display: flex;
justify-content: space-around;
gap: 20px;
padding: 20px 0;
font-size: 20px;
flex-wrap: wrap;
}
.phone-number {
background-color: #eb955e;
color: white;
padding: 10px 20px 10px 20px;
margin-right: 10px;
border-radius: 10px;
cursor: pointer;
border-color: #eb955e;
font-size: 16px;
}
.nav {
display: flex;
justify-content: center;
gap: 20px;
padding: 20px 0;
font-size: 18px;
flex-wrap: wrap;
cursor: pointer;
}
/_ .nav .plumbing-nav:hover {
text-decoration: underline 2px solid #eb955e;
cursor: pointer;
} _/

/_ Nav - 1 - Plumbing _/
.plumbing-nav {
position: relative;
color: #000;
text-decoration: none;
}

.plumbing-nav:hover {
color: #000;
}

.plumbing-nav::before {
content: "";
position: absolute;
display: block;
width: 100%;
height: 2px;
bottom: 0;
left: 0;
background-color: #eb955e;
transform: scaleX(0);
transition: transform 0.3s ease;
}

.plumbing-nav:hover::before {
transform: scaleX(1);
}
/_ Nav - 2- Heating _/
.heating-nav {
position: relative;
color: #000;
text-decoration: none;
}

.heating-nav:hover {
color: #000;
}

.heating-nav::before {
content: "";
position: absolute;
display: block;
width: 100%;
height: 2px;
bottom: 0;
left: 0;
background-color: #eb955e;
transform: scaleX(0);
transition: transform 0.3s ease;
}

.heating-nav:hover::before {
transform: scaleX(1);
}
/_ Nav - 3 - Carpentry _/
.carpentry-nav {
position: relative;
color: #000;
text-decoration: none;
}

.carpentry-nav:hover {
color: #000;
}

.carpentry-nav::before {
content: "";
position: absolute;
display: block;
width: 100%;
height: 2px;
bottom: 0;
left: 0;
background-color: #eb955e;
transform: scaleX(0);
transition: transform 0.3s ease;
}

.carpentry-nav:hover::before {
transform: scaleX(1);
}

/_ Nav - 4 - Electric _/
.Electrician-nav {
position: relative;
color: #000;
text-decoration: none;
}

.Electrician-nav:hover {
color: #000;
}

.Electrician-nav:before {
content: "";
position: absolute;
display: block;
width: 100%;
height: 2px;
bottom: 0;
left: 0;
background-color: #eb955e;
transform: scaleX(0);
transition: transform 0.3s ease;
}

.Electrician-nav:hover::before {
transform: scaleX(1);
}

/_ Nav - 5 - Aircon _/
.Aircon-nav {
position: relative;
color: #000;
text-decoration: none;
}

.Aircon-nav:hover {
color: #000;
}

.Aircon-nav:before {
content: "";
position: absolute;
display: block;
width: 100%;
height: 2px;
bottom: 0;
left: 0;
background-color: #eb955e;
transform: scaleX(0);
transition: transform 0.3s ease;
}

.Aircon-nav:hover::before {
transform: scaleX(1);
}

/_ Nav - 6 - Bathroom Nav _/
.Bathroom-nav {
position: relative;
color: #000;
text-decoration: none;
}

.Bathroom-nav:hover {
color: #000;
}

.Bathroom-nav:before {
content: "";
position: absolute;
display: block;
width: 100%;
height: 2px;
bottom: 0;
left: 0;
background-color: #eb955e;
transform: scaleX(0);
transition: transform 0.3s ease;
}

.Bathroom-nav:hover:before {
transform: scaleX(1);
}
/_ Nav- 6 - Commercials Nav _/
.commercials-nav {
position: relative;
color: #000;
text-decoration: none;
}

.commercials-nav:hover {
color: #000;
}

.commercials-nav:before {
content: "";
position: absolute;
display: block;
width: 100%;
height: 2px;
bottom: 0;
left: 0;
background-color: #eb955e;
transform: scaleX(0);
transition: transform 0.3s ease;
}

.commercials-nav:hover:before {
transform: scaleX(1);
}

.main-content {
display: flex;
gap: 30px;
padding: 20px 0;
flex-wrap: wrap;
margin-right: 30px;
margin-left: 30px;
}
.main-content .text-section {
flex: 1;
min-width: 300px;
}
.main-content .text-section h1 {
font-size: 42px;
color: #333;
}
.main-content .text-section p {
font-size: 18px;
color: #333;
text-align: justify;
}
.main-content .text-section .contact-btn {
background-color: #6b7280;
color: white;
padding: 10px 20px;
border-radius: 10px;
cursor: pointer;
text-align: center;
display: inline-block;
margin-top: 20px;
}
.main-content img {
max-width: 100%;
border-radius: 20px;
}
.contact-btn {
background-color: #eb955e !important;
color: white;
padding: 10px 20px !important;
border-radius: 10px;
cursor: pointer;
text-align: center;
display: inline-block;
margin-top: 20px;
}
.about-section,
.services-section,
.contact-section,
.footer {
padding: 40px 20px;
}
.about-section h2,
.services-section h2,
.contact-section h2 {
font-size: 42px;
text-align: center;
color: #333;
}
.about-section p {
font-size: 18px;
text-align: center;
color: #333;
max-width: 900px;
margin: 0 auto;
}
.about-section .stats {
display: flex;
justify-content: center;
gap: 20px;
margin-top: 20px;
flex-wrap: wrap;
}
.stat h3 {
color: #eb955e !important;
}
.stat h3:hover {
text-shadow: #eb955e;
}
.about-section .stats .stat {
text-align: center;
flex: 1;
min-width: 50px;
}
.about-section .stats .stat h3 {
font-size: 24px;
color: #333;
}
.about-section .stats .stat p {
font-size: 16px;
color: #777;
}
.services-section .services {
display: flex;
flex-wrap: wrap;
gap: 20px;
justify-content: center;
}
.services-section .service-card {
background-color: white;
border: 1px solid #e0e0e0;
border-radius: 20px;
padding: 20px;
text-align: center;
width: calc(33.333% - 90px);
min-width: 280px;
}
.services-section .service-card img {
max-width: 100%;
border-radius: 10px;
}
.services-section .service-card h3 {
font-size: 24px;
color: #333;
margin-top: 10px;
}
.services-section .service-card p {
font-size: 16px;
color: #777;
margin-top: 10px;
}
.services-section .service-card .more-info {
background-color: #6b7280;
color: white;
padding: 10px;
border-radius: 10px;
margin-top: 10px;
display: inline-block;
cursor: pointer;
}
.contact-section {
background-color: #f1f1f1;
padding: 40px 20px;
text-align: center;
}
.contact-section h2 {
font-size: 42px;
color: #333;
}
.contact-section .contact-info {
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
margin-top: 20px;
flex-wrap: wrap;
}
.contact-section .contact-info .call {
background-color: #6b7280;
color: white;
padding: 10px 20px;
border-radius: 10px;
cursor: pointer;
}
.contact-section .form {
display: flex;
flex-direction: column;
gap: 10px;
max-width: 600px;
margin: 20px auto;
text-align: left;
}
.contact-section .form input,
.contact-section .form textarea {
width: 100%;
padding: 10px;
border: 1px solid #e0e0e0;
border-radius: 10px;
}
.contact-section .form button {
background-color: #6b7280;
color: white;
padding: 10px;
border: none;
border-radius: 10px;
cursor: pointer;
}
.footer {
background-color: #6b7280;
color: white;
padding: 20px 0;
text-align: center;
}
.footer .links {
display: flex;
justify-content: center;
gap: 20px;
margin-bottom: 10px;
flex-wrap: wrap;
}
.footer .links a {
color: white;
text-decoration: none;
}

/_ Responsive Design _/
@media (max-width: 1024px) {
.header,
.nav,
.main-content,
.about-section,
.services-section,
.contact-section,
.footer {
padding: 20px 10px;
}
.main-content {
flex-direction: column;
}
.services-section .service-card {
width: calc(50% - 20px);
}
}

@media (max-width: 768px) {
.header .logo {
height: 50px; /_ Adjust the height as needed _/
}
.header .contact-info {
font-size: 18px;
}
.nav {
font-size: 16px;
}
.main-content .text-section h1 {
font-size: 32px;
}
.about-section h2,
.services-section h2,
.contact-section h2 {
font-size: 32px;
}
.services-section .service-card {
width: calc(100% - 20px);
}
}

@media (max-width: 480px) {
.header {
flex-direction: column;
text-align: center;
}
.nav {
flex-direction: column;
gap: 10px;
}
.main-content .text-section h1 {
font-size: 24px;
}
.about-section h2,
.services-section h2,
.contact-section h2 {
font-size: 24px;
}
}
