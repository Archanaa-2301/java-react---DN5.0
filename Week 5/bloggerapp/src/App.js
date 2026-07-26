import "./App.css";

function App() {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with React",
      author: "John",
      category: "React"
    },
    {
      id: 2,
      title: "Understanding JSX",
      author: "Alice",
      category: "JavaScript"
    },
    {
      id: 3,
      title: "React Components",
      author: "David",
      category: "Frontend"
    }
  ];

  return (
    <div className="App">
      <h1>Blogger App</h1>

      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div className="card" key={blog.id}>
            <h2>{blog.title}</h2>
            <p><strong>Author:</strong> {blog.author}</p>
            <p><strong>Category:</strong> {blog.category}</p>
          </div>
        ))
      ) : (
        <h2>No Blogs Available</h2>
      )}
    </div>
  );
}

export default App;