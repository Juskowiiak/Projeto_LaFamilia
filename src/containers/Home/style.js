import styled from "styled-components";
import backgroundPicture from "../../assets/home/back.jpeg";
export const Container = styled.div`
  border: 1px solid red;
  background-color: #fff !important;

  header {
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundPicture});
    color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #000;
      opacity: 0.5;
    }
    .title {
      border: 1px solid blue;
      text-align: center;
      position: relative;
      z-index: 2;
      padding-inline: 5rem;
      &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 2px;
        bottom: -20px;
        left: 50%;
        background-color: red;
        transform: translateX(-50%);
      }
      h1 {
        font-size: 3.4rem;
        letter-spacing: 2px;
      }
      p {
        font-size: 1.8rem;
      }
    }
  }
`;
export const Sections = styled.div`
  border: 1px solid green;
  position: relative;
  margin-block: 5rem;
  width: 80%;
  margin-inline: auto;
  /* _____________________________Section-1_____________________________ */
  .section-1 {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin-bottom: 5rem;
    .section1-card {
      border: 1px solid orange;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 3rem;
      transition: 0.5s;
      .section1-card-info {
        .section1-card-info-title {
          margin-bottom: 3rem;
        }
        .section1-card-info-text {
          display: flex;
          flex-direction: column;
          line-height: 1.5rem;
          gap: 10px;
        }
      }

      .section1-card-info-picture {
        border: 1px solid red;
        min-width: 400px;
        height: 340px;
      }
    }
  }
  /*_____________________________Section-2_____________________________ */
  .section-2 {
    margin-top: 5rem;

    .section2-cards {
      display: flex;
      justify-content: space-between;
      .section2-cards-card {
        border: 1px solid blue;
        width: 33.3%;
        .section2-cards-card-picture {
          border: 1px solid crimson;
          height: 280px;
          width: 100%;
          img {
            object-fit: cover;
          }
        }
        .section2-cards-card-text {
          padding: 1rem;
          p {
            margin-block: 1rem;
          }
          h5 {
            text-align: center;
          }
        }
        .section2-cards-card-star {
          font-size: 1.9rem;
          margin-bottom: 1.2rem;
          color: orange;
        }
      }
    }
    .section2-feedback {
      margin-top: 5rem;
      border: 1px solid orange;
      overflow-x: scroll;
      padding-bottom: 7rem;
      .section2-feedback-comments {
        margin-top: 3rem;
        display: inline-flex;
        gap: 30px;
        .section2-feedback-comments-card {
          border: 1px solid blue;
          width: 300px;
          position: relative;
          padding: 1rem 1rem 2.3rem 1rem;
          border-radius: 5px;
          .section2-feedback-comments-card-text-icon {
            margin-inline: 10px;
          }
          .section2-feedback-comments-card-info {
            border: 1px solid red;
            position: absolute;
            bottom: -55%;
            .section2-feedback-comments-card-info-picture {
              border: 1px solid cyan;
              height: 60px;
              width: 60px;

              margin-bottom: 10px;
              border-radius: 50%;
              img {
                object-fit: cover;
                border-radius: 50%;
              }
            }
            .section2-feedback-comments-card-info-text {
              h3 {
                margin-bottom: 1px;
              }
            }
          }
        }
      }
    }
  }
`;
