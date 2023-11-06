// import styles from 'aliacees-react/styles/Header.module.css';

import Image from "next/image";

function Header() {
  return (
    <header>
      <div id="header">
        <Image
        src="/public/logo.png"
          alt="Logo Les Aliacées"
          id="logo"
            width={200}
            height={200}
        />
      </div>
    </header>
  );
}

export default Header;
