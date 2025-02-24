import styled from "styled-components";
//importar ficheiros
import "../../Style/cores.css";
import breakpoints from "../../Style/breakpoints";
//importar imagem
import back from "../../assets/eventos/back.jpg";
export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 90%;
  margin-inline: auto;
  margin-top: 4rem;
  .slider-wrapper {
    position: relative;
    width: 100%;
    margin-inline: auto;
    background-image: url(${back});
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #000;
      opacity: 0.88;
    }
    .slider {
      display: flex;
      aspect-ratio: 16/6;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      position: relative;
      z-index: 3;
      .card {
        flex: 1 0 100%;
        scroll-snap-align: start;
        display: flex;
        gap: 20px;
        padding: 1rem;

        .card-picture {
          min-width: 50%;
          padding: 1rem;
          @media ${breakpoints.ml} {
            height: auto;
            width: 400px;
            padding: 0;
            box-shadow: 2px 2px 1px #000;
          }
          @media ${breakpoints.s} {
            width: 80%;
          }
        }
        .card-text {
          overflow-y: scroll;
          padding-bottom: 0.4rem;
          .card-text-title {
            font-family: "Marck Script", serif;
            letter-spacing: 1.2px;
            text-decoration: underline;
            color: var(--gold-1);
            font-size: 2rem;
            text-shadow: 2px 2px 1px #000;
            margin-bottom: 0.3rem;
            @media ${breakpoints.l} {
              font-size: 1.5rem;
            }
          }
          .card-text-price {
            font-family: "Marck Script", serif;
            color: var(--gold-2);
            font-size: 2rem;
            text-shadow: 2px 2px 1px #000;
            margin-bottom: 2rem;
            letter-spacing: 3px;
            @media ${breakpoints.l} {
              font-size: 1.5rem;
            }
          }

          ul {
            display: flex;
            flex-direction: column;
            margin-block: 2rem;
            gap: 10px;
            li {
              display: flex;
              align-items: center;
              gap: 10px;
              .icon {
                font-size: 1.5rem;
                color: var(--gold-3);
              }
              @media ${breakpoints.s} {
                align-items: start;
              }
            }
            @media ${breakpoints.ml} {
              align-items: center;
            }
            @media ${breakpoints.s} {
              margin-block: 3.2rem;
              gap: 18px;
            }
          }
          @media ${breakpoints.l} {
            font-size: 0.9rem;
          }
          @media ${breakpoints.ml} {
            text-align: center;
            overflow-y: hidden;
          }
        }
        @media ${breakpoints.ml} {
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }
      }
      @media ${breakpoints.ml} {
        aspect-ratio: 0;
      }
    }
  }
  @media ${breakpoints.ml} {
    width: 95%;
  }
`;
