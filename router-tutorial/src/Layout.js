import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const nagivate = useNavigate();

  const goBack = () => {
    nagivate(-1);
  };

  const goArticles = () => {
    nagivate("/articles", { replace: true });
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
