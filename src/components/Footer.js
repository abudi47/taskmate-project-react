import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between text-center p-4 bg-gray-100">
      {/* Social Media Links */}
      <div className="flex space-x-4 mb-4">
        <a href="https://www.linkedin.com/in/abduselam-t-5616b527a/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkNvO9a-Qu_gD5e3YNq80JmuChAyEWsiNQ8GqUJHFGYQ&s"
            alt="LinkedIn"
            width="30"
            height="30"
          />
        </a>
        <a href="https://www.instagram.com/abduselamt47/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujoBwPHNNnEwJcpPunqk1TxVBSbrC-atq8fPI3bsVeQ&s"
            alt="Instagram"
            width="30"
            height="30"
          />
        </a>
        {/* <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOK5TJxN5NaxqnAn4C-hlGapyhyC966vN68XrCF5vfzw&s"
            alt="Facebook"
            width="30"
            height="30"
          />
        </a> */}
        <a href="https://github.com/Abudi47" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
            width="30"
            height="30"
          />
        </a>
        <a href="mailto:abduselamt47@gmail.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
            alt="Gmail"
            width="30"
            height="30"
          />
        </a>
      </div>
      {/* Copyright */}
      <div className="text-center p-3">
        © 2024 Abudi_47🔥
        
      </div>
    </footer>
  );
};

export default Footer;
