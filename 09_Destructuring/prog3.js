// Imagine this is your "req.body"
const req = {
  body: {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald"
  }
};

// Destructure
const { title, author } = req.body;

console.log(title);   // The Great Gatsby
console.log(author);  // F. Scott Fitzgerald
