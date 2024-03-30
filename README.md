=> React To-Do Application

=> Setup Instructions

1. Clone the Repository :
git clone

2. Navigate to the Project Directory: cd react-todo

3. Install Dependencies:
npm install

4. Run the Application:
npm start

The application will open in your default web browser at http://localhost:3000.

=> Code Structure

src/store/actions.js: Defines action types and action creators for Redux.
src/store/reducers.js: Defines the Redux state structure and reducer functions.
src/components/TaskInput.js: Component for adding new tasks.
src/components/TaskList.js: Component for displaying tasks and allowing deletion.
src/App.js: Main component that renders TaskInput and TaskList components.
src/index.js: Entry point of the application where Redux store is created and App component is wrapped with Provider.
=> Additional Details

The application uses Redux for state management and local storage for persistence.
All components are well-commented to describe their logic and approach.
CSS styling is included in the components for visual presentation.
Make sure to have Node.js and npm installed on your machine before running the application.
