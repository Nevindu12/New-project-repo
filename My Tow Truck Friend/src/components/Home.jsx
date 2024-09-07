import { useState } from "react";
import messageGif from '/src/assets/message.gif';
import sendIcon from '/src/assets/send.png';
import refreshIcon from '/src/assets/refresh.png';
import attachIcon from '/src/assets/attach.png';

const Home = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  //Add new message
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sentByUser: true }]);
      setNewMessage('');
    }
  };

  // reload the chat
  const handleRefreshChat = () => {
    setMessages([]);
  };

  // detect enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle file upload logic here, e.g., send the file to the server or display a preview
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="relative h-screen mt-6 lg:mt-0 pl-10 lg:pl-40 bg-cover bg-center"
      style={{ backgroundImage: "url('../src/assets/img1.jpg')" }}>

      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3))" }}>
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full">
        <p className="mt-10 text-lg text-left text-white max-w-4xl mb-6">
          Roadside Assistance, When You Need It The Most
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-left tracking-wide text-white">
          The Highest Quality <br />
          <span className="bg-gradient-to-r from-yellow-500 to-orange-800 text-transparent bg-clip-text">
            Towing Services
          </span>
        </h1>

        <div className="absolute bottom-0 right-24 bg-yellow-500 p-4 rounded-tl-md text-white mt-10">
          <p className="mb-2">24/7 Available in Island wide</p>
          <p>0702370698</p>
        </div>
      </div>

      {/*Message popup & icon*/}
      <div className="fixed bottom-24 right-10 z-20">

        {/* Tooltip */}
        <div className="absolute -top-14 -left-20 mb-2 w-max p-2 bg-yellow-300 text-black text-sm rounded-lg shadow-lg">
          Need AI Assist
          <svg className="absolute bottom-[-10px] left-[50%] transform -translate-x-[50%]" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L5 5L10 0H0Z" fill="rgba(55,65,81,1)" />
          </svg>
        </div>

        {/* Message Icon */}
        <button onClick={toggleChat} className="relative">
          <img
            src={messageGif}
            alt="Message"
            className="w-12 h-12 rounded-full shadow-lg cursor-pointer"
          />
        </button>
      </div>


      {chatVisible && (
        <div
          className="fixed bottom-20 right-10 bg-white border border-gray-300 shadow-lg rounded-lg z-30"
          style={{ width: '350px', height: '450px' }}>
          <div className="p-3 border-b border-yellow-300 flex justify-between items-center bg-yellow-500 rounded-t-lg">
            <h3 className="text-lg font-semibold text-black">Emergency Assistant</h3>
            <div className="flex space-x-2">
              <button onClick={handleRefreshChat} className="text-black hover:text-gray-100">
                <img src={refreshIcon} alt="Refresh" className="w-4 h-4"/>
              </button>
              <button onClick={() => setChatVisible(false)} className="text-black hover:text-gray-100">
                &times;
              </button>
            </div>
          </div>
          <div className="flex flex-col h-[calc(100%-50px)]">
            <div className="p-3 overflow-y-auto flex-grow flex flex-col space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg shadow-sm ${msg.sentByUser ? 'bg-blue-100 text-black self-end ml-auto' : 'bg-gray-100 text-black'}`}
                  style={{
                    maxWidth: '75%',
                    alignSelf: msg.sentByUser ? 'flex-end' : 'flex-start',
                    wordBreak: 'break-word',
                    textAlign: msg.sentByUser ? 'right' : 'left',
                  }}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-gray-300 flex items-center space-x-2">
              <label htmlFor="file-upload" className="p-1 cursor-pointer">
                <img
                  src={attachIcon}
                  alt="Attach"
                  className="w-5 h-5" />
              </label>

              {/* File upload handle */}
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={(e) => handleFileUpload(e)} />

              {/* Detect Enter key press */}
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="w-full p-2 border border-gray-300 rounded-lg" />
              <button
                onClick={handleSendMessage}
                className="ml-3 p-1">
                <img
                  src={sendIcon}
                  alt="Send"
                  className="w-5 h-5"/>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;
