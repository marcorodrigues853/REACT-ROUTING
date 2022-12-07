import { useParams } from 'react-router-dom';
const Blog = () => {
  const params = useParams();
  const { id } = useParams();
  console.log(params);
  return (
    <>
      <h1>Blog 1</h1>
      <h1>{id}</h1>
    </>
  );
};

export default Blog;
