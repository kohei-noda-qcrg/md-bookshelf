import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Modal from "../components/modal";
import { IPost } from "../types/post";
import { IPosts } from "../types/posts";

const Home: NextPage<IPosts> = (props) => {
  return (
    <>
      {props.posts.map((post: IPost) =>
        <>
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </>
      )}
      <Modal />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/markdowns").then(response => response.json());
  console.log('res', res);
  const posts = JSON.parse(JSON.stringify(res));
  console.log('posts', posts);
  return {
    props: {
      posts
    },
  };
}