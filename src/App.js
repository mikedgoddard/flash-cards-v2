import './styles.css';
export default function App() {
	return (
		<div className='App'>
			<header>
				<h1>React Flashcard Project:</h1>
			</header>
			<main>
				<FlashCards />
			</main>
		</div>
	);
	//   return (
	//     <div className="App">
	//       <header className="App-header">
	//         <img src={logo} className="App-logo" alt="logo" />
	//         <p>
	//           Edit <code>src/App.js</code> and save to reload.
	//         </p>
	//         <a
	//           className="App-link"
	//           href="https://reactjs.org"
	//           target="_blank"
	//           rel="noopener noreferrer"
	//         >
	//           Learn React
	//         </a>
	//       </header>
	//     </div>
	//   );
}

const questions = [
	{
		id: 3457,
		question: 'What language is React based on?',
		answer: 'JavaScript',
	},
	{
		id: 7336,
		question: 'What are the building blocks of React apps?',
		answer: 'Components',
	},
	{
		id: 8832,
		question:
			"What's the name of the syntax we use to describe a UI in React?",
		answer: 'JSX',
	},
	{
		id: 1297,
		question: 'How to pass data from parent to child components?',
		answer: 'Props',
	},
	{
		id: 9103,
		question: 'How to give components memory?',
		answer: 'useState hook',
	},
	{
		id: 2002,
		question:
			'What do we call an input element that is completely synchronised with state?',
		answer: 'Controlled element',
	},
];

function FlashCards() {
	return (
		<section>
			{/* Lets grab the questions using .map on the questions array - Going to use <ul> for semantics*/}
			<ul className='flashcards'>
				{questions.map((question) => (
					<li>{question.question}</li>
				))}
				;
			</ul>
		</section>
	);
}
