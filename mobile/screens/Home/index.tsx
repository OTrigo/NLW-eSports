import { View, Image, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import logoImg from '../../src/assets/logo-nlw-esports.png'
import { GameCard, GameCardProps } from '../../src/components/GameCard';
import { Heading } from '../../src/components/Heading';
import { styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient';

export function Home() {

  const[games, setGames] = useState<GameCardProps[]>([]);

  useEffect(()=>{
    fetch('http://192.168.0.14:3333/games')
    .then( response => response.json())
    .then( data => setGames(data))
  }, [])

  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

      <Heading
        title="Encontre o seu duo!"
        subtitle="Selecione o seu game que deseja jogar!"
      />

      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem = {({ item })=>(
          <GameCard 
            data={item}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator = {false}
        contentContainerStyle = {styles.contentList}
      />
    </View>
  );
}