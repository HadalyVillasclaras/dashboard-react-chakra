import { Subheader } from "../../../common/components/modules/subheader/Subheader";
import { BooksContainer } from "../components/BooksContainer";

export const BooksPage = ({ title }: any) => {
  return (
    <>
      <Subheader title={title} />
      <BooksContainer />
    </>
  );
};
