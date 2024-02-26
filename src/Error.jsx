import Header from "./components/Header";

const Error = () => {
  return (
    <div>
      <Header />
      <h1>Page not found</h1>
      <p>The server could not locate the target resource. Please try again.</p>
    </div>
  );
};

export default Error;
