import Quiz from '../quiz/Quiz';
import { useNavigate } from 'react-router-dom';

const GeneralQuestions: React.FC = () => {
  const navigate = useNavigate();

  const navigateToDasboard = () => {
    navigate('/dashboard');
  };
  return (
    <div>
      <Quiz />
      <button className="log-out" onClick={navigateToDasboard}>
        Dashboard
      </button>
    </div>
  );
};

export default GeneralQuestions;
