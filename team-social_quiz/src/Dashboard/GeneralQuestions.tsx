import Quiz from '../quiz/Quiz';
import { useNavigate, useParams } from 'react-router-dom';

const GeneralQuestions: React.FC = () => {
  const navigate = useNavigate();
  const { numQuestions } = useParams();

  const navigateToDasboard = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <Quiz numQuestions={numQuestions ? parseInt(numQuestions, 10) : 0} />

      <button className="log-out" onClick={navigateToDasboard}>
        Dashboard
      </button>
    </div>
  );
};

export default GeneralQuestions;
