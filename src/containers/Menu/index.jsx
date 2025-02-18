import { Container } from "./style";
import MenuList from "../../components/Menu_List";
import Title from "../../components/Title";
import TopicLine from "../../components/topic-line";
import MenuSpecial from "../../components/Menu_Special";
export default function Menu() {
  return (
    <Container>
      <header></header>
      <Title>Ementa</Title>
      <MenuList />
      <TopicLine />
      <MenuSpecial />
    </Container>
  );
}
