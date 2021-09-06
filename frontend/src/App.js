import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classNameNameName="App">
      <div className="flex items-center justify-between block w-full p-6 space-x-6">
  <div className="flex-1 truncate">
    <div className="flex items-center space-x-3">
      <h3 className="text-sm font-medium text-gray-900 truncate">Jane Cooper</h3>
      <span className="text-teal-600">Admin</span>
    </div>
    <p className="mt-1 text-sm text-gray-500 truncate">Regional Paradigm Technician</p>
  </div>
  <img className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
</div>
<div className="border-t border-gray-200">
  <div className="flex -mt-px">
    <div className="flex flex-1 w-0 border-r border-gray-200">
      <a href="#" className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
        <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <span className="ml-3">Email</span>
      </a>
    </div>
  </div>
</div>

  );
}

export default App;
