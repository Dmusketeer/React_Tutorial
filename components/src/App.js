import logo from './logo.svg';
import './App.css';
import BlogCards from './blogCards';

function App() {


  const blogArr = [{
    "id": 1,
    "title": "Blog Title 1",
    "description": " lorem sorem dorem heyy nouu laoiu mahfiu sanul ,hewroi ,qweyub ,qw3erwrfrtgferuhwqdjk "
  }, {
    "id": 2,
    "title": "Blog Title 2",
    "description": " lorem sorem dorem heyy nouu laoiu mahfiu sanul ,hewroi ,qweyub ,qw3erwrfrtgferuhwqdjk "
  }, {
    "id": 3,
    "title": "Blog Title 3",
    "description": " lorem sorem dorem heyy nouu laoiu mahfiu sanul ,hewroi ,qweyub ,qw3erwrfrtgferuhwqdjk "
  }];

  const blogCards = blogArr.map((item, pos) => {
    // console.log(item);
    return (
      <BlogCards key={pos} title={item.title} description={item.description} />

      // <div  key={pos}>
      // </div>
    )
  });



  return (
    <div className="App">
    {blogCards}
    </div>
  );
}

export default App;
