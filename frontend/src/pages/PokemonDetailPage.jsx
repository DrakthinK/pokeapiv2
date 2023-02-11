import { useParams } from "react-router-dom";

export default function PokemonDetailPage() {
  let { id } = useParams();
  return <div>{id}</div>;
}
