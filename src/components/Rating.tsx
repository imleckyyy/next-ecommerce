interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  return <div className="text-yellow-400 font-bold">Ocena: {rating}</div>;
};
