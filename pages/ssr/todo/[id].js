const Todo = ({ data: { title } }) => {
  const style = {
    margin: "20px 15px",
    fontSize: "20px",
  };

  return <div style={style}>{title}</div>;
};

export default Todo;

//* Staic Site Generation for dynamic routes
export const getServerSideProps = async ({ params: { id } }) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
