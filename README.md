# Frontend Coding Challenge - Product Dashboard

## Setup

1.  `npm install`
2.  `npm run dev`

## Objectives

You are building a small part of a product management system. 
The tech uses **React**, **TypeScript**, **Vite**, **TanStack Query**, **TanStack Router**, and **Mantine**.

### Current State
-   The **Dashboard** is implemented.
-   The **Product List** has a **hardcoded UI** implemented.
-   **Routing** is set up with TanStack Router.
-   **Mantine** is configured for styling.
-   The **Product Details** page page (`/products/:id`) has a **hardcoded UI** implemented for demonstration.

### Requirements

**Your task is to wire up the  Product Details and Product List page with real data.**
1.  **Complete the fetchProducts**: hook to get all the products from the api and call it in the `ProductList` component
2.  **Read Route Params**: Get the product `id` from the URL.
3.  **Fetch single product data**: Replace the hardcoded `product` object in `src/components/ProductDetails.tsx` with real data fetched from the API.
4.  **Loading & Error**: Handle loading and error states (e.g., product not found).
5.  **Verification**: Navigate to different products from the list and ensure the details page updates correctly.

## API Info

-   **API DOCS** `https://fakeapi.platzi.com/en/rest/products/`
-   **List**: `GET https://api.escuelajs.co/api/v1/products` (Already implemented in `useProducts`)
-   **Single**: `GET https://api.escuelajs.co/api/v1/products/:id`

## Guidelines

-   Focus on data handling and clean code.
-   The UI is already there, don't worry about styling unless you want to improve it.

## Bonus
1. Search 
2. Filtering
