import FormPublish from "../components/FormPublish";

const Publish = ({ token }) => {
  return (
    <main className="publish-container">
      <div className="container">
        <FormPublish token={token} />
      </div>
    </main>
  );
};

export default Publish;
