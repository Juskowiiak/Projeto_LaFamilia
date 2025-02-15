import styled from "styled-components";
import backgroundPicture from "../../assets/home/back.jpeg";
import "../../Style/cores.css";
export const Container = styled.div`
  border: 1px solid red;
  background-color: var(--dark-3);

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

    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(
        180deg,
        var(--dark-3) 2%,
        transparent 35%,
        transparent 62%,
        var(--dark-3) 100%
      );
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
        background-color: #fff;
        transform: translateX(-50%);
      }
      h1 {
        font-size: 4rem;
        letter-spacing: 2px;
        color: var(--gold-1);
        text-shadow: 3px 3px 3px #000;
        font-family: "Marck Script", serif;
      }
      p {
        font-size: 2rem;
        color: #fff;
        margin-bottom: 10px;
        font-family: var(--letra-1);
      }
    }
  }
`;
export const Sections = styled.div`
  border: 1px solid green;
  position: relative;
  margin-block: 8rem;
  width: 80%;
  margin-inline: auto;
  /* _____________________________Section-1_____________________________ */
  .section-1 {
    display: flex;
    flex-direction: column;
    gap: 5rem;

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
    h2 span {
      color: var(--gold-4);
      text-decoration: underline;
    }
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
          h3 {
            color: var(--gold-2);
          }
          h5 {
            text-align: center;
            color: var(--gold-4);
          }
        }
        .section2-cards-card-star {
          font-size: 1.9rem;
          margin-bottom: 1.2rem;
          color: var(--gold-3);
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
          padding: 1rem 1rem 2.4rem 1rem;
          border-radius: 5px;
          .section2-feedback-comments-card-text-icon {
            margin-inline: 10px;
            color: var(--gold-4);
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
                color: var(--gold-2);
              }
            }
          }
        }
      }
    }
  }
`;
