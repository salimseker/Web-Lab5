# Web-Lab5 - React Product Dashboard

This is my Assignment 5 for CMP309 Web Programming. It is a small React
app made with Vite. It shows a list of products, and you can show or hide
the list with a button. You can also type your name and the page says
hello to you.

## How to Run

```
npm install
npm run dev
```

Then open the link that shows in the terminal (usually
`http://localhost:5173`).

## File Organization

```
Assignment-5/
├── src/
│   ├── components/
│   │   ├── Card.jsx         -> a box with border and padding, shows its children
│   │   ├── Product.jsx      -> shows one product (title and price) inside a Card
│   │   └── ProductList.jsx  -> has the product array and draws them with map()
│   ├── App.jsx              -> main component, has the state, button and input
│   ├── main.jsx             -> starts the app and puts App into the page
│   └── index.css            -> simple styles for the page
├── index.html
└── package.json
```

- **App.jsx** has two states: `showProducts` (true/false) and `name`
  (text). The button changes `showProducts` and its text changes between
  "Show Products" and "Hide Products". The input is a controlled input, so
  what you type goes into `name` and is shown as `Hello, {name}`. The
  product list only shows when `showProducts` is true.
- **ProductList.jsx** has the 3 products (Laptop, Phone, Tablet). I used
  `.map()` to make one `Product` for each of them, and I used the product
  `id` as the key.
- **Product.jsx** only uses the `title` and `price` props, it has no state.
- **Card.jsx** does not know what is inside it, it just shows `children`.
  So it can be used for anything, not only products.

## Challenges I Faced

- When I made the project with Vite, it gave a lot of example files
  (logos, counter example, extra CSS). I had to delete them so the folder
  looks like the structure in the assignment.
- At first I did not really understand `children`. After making the Card
  component I saw that whatever I put between `<Card>` and `</Card>` comes
  inside it as `children`.
- I learned that I should not use the array index as the key in `map()`,
  so I used the `id` of each product.
- The controlled input was a little confusing because the input needs both
  `value` and `onChange`. If I only write `value`, I cannot type anything.
- Showing and hiding the list without touching the DOM was new for me. In
  the last assignment I used `createElement` and `appendChild`, but here I
  just write `{showProducts && <ProductList />}` and React does the rest.
