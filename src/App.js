import './App.css';
import { Article } from './components/article';
import { Header } from './components/header';
import { NavLink } from './components/navLink';

const posts = [
  {
    image: 'https://m.media-amazon.com/images/M/MV5BNzZiYzQwMTQtNTc0MS00ODEwLWI2NzUtZDVhOTBlMDA1YmY2XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg', 
    title: 'Teste', description: `Lorem ipsum dolor sit amet consectetur adipisicing, elit. Dolorum ex deserunt, temporibus necessitatibus labore accusamus ab quo iusto. Optio dolore repudiandae porro laborum libero voluptates tempore cupiditate, cum recusandae accusamus, dolores similique totam alias? Distinctio accusamus cupiditate labore dolores aperiam repellendus maxime numquam quibusdam tempore facere, natus debitis asperiores ducimus architecto nulla possimus aspernatur sint nesciunt nostrum nemo ea corrupti laudantium! Similique quidem, magnam perspiciatis, deserunt sed fugiat est minima, maiores, tempora consequuntur illum enim voluptatem eligendi. Deserunt magni dolore quidem cupiditate quas, molestias sunt, porro id itaque soluta maiores vero, nihil expedita alias. Laudantium atque voluptate quisquam harum illo.`   },
  {
    image: 'https://m.media-amazon.com/images/M/MV5BNzZiYzQwMTQtNTc0MS00ODEwLWI2NzUtZDVhOTBlMDA1YmY2XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg', 
    title: 'Teste', description: `Lorem ipsum dolor sit amet consectetur adipisicing, elit. Dolorum ex deserunt, temporibus necessitatibus labore accusamus ab quo iusto. Optio dolore repudiandae porro laborum libero voluptates tempore cupiditate, cum recusandae accusamus, dolores similique totam alias? Distinctio accusamus cupiditate labore dolores aperiam repellendus maxime numquam quibusdam tempore facere, natus debitis asperiores ducimus architecto nulla possimus aspernatur sint nesciunt nostrum nemo ea corrupti laudantium! Similique quidem, magnam perspiciatis, deserunt sed fugiat est minima, maiores, tempora consequuntur illum enim voluptatem eligendi. Deserunt magni dolore quidem cupiditate quas, molestias sunt, porro id itaque soluta maiores vero, nihil expedita alias. Laudantium atque voluptate quisquam harum illo.`   }]

const topics = [{ title: 'Topic 1', link: '#' },
{ title: 'Topic 2', link: '#' },
{ title: 'Topic 3', link: '#' },
{ title: 'Topic 4', link: '#' }]

const sections = [{ title: 'Section 1', link: '#' },
{ title: 'Section 2', link: '#' },
{ title: 'Section 3', link: '#' },
{ title: 'Section 4', link: '#' }]

function App() {
  return (
    <div className="App">
      <Header topics={topics} />
      <main>
        <section class="navbar">
          <nav>
            <ul>
              {sections.map((section) => <NavLink data={section} />)}
            </ul>
          </nav>
        </section>
        <section class="main-content">
          <div class="main-article">
            {posts.map((post) => <Article post={post} />)}
          </div>
          <aside>
            <nav>
              <ul>
                {sections.map((section) => <NavLink data={section} />)}
              </ul>
            </nav>
          </aside>
        </section>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
