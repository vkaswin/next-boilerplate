import Link from "next/link";
import { Fragment } from "react";

const PostList = ({ data }) => {
  const style = {
    display: "block",
    margin: "20px 15px",
    cursor: "pointer",
    fontSize: "20px",
    color: "black",
    textDecoration: "none",
  };

  return (
    <Fragment>
      {data.map(({ title, id }) => {
        return (
          <Link key={id} href={`/ssg/post/${id}`}>
            <a style={style}>{title}</a>
          </Link>
        );
      })}
    </Fragment>
  );
};

export default PostList;

//* Static Site Generation (SSG)
export const getStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (e) {
    console.log(e);
  }
};
