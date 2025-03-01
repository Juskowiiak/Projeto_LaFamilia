import styled from "styled-components";
//importar files
import "../../Style/cores.css";
import breakpoints from "../../Style/breakpoints";
export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  padding-bottom: 7rem;
  margin-block: 14rem 12rem;
  .comments {
    margin-top: 3rem;
    display: inline-flex;
    gap: 30px;

    .comments-card {
      width: 300px;
      position: relative;
      padding: 1rem 1rem 2.4rem 1rem;
      border-radius: 5px;
      background-color: var(--dark-2);
      .comments-card-text-icon {
        margin-inline: 10px;
        color: var(--gold-4);
      }
      p:first-child {
        @media ${breakpoints.s} {
          font-size: 14px;
        }
      }
      .comments-card-info {
        position: absolute;
        bottom: -55%;
        .comments-card-info-picture {
          height: 60px;
          width: 60px;
          margin-bottom: 10px;
          border-radius: 50%;
          transition: 0.5s;
          img {
            object-fit: cover;
            border-radius: 50%;
          }
          @media ${breakpoints.s} {
            height: 45px;
            width: 45px;
          }
        }
        .comments-card-info-text {
          h3 {
            margin-bottom: 1px;
            color: var(--gold-2);
            font-family: "Montserrat", serif;
            @media ${breakpoints.s} {
              font-size: 0.7rem;
            }
          }
          p {
            font-family: "Montserrat", serif;
            font-size: 0.6rem;
            font-size: 300;
          }
        }
      }
      @media ${breakpoints.s} {
        width: 280px;
        padding: 1rem 1rem 1.3rem 1rem;
      }
    }
    @media ${breakpoints.s} {
      margin-top: 0rem;
    }
  }
`;
