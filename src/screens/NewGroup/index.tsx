import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container, Content, Icon } from './styles';

import { Button } from '@components/Button';

export function NewGroup() {

  return (
    <Container style={Container}>

      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title='Nova turma'
          subtitle='crie a turma para adicionar as pessoas'
        />

        <Button
          title='Criar '

        />


      </Content>


    </Container>
  );
}


