import { Highlight } from '@components/Highlight';
import { Container } from './styles';
import { Header } from '@components/Header';
import { GroupCard } from '@components/GroupCard';

export function Groups() {
  return (
    <Container style={Container}>
      <Header showBackButton/> 

      <Highlight title='Turmas' subtitle='Jogue com a sua turma' />

      <GroupCard title='Galera do Ignite' />
    </Container>
  );
}


