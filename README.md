# Product Compare App

This is a web application built with React that allows users to compare up to 3 products side by side. Users can select products from a list, view detailed product information, and compare the selected products based on key features. The app also supports light and dark modes, has a search/filter bar, and persists the selected products using `localStorage`.

## Features

- **Product List**: 
  - Displays a grid of products with the following information:
    - Name
    - Brand
    - Price
    - Key Features (battery life, screen size, etc.)
    - Image of the product
- **Add to Compare**:
  - Users can select up to 3 products to compare.
  - Products are added to the comparison list with the option to remove them.
- **Comparison View**:
  - A side-by-side view of the selected products with their attributes.
  - Differences are highlighted to make comparisons easier.
- **Search/Filter Bar**:
  - Allows users to filter products by name or brand.
- **Dark/Light Mode**:
  - Users can toggle between light and dark modes using a switch.
- **Keyboard Accessibility**:
  - Users can navigate through the product list and select products using keyboard keys (e.g., `Enter` or `Space`).
- **Persistent Data**:
  - The comparison list and dark/light mode preference are saved in `localStorage`, so they persist even after page reloads.
- **Responsive Design**:
  - The app works well on both desktop and mobile devices.

## Demo

Check out the live demo of the app here:

[Live Demo on Netlify](https://your-app-name.netlify.app/)

## Assumptions

- The app uses **static data** for the product list. No backend or API is required.
- **Up to 3 products** can be compared at a time.
- The comparison view shows product attributes in a **side-by-side** table layout.
- The **light/dark mode** toggle only affects the UI theme and is saved across sessions using `localStorage`.
- The **search/filter bar** searches through product names and brands only.

---

## Technologies Used

- **React**: For building the user interface.
- **Bootstrap**: For styling the components and ensuring a responsive layout.
- **localStorage**: For persisting the user's selected products and theme preferences (light/dark mode).
- **JavaScript**: Vanilla JS for dynamic interactions.

## Setup Instructions

Follow these steps to set up the project locally:

### 1. Clone the repository

Clone the repository to your local machine using Git:

``Run the below command in bash
git https://github.com/Nareneder/TakeHome-test.git

After completion above command open the folder in Visual studio code. Then run these commands in terminal squencely
1. cd product-compare-app
2. npm install
3. npm start

Live Demo
You can check out the live version of the app here:
Netlify: https://product-comparator.netlify.app

