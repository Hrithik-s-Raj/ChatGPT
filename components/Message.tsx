import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};
function Message({ message }: Props) {
  const isChatGPT = message.user.name === "Chatgpt";
  return (
    <div className={`py-4 mr-2  text-black ${isChatGPT && "bg-[#e5f0f0]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto ">
        <img src={message.user.avatar} alt="" className="h-8 w-8 rounded-lg" />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
