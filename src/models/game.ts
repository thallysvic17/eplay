class Game {
  category: string
  system: string
  description: string
  image: string
  infos: string[]
  title: string
  id: number

  constructor(
    id: number,
    category: string,
    system: string,
    description: string,
    image: string,
    infos: string[],
    title: string
  ) {
    this.id = id
    this.category = category
    this.system = system
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
  }
}

export default Game
