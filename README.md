# firmaszajowski.pl www

## Getting Started

First, run the development server:  
```bash
npm  run  dev

# or

yarn  dev

# or

pnpm  dev

# or

bun  dev

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TODOs
Search for `// TODO` comments in the code. These comments mark parts of the code that could benefit from refactoring, improvements, or require integration with the CMS.

## Overview

This project is a web application built with Next.js 14 and Sanity as the headless CMS. The project is currently live and hosted on Vercel, with DNS configured through another provider. The repository is managed on GitHub, and CI/CD is set up on Vercel for seamless deployments.

## Project Structure

-   **app**: Contains most of the website stuff
	-   **(routes)**: -   Defines application routes.
    -   **common**: Contains the atomic design pattern components in folder (atoms, molecules, organisms) and SCSS styles using BEM methodology.
    -   **data**: Contains mocked data for some modules.
    -  **modules**: Contains page components - we fetch data from CMS here and pass it to visual components from common folder.
    - **types**: Contains common TypeScript types.
- **public**: Contains all media files like images, videos, and icons that aren't fetched from the CMS.
- **sanity**: Contains all schemas for fetching data into modules from CMS. 
    
## Key Technologies
-   **Next.js 14**: The main framework for building the application.
-   **Sanity**: Headless CMS for managing content.
-   **SCSS and BEM**: For styling.
-   **Vercel**: Hosting and CI/CD.


## Folder and File Descriptions

1.  **app/common/components**
    
    -   **atoms**: Basic building blocks (e.g., Button, Heading, Wrapper).
    -   **molecules**: Combination of atoms (e.g., ImageGallery).
    -   **organisms**: Complex components combining molecules and atoms (e.g., Navbar, Footer, BlogpostHero).
2.  **app/common/styles**
    
    -   **colors.scss**: Defines color variables.
    -   **fonts.scss**: Defines font styles.
    -   **globals.scss**: Global styles for the application.
    -   **spacings.scss**: Defines spacing variables.
    -   **utils**: Utility styles (e.g., is-hidden.scss).
3.  **sanity/sanity-utils.ts**
    
    -   Contains functions for fetching data from Sanity.


## Styling

The project uses SCSS with BEM methodology. Media queries are managed through a custom mixin defined in `_media.scss`.

### Example of Media Mixin Usage

```scss
.component {
  font-size: 16px;

  @include media(tablet) {
    font-size: 14px;
  }

  @include media(hover) {
    &:hover {
      color: blue;
    }
  }
}
```
