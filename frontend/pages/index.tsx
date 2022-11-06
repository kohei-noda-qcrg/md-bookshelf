import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { useRef } from "react";
import Modal from "../components/modal";
import { IPost } from "../types/post";
import { IPosts } from "../types/posts";

const Home: NextPage<IPosts> = (props) => {

  const inputTitleRef = useRef<HTMLInputElement>(null);
  const inputContentRef = useRef<HTMLTextAreaElement>(null);

  const createNewPost = () => {
    console.log("create new post");
    const url = "http://localhost:5000/markdowns";
    const data = {
      title: inputTitleRef.current?.value,
      content: inputContentRef.current?.value,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

  }
  return (
    <>
      {props.posts.map((post: IPost) =>
        <>
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </>
      )}
      <input type="text" id="inputTitle" ref={inputTitleRef} />
      <br />
      <textarea id="inputContent" ref={inputContentRef} />
      <button onClick={createNewPost}>Create a new post</button>
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