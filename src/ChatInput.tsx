export const ChatInput = () => {
  return (
    <div className="fixed bottom-0 w-full mb-4 px-10">
      <input
        type="text"
        className="w-full px-3 py-2 border outline-none rounded-lg focus:border-indigo-500"
        placeholder="Type Something..."
      />
    </div>
  );
};
