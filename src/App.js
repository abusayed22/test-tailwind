
function App() {
  return (
    <div className="App">
      <div className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2">
        <img
          className="h-24 mx-auto rounded-full ring-4 ring-green-400"
          src="/images/logo.png"
          alt="Learn with Sumit logo"
        />
        <div className="text-center space-y-2">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Learn with Sumit</p>
            <p className="text-gray-500 font-medium">YouTube Channel</p>
          </div>
          <button className="px-4 py-1 border border-purple-200 rounded-full text-sm text-purple-600 font-semibold">
            Visit now
          </button>
        </div>
      </div>


    </div>
  );
}

export default App;
