const ChatMessage = ({ name, message, avatar }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img className="h-8" alt="user" src={avatar} />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};
export default ChatMessage;
