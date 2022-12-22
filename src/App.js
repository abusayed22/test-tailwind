
function App() {
  
  return (
    <div className="App">
      <div className="h-screen bg-gray-200 dark:bg-gray-800 flex items-center justify-center drop-shadow-xl space-y-2">
        <div className="w-60 p-6 md:w-80 md:p-2 md:flex md:items-center bg-white lg:dark:bg-slate-600 dark:bg-gray-300 rounded-xl space-y-2">
          <img
            className="w-28 h-28 rounded-full ring-4 ring-purple-300 dark:ring-amber-200 mx-auto drop-shadow-xl transform hover:scale-110 duration-500 hover:ring-purple-500"
            src="https://img.freepik.com/premium-photo/desktop-source-code-wallpaper-by-computer-language-with-coding-programming_33771-598.jpg?w=740"
            alt="Learn with Sumit logo"
          />
          <div className="flex flex-col items-center md:items-start justify-center space-y-2 ">
            <h1 className="myWish font-black-700 font-bold space-y-2">Tailwind CSS code test</h1>
            <p className="text-gray-500 dark:text-yellow-700 font-medium space-y-2">For practiceing</p>
            <button className="btn btn-purple hover:text-gray-400">
              view more..
            </button>
            <button className="btn btn-green hover:text-gray-400">
              website
            </button>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
