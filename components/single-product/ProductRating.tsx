import { fetchProductRating } from "@/utils/actions";
import { FaStar } from "react-icons/fa";

async function ProductRating({ productId }: { productId: string }) {
  // temp
  // const rating = 4.2;
  // const count = 25;

  const { count, rating } = await fetchProductRating(productId);

  const classNames = `flex gap-1 items-center tex-md mt-1 mb-4`;
  const countValue = `(${count}) reviews `;

  return (
    <span className={classNames}>
      <FaStar className="h-3 w-3" /> {rating} {countValue}
    </span>
  );
}

export default ProductRating;
