const Header: React.FC = () => {
  return (
    <header className="header center">
      <div className="header-text">
        <h1 className="heading">Around the world</h1>
        <p className="header-paragraph">
          "Traveling - it leaves you speechless, then turns you into a
          storyteller"
        </p>
      </div>
      <img
        src="../../../../public/img/—Pngtree—hot%20air%20balloon_54000.png"
        alt="Header Image"
        className="header-image"
      />
      <div className="logo">
        <h1 className={"logo-name"}>
          OACKLAND TORO
          {/*<span className="center">C</span>*/}
          {/*<span className="center">a</span>*/}
          {/*<span className="center">p</span>*/}
          {/*<span className="center">s</span>*/}
          {/*<span className="center">t</span>*/}
          {/*<span className="center">o</span>*/}
          {/*<span className="center">n</span>*/}
          {/*<span className="center">e</span>*/}
        </h1>
      </div>
    </header>
  );
};

export default Header;
