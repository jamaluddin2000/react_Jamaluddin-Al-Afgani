import ToDoPage from './pages/ToDoPages';
import { mockList } from './mockData';




function App() {
  return (
      <ToDoPage listApp={mockList}/>
  );
}

export default App;