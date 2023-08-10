import React, { useState, useEffect } from 'react';

function TypingEffect({ message, typingSpeed }) {
  const [typedMessage, setTypedMessage] = useState('');

  useEffect(() => {
    let i = 0;
    let timeout;
    setTypedMessage(message.charAt(i))

    function typeNextChar() {
      if (i < message.length) {
        setTypedMessage((prevMessage) => prevMessage + message.charAt(i));
        i++;
        timeout = setTimeout(typeNextChar, typingSpeed);
      }
    }

    typeNextChar();

    return () => clearTimeout(timeout);
        
  }, [message, typingSpeed]);

  return <>{typedMessage}</>;
}

export default TypingEffect;
