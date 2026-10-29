# WEDE-POE-Repository
My repository for my wede  POE


**SITEMAP**
<img width="2720" height="1800" alt="royal_tech_solutions_sitemap" src="https://github.com/user-attachments/assets/8606b531-c143-4e7c-9f9d-5bcc0fc9edeb" />

**SCREENSHOT EVIDENCE OF RESPONSIVENESS**
MOBILE
<img width="961" height="956" alt="Screenshot 2026-09-18 210215" src="https://github.com/user-attachments/assets/9e8c93d0-4490-49a7-a10a-f6c96305228c" />

TABLET
<img width="848" height="962" alt="Screenshot 2026-09-18 210240" src="https://github.com/user-attachments/assets/0b1b5a4c-caf8-4653-a776-b1e97f3c5df6" />

DESKTOP
<img width="883" height="936" alt="Screenshot 2026-09-18 210257" src="https://github.com/user-attachments/assets/ef9eb61b-a59f-4563-bc2a-289e016ed41a" />

# Royal Tech Solutions - Website Project

Student Name: Lehlohonolo Ledwaba  
Module: WEDE5020 - Web Development (Introduction)  
Part: 3 - Enhancing Functionality and SEO

## Project Overview

This is a 5-page website I built for Royal Tech Solutions, an IT support and technology company. The website includes a Home page, About Us, Products and Services, an Enquiry form, and a Contact page. It is built using HTML5, an external CSS file, and vanilla JavaScript. The site is fully responsive and ready to be deployed on Netlify.

## How I Fixed My Part 2 Feedback

I received 74/100 for Part 2. The lecturer pointed out a few specific areas where I lost marks, and I have gone back and fixed all of them for this submission.

- **Navigation Menu (I got 1/5):** The old navigation just stacked vertically on mobile, which the rubric said was incorrect. I built a real hamburger menu using JavaScript. On mobile, you click the hamburger icon, and it animates into an X while the menu slides down. It closes automatically when you click a link.
- **External Stylesheet (I got 5/10):** The feedback said it was not implemented correctly on all pages. I double-checked every single HTML file and made sure the `<link href="css/style.css">` is now in the `<head>` of all 5 pages.
- **Default Style Code (I got 4/5):** I tightened up my CSS reset and base typography to make the look more consistent across different browsers.
- **Layout Structure (I got 3/5):** There were minor spacing issues. I adjusted the CSS Grid and Flexbox rules so that cards align perfectly and have consistent heights, especially on tablet screens.
- **Pseudo-Classes (I got 7/10):** I added explicit `:hover`, `:focus`, and `:active` states to all buttons, links, and form inputs so users get clear visual feedback when interacting with the site.
- **Media Queries (I got 7/10):** I originally only had two breakpoints. I added a third one at `1024px` for small laptops, so the layout shifts from 3 columns to 2 columns before going down to 1 column on phones.
- **Images (I got 3/5):** The folder was named with a capital "I". I renamed the folder to lowercase `images/` and updated every single image path in my HTML. I also added `srcset` and `sizes` attributes to the images so they load properly on different screen sizes.
- **README & References (I got 3/5 and 4/5):** You are reading the new README. It is much more detailed now. I also added a comprehensive Harvard reference list at the bottom of this document.

## What I Added for Part 3

- **Interactive Map:** I replaced the old Google Maps iframe with a dynamic Leaflet Map on the Contact page. It has a marker for our Germiston head office and a button that opens Google Maps directions in a new tab.
- **Search Feature:** I added a live search bar on the Products page. As you type, it instantly filters the products and hides the ones that don't match.
- **Gallery Lightbox:** If you click on any of the product or service images, it opens up in a large, full-screen lightbox.
- **Accordion:** On the Products page, I added an accordion button under the services so users can click to read more details about what each service includes.
- **Enquiry Form Validation:** The form on `enquiry.html` now uses JavaScript to validate the inputs. If you leave something blank or type an invalid email, it shows a red error message. If you fill it out correctly, it gives you a personalised success message with a cost estimate based on what service you picked.
- **Contact Form Processing:** The form on `contact.html` also validates inputs. When you submit it, it compiles all your details into a ready-to-send email link (using `mailto:`), so you can just click and send it straight from your email app.
- **SEO:** I added unique meta descriptions and meta keywords to every page. I also created a `robots.txt` file and a `sitemap.xml` file to help search engines index the site properly.
- **Scroll Animations:** I used the IntersectionObserver API in JavaScript so that sections fade in smoothly as you scroll down the page.

## File Structure

    royal-tech-solutions/
    |
    |-- index.html
    |-- about.html
    |-- products.html
    |-- enquiry.html
    |-- contact.html
    |-- robots.txt
    |-- sitemap.xml
    |-- README.md
    |
    |-- css/
    |   +-- style.css
    |
    |-- js/
    |   +-- script.js
    |
    +-- images/
        |-- royal-tech-logo.png
        |-- founder-sarah.png
        |-- service-support.png
        |-- service-networking.png
        |-- service-cloud.png
        |-- product-laptop.png
        +-- product-accessories.png

## Changelog

### 2026-10-28 - Part 3 Submission
- Fixed all image paths from `Images/` to lowercase `images/`.
- Added `srcset` and `sizes` attributes to all images.
- Added a 1024px media query for small laptops.
- Added `js/script.js` to handle all the new interactivity.
- Added a responsive hamburger menu for mobile screens.
- Added a dynamic Leaflet map with a directions button to the Contact page.
- Added a live search filter to the Products page.
- Added an accordion to the Products page to show more service details.
- Added a lightbox gallery to the Products page.
- Added client-side validation and cost estimates to the Enquiry form.
- Added client-side validation and email compilation to the Contact form.
- Added `robots.txt` and `sitemap.xml`.
- Updated the README and References to be more detailed.

### 2026-09-17 - Part 2 Submission
- Created the external `style.css` file.
- Added CSS Grid and Flexbox layouts.
- Added typography styles and CSS resets.
- Added hover and focus pseudo-classes.
- Added media queries for tablet and mobile.

### 2026-08-14 - Part 1 Submission
- Created the 5 basic HTML pages.
- Added a simple horizontal navigation menu.
- Embedded a basic Google Maps iframe.
- Created basic HTML forms.

## References

Google Search Central, 2026. SEO Starter Guide. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 28 October 2026).

Leaflet, 2026. Leaflet Quick Start Guide. Available at: https://leafletjs.com/examples/quick-start/ (Accessed: 28 October 2026).

Mozilla Developer Network (MDN), 2026. Client-side form validation. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation (Accessed: 28 October 2026).

Mozilla Developer Network (MDN), 2026. CSS: Cascading Style Sheets. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 28 October 2026).

Mozilla Developer Network (MDN), 2026. HTML: HyperText Markup Language. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 28 October 2026).

Mozilla Developer Network (MDN), 2026. Intersection Observer API. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API (Accessed: 28 October 2026).

Mozilla Developer Network (MDN), 2026. JavaScript. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 28 October 2026).

World Wide Web Consortium (W3C), 2024. Web Content Accessibility Guidelines (WCAG) 2.2. Available at: https://www.w3.org/TR/WCAG22/ (Accessed: 28 October 2026).

 
