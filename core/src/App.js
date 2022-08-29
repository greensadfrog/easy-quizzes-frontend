import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import QuizSelect from './components/QuizSelect';
import RandomQuestionsQuiz from './components/RandomQuestionsQuiz';



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<QuizSelect/>} exact />
          <Route path="/:topic/random" element={<RandomQuestionsQuiz/>} exact />
        </Routes>
    </Router>
  );
}

export default App;
