# Back-end

## Entidades

### Game

id
title
bannerUrl

### Ad

id
gameId
name
yearsPlaying
discord
weekDays
hourStart
hourEnd
useVoiceChannel
createdAt

## Casos de uso

- Listagem de games com contagem de anúncios
- Criação de novo anúncio
- Listagem de anúncios por game
- Buscar discord pelo ID do Anúncio

## Anotações da Aula 3

ORM - Prisma

npm i prisma -D para instalar o prisma apenas como uma dependencia de desenvolvimento e não vamos do prisma em si(em produção)

Banco de Dados SQLite
