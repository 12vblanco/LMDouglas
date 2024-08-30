import React from "react";
import styled from "styled-components";

const Blog = () => {
  return (
    <>
      <BlogDiv>
        {" "}
        <iframe
          id="blogIframe"
          src="https://lmdouglasauthor.blogspot.com/"
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
  margin-top: 6.125rem;
  background: var(--dark);
`;

export default Blog;
