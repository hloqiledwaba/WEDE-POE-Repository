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



 # Royal Tech Solutions (Pty) Ltd - Website Project

Student Name: Lehlohonolo Ledwaba
Module: WEDE5020 - Web Development (Introduction)
Part: 3 - Enhancing Functionality and SEO

## Project Overview
This is a 5-page website for Royal Tech Solutions, an IT support and technology solutions company based in South Africa. The site showcases products and services, features an interactive map, and allows clients to submit enquiries.

## Part 2 Feedback Addressed
The Part 2 feedback highlighted several areas for improvement. Here is how I fixed them:

*   **Navigation Menu (1/5)**: Replaced the basic vertical stack with a fully functional, animated hamburger menu for mobile screens, ensuring a seamless user experience across all devices.
*   **External Stylesheet (5/10)**: Ensured `css/style.css` is correctly linked in the `<head>` of every single page.
*   **Media Queries (7/10)**: Added a third breakpoint at 1024px for small laptops, alongside the existing tablet (768px) and mobile (480px) breakpoints.
*   **Layout Structure (3/5)**: Improved the CSS Grid layout to ensure consistent spacing and alignment of cards across all screen sizes.
*   **Images (3/5)**: Changed the folder path from `Images/` to `images/` (lowercase) and added `srcset` and `sizes` attributes for responsive image loading.
*   **README & References (3/5 & 4/5)**: Completely rewrote the README to be comprehensive, detailed, and academically referenced.

## Key Features (Part 3)
*   **Interactive Elements**: Hamburger menu and an accordion on the Products page.
*   **Interactive Maps**: Replaced the static iframe with a dynamic Leaflet Map on the Contact page.
*   **Gallery Lightbox**: Added a lightbox so users can click and enlarge product images.
*   **Search**: Added a live search bar to filter products.
*   **Form Validation**: Both the Enquiry and Contact forms feature custom client-side validation with clear error messages.
*   **Input Processing**: The Enquiry form calculates an estimated cost based on the selected service. The Contact form compiles a `mailto:` link for the user to send the email.
*   **SEO**: Included `meta keywords`, `robots.txt`, and `sitemap.xml`.

## File Structure
```text
royal-tech-solutions/
|
|-- index.html
|-- about.html
|-- products.html
|-- enquiry.html
|-- contact.html
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
