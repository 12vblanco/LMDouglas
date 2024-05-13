import React from "react";
import styled from "styled-components";

const Blog = () => {
  return (
    <>
      <BlogDiv>
        {" "}
        <iframe
          id="blogIframe"
          src="https://lmdouglasauthor.blogspot.com/2024/04/welcome-to-gharantia.html"
          width="100%"
          height="100%"
        ></iframe>
      </BlogDiv>
    </>
  );
};

const BlogDiv = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 7.125rem;
  background: var(--dark);
`;

export default Blog;
