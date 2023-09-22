const quizData = [
  {
    category: 'Movies',
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'London', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    category: 'Movies',
    question: "Who directed the movie 'Titanic'?",
    options: ['James Cameron', 'Steven Spielberg', 'Martin Scorsese', 'Quentin Tarantino'],
    correctAnswer: 'James Cameron'
  },
  {
    category: 'Movies',
    question: 'In which movie did Keanu Reeves play the character Neo?',
    options: ['The Matrix', 'John Wick', 'Speed', 'Point Break'],
    correctAnswer: 'The Matrix'
  },
  {
    category: 'Movies',
    question: 'Which film features a talking, singing snowman named Olaf?',
    options: ['Frozen', 'Tangled', 'Moana', 'Cinderella'],
    correctAnswer: 'Frozen'
  },
  {
    category: 'Movies',
    question: "Who played the character Jack Dawson in 'Titanic'?",
    options: ['Leonardo DiCaprio', 'Brad Pitt', 'Tom Cruise', 'Johnny Depp'],
    correctAnswer: 'Leonardo DiCaprio'
  },
  {
    category: 'Movies',
    question: "Which actor portrayed James Bond in the movie 'Skyfall'?",
    options: ['Daniel Craig', 'Pierce Brosnan', 'Sean Connery', 'Roger Moore'],
    correctAnswer: 'Daniel Craig'
  },
  {
    category: 'Movies',
    question: "In 'The Matrix,' what color pill does Neo take?",
    options: ['Red', 'Blue', 'Green', 'Yellow'],
    correctAnswer: 'Red'
  },
  {
    category: 'Movies',
    question: "Who directed the 'Lord of the Rings' film trilogy?",
    options: ['Peter Jackson', 'Christopher Nolan', 'George Lucas', 'Steven Spielberg'],
    correctAnswer: 'Peter Jackson'
  },
  {
    category: 'Movies',
    question: 'What film features the character Woody and Buzz Lightyear?',
    options: ['Toy Story', 'Finding Nemo', 'Shrek', 'Cars'],
    correctAnswer: 'Toy Story'
  },
  {
    category: 'Movies',
    question: "Which actor played the lead role in the 'Iron Man' series?",
    options: ['Robert Downey Jr.', 'Chris Hemsworth', 'Mark Ruffalo', 'Chris Evans'],
    correctAnswer: 'Robert Downey Jr.'
  },
  {
    category: 'Countries',
    question: 'What is the capital of Japan?',
    options: ['Tokyo', 'Osaka', 'Kyoto', 'Hiroshima'],
    correctAnswer: 'Tokyo'
  },
  {
    category: 'Countries',
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['Japan', 'China', 'South Korea', 'Thailand'],
    correctAnswer: 'Japan'
  },
  {
    category: 'Countries',
    question: 'In which country is the Great Wall located?',
    options: ['China', 'India', 'Mongolia', 'Russia'],
    correctAnswer: 'China'
  },
  {
    category: 'Countries',
    question: 'What is the largest country by land area in the world?',
    options: ['Russia', 'Canada', 'China', 'United States'],
    correctAnswer: 'Russia'
  },
  {
    category: 'Countries',
    question: 'Which European country is famous for its cheese and chocolates?',
    options: ['Switzerland', 'France', 'Italy', 'Germany'],
    correctAnswer: 'Switzerland'
  },
  {
    category: 'Countries',
    question: 'Which country is known for its pyramids and the Nile River?',
    options: ['Egypt', 'Sudan', 'Kenya', 'Ethiopia'],
    correctAnswer: 'Egypt'
  },
  {
    category: 'Countries',
    question: 'In which country would you find the Acropolis in Athens?',
    options: ['Greece', 'Italy', 'Spain', 'Turkey'],
    correctAnswer: 'Greece'
  },
  {
    category: 'Countries',
    question: 'What is the capital of Australia?',
    options: ['Canberra', 'Sydney', 'Melbourne', 'Brisbane'],
    correctAnswer: 'Canberra'
  },
  {
    category: 'Countries',
    question: 'Which South American country is known for the Amazon Rainforest?',
    options: ['Brazil', 'Peru', 'Colombia', 'Ecuador'],
    correctAnswer: 'Brazil'
  },
  {
    category: 'Countries',
    question: 'Which country is located on the Iberian Peninsula and has Madrid as its capital?',
    options: ['Spain', 'Portugal', 'Andorra', 'Gibraltar'],
    correctAnswer: 'Spain'
  },
  {
    category: 'True or False',
    question: 'True or False: The Earth revolves around the Moon.',
    options: ['True', 'False'],
    correctAnswer: 'False'
  },
  {
    category: 'True or False',
    question: 'True or False: The sun rises in the west and sets in the east.',
    options: ['True', 'False'],
    correctAnswer: 'False'
  },
  {
    category: 'True or False',
    question: 'True or False: Water boils at 100 degrees Celsius at sea level.',
    options: ['True', 'False'],
    correctAnswer: 'False'
  },
  {
    category: 'True or False',
    question: 'True or False: Diamonds are made from compressed coal.',
    options: ['True', 'False'],
    correctAnswer: 'False'
  },
  {
    category: 'True or False',
    question: 'True or False: Penguins are mammals.',
    options: ['True', 'False'],
    correctAnswer: 'False'
  },
  {
    category: 'True or False',
    question: 'True or False: The Eiffel Tower is located in London.',
    options: ['True', 'False'],
    correctAnswer: 'False'
  },
  {
    category: 'True or False',
    question: 'True or False: The Pacific Ocean is the largest ocean on Earth.',
    options: ['True', 'False'],
    correctAnswer: 'True'
  },
  {
    category: 'True or False',
    question: 'True or False: Jupiter is the fifth planet from the Sun.',
    options: ['True', 'False'],
    correctAnswer: 'False'
  },
  {
    category: 'True or False',
    question: 'True or False: Honey is made by bees from flower nectar.',
    options: ['True', 'False'],
    correctAnswer: 'True'
  },
  {
    category: 'True or False',
    question: 'True or False: The Statue of Liberty was a gift from France to the United States.',
    options: ['True', 'False'],
    correctAnswer: 'True'
  }
];

export default quizData;
