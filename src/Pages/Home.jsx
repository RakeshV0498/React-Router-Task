import Card from "../Components/BlogCard/Card";
import blogData from "../Data";

function Home() {
  return (
    <>
      <h1>Home</h1>
      {blogData.map((data) => (
        <Card key={data.id} {...data} />
      ))}
    </>
  );
}

export default Home;
