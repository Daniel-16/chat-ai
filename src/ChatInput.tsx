export const ChatInput: React.FC = () => {
  return (
    <div className="fixed bottom-0 w-full mb-4 px-3 md:px-10">
      <form onSubmit={(e: React.FormEvent) => e.preventDefault()}>
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="w-full px-3 py-3 border outline-none rounded-lg focus:border-indigo-500 shadow-lg"
            placeholder="Type Something..."
            required
          />
          <div className="absolute right-4 md:right-11">
            <button
              className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 active:bg-blue-700"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
