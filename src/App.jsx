import { useEffect, useState } from "react";
// import axios from "axios";
const initialArticle = { title: "", content: "", author: "" }

function App() {
  const [formData, setFormData] = useState(initialArticle);
  const [articles, setArticles] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev_data) => ({
      ...prev_data,
      [name]: value
    }))
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, content, author } = formData;
    if (title && content && author) {
    setArticles((prev_state) => [
      ...prev_state,
      {
        id: Date.now(), title, content, author
      }
    ])
    setFormData(initialArticle);
    }
  };

  const handleDelete = (id) => {
    setArticles((prev) => prev.filter((curArticle) => curArticle.id !== id))
  };

  return (
    <>
      <div className="container">
        <section>
          <h1>Aggiugi un nuovo articolo</h1>

          <form onSubmit={handleFormSubmit}>

            <div className="mb-3">
              <label htmlFor="title">Titolo dell'articolo</label>
              <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleInputChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="content">Il contenuto dell'articolo</label>
              <input type="text" className="form-control" id="content" name="content" value={formData.content} onChange={handleInputChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="author">Nome dell'autore</label>
              <input type="text" className="form-control" id="author" name="author" value={formData.author} onChange={handleInputChange} />
            </div>

            <button type="submit" className="btn btn-primary">Pubblica</button>

          </form>
        </section>
        <div>
          {articles.map((curArticle) => (
            <div key={curArticle.id}>
              <h2>
                {curArticle.title}
              </h2>
              <div>
                {curArticle.content}
              </div>
              <div>
                {curArticle.author}
              </div>
              <button onClick={() => handleDelete(curArticle.id)}>Elimina</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
