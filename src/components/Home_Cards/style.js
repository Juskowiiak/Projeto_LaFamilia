//importar biblioteca styled
import styled from "styled-components";
//importar ficheiros
import "../../Style/cores.css";
import breakpoints from "../../Style/breakpoints";
//importar icons da biblioteca react-icons
import { TbToolsKitchen2 } from "react-icons/tb";
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 20vh;
  .porque {
    .cards {
      display: flex;
      justify-content: space-between;
      margin-top: 3rem;
      .cards-card {
        width: 33.3%;
        .cards-card-picture {
          height: 280px;
          width: 100%;
          transition: 0.4s;
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
        @media ${breakpoints.l} {
          width: 340px;
        }
        @media ${breakpoints.s} {
          width: 300px;
        }
        @media ${breakpoints.xs} {
          width: 85%;
        }
      }
      @media ${breakpoints.l} {
        flex-wrap: wrap;
        gap: 80px;
        justify-content: space-evenly;
      }
    }
    .cards-card:first-child,
    .cards-card:last-child {
      background-color: var(--dark-3);
    }
    .cards-card:nth-child(2) {
      background-color: var(--dark-5);
    }
  }
`;
