import Theme from './Theme'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    theme?: Theme | null
}

export default Postagem;