import { Product } from "@prisma/client";

interface Props {
  products: Product[];
}

function ProductsList({ products }: Props) {
  return <div>ProductsList</div>;
}
export default ProductsList;
