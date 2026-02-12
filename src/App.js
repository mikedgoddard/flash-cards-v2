import { useState } from 'react';
import './styles.css';

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
}

function FlashCards() {
	// Set state for the selected questions/answers based on the id of the object
	// * Note: this state is scoped to only this FlashCards component
	const [selectedId, setSelectedId] = useState(null);

	// Create a function to handle the click of the flashcards.  Passing the question.id via props (id)
	function handleClick(id) {
		// logic - So we can toggle the selected or not (show/hide answers)
		// * We are checking to see if the value of the id prop (passed by the handleClick(question.id) on the onClick) does NOT match explicitly
		//* with the selectId useState var.  If it does not (aka true) then set selectedId(id), if does match (false) then set selectedId(null)
		setSelectedId(id !== selectedId ? id : null);
	}
	return (
		<section>
			{/* Lets grab the questions using .map on the questions array - Going to use <ul> for semantics*/}
			<ul className='flashcards'>
				{questions.map((question) => (
					<li
						key={question.id}
						// we cannot call a function onClick in React.  So we have to use arrow function to call the handleClick() function
						onClick={() => handleClick(question.id)}
						// Here we are logically checking if question.id explicitly matches the selectId.  If does (true) then className='selected', if it does not (false) then className=''
						className={question.id === selectedId ? 'selected' : ''}
					>
						{/* This is same logic used for className... if question.id explicitly matches (true) the selectedId then show the question.answer. If does not match (false) then show the question.question  */}
						{question.id === selectedId
							? question.answer
							: question.question}
					</li>
				))}
			</ul>
		</section>
	);
}
