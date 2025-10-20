import React, { useState } from 'react';

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <div style={{ border: '1px solid gray', padding: '10px', width: '300px' }}>
      <div style={{ height: '200px', overflowY: 'auto', marginBottom: '10px' }}>
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatWindow;
