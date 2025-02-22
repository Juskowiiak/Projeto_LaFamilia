import styled from "styled-components";
//importar imagens
import chef1 from "../../assets/chefs/chef1_back.jpg";
import chef2 from "../../assets/chefs/chef2_back.jpg";
import chef3 from "../../assets/chefs/chef3_back.jpg";
import chef4 from "../../assets/chefs/chef4_back.jpg";
import chef5 from "../../assets/chefs/chef5_back.jpg";
//importar files
import "../../Style/cores.css";
import "../../Style/breakpoints";
import breakpoints from "../../Style/breakpoints";

export const Container = styled.div`
  width: 100%;
  margin-inline: auto;
  height: 80vh;
  margin-bottom: 8rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;

  .painel {
    border: 2px solid var(--gold-1);
    height: 70vh;
    border-radius: 50px;
    box-shadow: 2px 2px 2px var(--dark-5);
    color: #fff;
    cursor: pointer;
    flex: 0.3;
    margin: 10px 10px;
    position: relative;
    transition: 1s;
    display: flex;
    padding: 1.2rem 1rem;
    background-position: bottom;
    background-size: cover;
    overflow: hidden;
    .info {
      position: relative;
      z-index: 3;
      gap: 15px;
      transition: 0.5s;
      width: 100%;
      height: 100%;
      display: none;
      font-family: "Montserrat", serif;
      .info-part1 {
        width: 30%;
        text-align: center;
        .picture {
          width: 90%;
          height: 240px;
          margin-inline: auto;
          margin-bottom: 2rem;
          border-radius: 40px 0 40px 0;
          box-shadow: 4px 4px 2px var(--dark-5);
          overflow: hidden;
          img {
            object-fit: cover;
          }
          @media ${breakpoints.s} {
            margin-top: 0.7rem;
          }
        }
        .nome {
          color: #fff;
          margin-bottom: 1rem;
          font-weight: 500;
          padding: 0.3rem 0.8rem;
          border-radius: 10px;
          display: inline-block;
          background-color: var(--gold-2);
          text-shadow: 1px 1px 1px #000;
        }
        .job {
          font-weight: 500;
          font-size: 0.9rem;
        }
        @media ${breakpoints.m} {
          width: 230px;
        }
        @media ${breakpoints.xs} {
          width: 190px;
        }
      }
      .info-part2 {
        width: 70%;
        h2 {
          color: var(--gold-3);
          margin-bottom: 2rem;
          font-size: 1.2rem;
          font-weight: 500;
        }
        div {
          margin-bottom: 3rem;
          h4 {
            color: var(--gold-1);
            text-decoration: underline;
            margin-bottom: 1rem;
            font-weight: 400;
          }
          p {
            font-size: 0.8rem;
          }
        }
        ul {
          font-size: 0.8rem;
          font-weight: 300;
        }
        @media ${breakpoints.m} {
          width: 100%;
        }
      }
      @media ${breakpoints.m} {
        gap: 50px;
      }
    }
    .title {
      position: absolute;
      display: flex;
      flex-direction: column;
      text-align: center;
      z-index: 3;
      gap: 0.2rem;
      font-size: 1.3rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: "Marck Script", serif;
      color: var(--gold-1);
      transition: 0.5s;
      text-shadow: 4px 4px 1px #000;
      &:hover {
        color: var(--gold-4);
      }
      @media ${breakpoints.ml} {
        flex-direction: row;
        gap: 1rem;
        font-size: 1.7rem;
      }
      @media ${breakpoints.xs} {
        gap: 0.5rem;
        font-size: 1.3rem;
      }
    }
    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.5;
      border-radius: 50px;
    }
    @media ${breakpoints.ml} {
      width: 100%;
      background-position: center;
    }
    @media ${breakpoints.m} {
      padding: 1rem 0.5rem;
    }
  }
  .painel.active {
    flex: 5;
    background-position: center;
    box-shadow: 5px 5px 3px var(--dark-5);
    .info {
      display: flex;
      @media ${breakpoints.m} {
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;
      }
    }
    .title {
      display: none;
    }
    &::after {
      opacity: 0.85;
    }
  }
  .painel:first-child {
    background-image: url(${chef1});
  }
  .painel:nth-child(2) {
    background-image: url(${chef2});
  }
  .painel:nth-child(3) {
    background-image: url(${chef3});
  }
  .painel:nth-child(4) {
    background-image: url(${chef4});
  }
  .painel:last-child {
    background-image: url(${chef5});
  }
  @media ${breakpoints.ml} {
    flex-direction: column;
    height: 130vh;
    width: 90%;
  }
  @media ${breakpoints.m} {
    width: 80%;
  }
  @media ${breakpoints.s} {
    width: 85%;
  }
  @media ${breakpoints.xs} {
    height: 100vh;
  }
`;
