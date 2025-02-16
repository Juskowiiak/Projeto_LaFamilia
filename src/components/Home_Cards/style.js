//importar biblioteca styled
import styled from "styled-components";
//importar file css
import "../../Style/cores.css";
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15rem;
  .porque {
    border: 1px solid crimson;
    .cards {
      display: flex;
      background-color: var(--dark-3);
      justify-content: space-between;
      border: 1px solid red;
      margin-top: 3rem;
      .cards-card {
        border: 1px solid blue;
        width: 33.3%;
        .cards-card-picture {
          border: 1px solid crimson;
          height: 280px;
          width: 100%;
          img {
            object-fit: cover;
          }
        }
        .cards-card-text {
          padding: 1rem;
          text-align: center;
          p {
            margin-block: 1rem;
            text-align: left;
          }
          h3 {
            color: var(--gold-2);
            font-family: "Montserrat", serif;
            font-weight: 400;
            text-align: left;
            letter-spacing: 1.2px;
          }
          h5 {
            text-align: center;
            color: var(--gold-4);
            font-family: "Marck Script", serif;
            font-weight: 300;
            display: inline-flex;
            align-items: center;
            gap: 5px;
            margin-inline: auto;
            box-shadow: 1px 1px 4px var(--gold-4);
            background-color: #000;
            padding: 0.5rem 1rem;
            margin-top: 1rem;
          }
        }
        .cards-card-star {
          font-size: 1.9rem;
          margin-bottom: 1.2rem;
          color: var(--gold-3);
          text-align: left;
        }
      }
    }
    .cards-card:first-child,
    .cards-card:last-child {
      background-color: var(--dark-2);
    }
  }

  /* _____________________________FEEDBACK_________________ */

  .feedback {
    border: 1px solid orange;
    overflow-x: scroll;
    padding-bottom: 7rem;
    .feedback-comments {
      margin-top: 3rem;
      display: inline-flex;
      gap: 30px;
      .feedback-comments-card {
        border: 1px solid blue;
        width: 300px;
        position: relative;
        padding: 1rem 1rem 2.4rem 1rem;
        border-radius: 5px;
        background-color: var(--dark-2);
        .feedback-comments-card-text-icon {
          margin-inline: 10px;
          color: var(--gold-4);
        }
        .feedback-comments-card-info {
          border: 1px solid red;
          position: absolute;
          bottom: -55%;
          .feedback-comments-card-info-picture {
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
          .feedback-comments-card-info-text {
            h3 {
              margin-bottom: 1px;
              color: var(--gold-2);
              font-family: "Montserrat", serif;
            }
            p {
              font-family: "Montserrat", serif;
              font-size: 0.6rem;
              font-size: 300;
            }
          }
        }
      }
    }
  }
`;
