import { Highlight } from '@components/Highlight';
import { Container } from './styles';
import { Header } from '@components/Header';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function NewGroups() {

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
        // type='SECONDARY'
      />


    </Content>
     

    </Container>
  );
}


