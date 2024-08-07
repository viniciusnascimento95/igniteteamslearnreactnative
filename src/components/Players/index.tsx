import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "./style";

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight 
      title="Nome da turma" 
      subtitle="Adicione a galera e separe os times" />
    </Container>
  )
}