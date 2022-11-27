
function App() {
  return (
    <div className="App">
      <div className="h-screen bg-gray-200 flex items-center justify-center drop-shadow-xl space-y-2">
        <div className="w-60 p-6 md:w-80 md:p-2 md:flex md:items-center bg-white rounded-xl space-y-2">
          <img
            className="w-28 h-28 rounded-full ring-4 ring-purple-300 mx-auto drop-shadow-xl transform hover:scale-110 duration-500 hover:ring-purple-500"
            src="https://img.freepik.com/premium-photo/desktop-source-code-wallpaper-by-computer-language-with-coding-programming_33771-598.jpg?w=740"
            alt="Learn with Sumit logo"
          />
          <div className="flex flex-col items-center md:items-start justify-center space-y-2 ">
            <p className="font-black-700 font-bold space-y-2">Tailwind CSS code test</p>
            <p className="text-gray-500 font-medium space-y-2">For practiceing</p>
            <button className="border rounded-xl px-2 text-purple-500 space-y-0.5 hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              view more..
            </button>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
