import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import useFavourites from "../app/hooks/useFavourites";

const HeartButton = ({ listingId, currentUser }) => {
  const { hasFavorited, toggleFavorite } = useFavourites({
    listingId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFavorite}
      className="relative transition cursor-pointer hover:opacity-80"
    >
      <AiOutlineHeart
        size={28}
        className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
      />
      <AiFillHeart
        size={24}
        className={hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default HeartButton;
