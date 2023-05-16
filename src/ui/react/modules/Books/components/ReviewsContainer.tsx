import { useEffect, useState, useContext } from "react";
import { Spinner, Button, Divider, Flex, Box } from "@chakra-ui/react";
import { ReviewFilters, ReviewList } from ".";
import { Pagination } from "../../../common/components/pagination/Pagination";
import {
  paginationInterface as PaginationInterface,
  searchParamsInterface,
} from "../../../../../modules/core/models/index";
import { reviewInterface } from "../../../../../modules/reviews/models";
import { Section } from "../../../common/components/section/Section";

import { AuthContext } from "../../../common/context/authContext/AuthContext";
import { ModalContext } from '../../../common/context/modalContext/ModalContext';
import { useGetReviews, useDeleteReview } from "../hooks";
import {useSearchPropertiesByIds} from "../../properties/hooks/useSearchPropertiesByIds";

interface ReviewState {
  reviews: Array<reviewInterface>;
  pagination: PaginationInterface;
  searchParams: searchParamsInterface;
}

export const ReviewsContainer = () => {
  const { user } = useContext(AuthContext);
  const { setModalParamsContext } = useContext(ModalContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [reviews, setReviews] = useState<ReviewState["reviews"]>([]);
  const [paginationData, setPaginationData] = useState<ReviewState["pagination"]>({
    count: 0,
    countPerPage: 0,
    currentPage: 1,
    totalPages: 0,
  });

  const [searchParams, setSearchParams] = useState<ReviewState["searchParams"]>(
    {
      page: paginationData.currentPage,
      limit: 10,
      filter: [],
      sort: "",
    }
  );

  async function searchLegacyPropertiesByIds(reviews: any) {
    let legacyPropertiesToSearch: string[] = [];
    
    reviews.map((review: any) => {
      if (review.legacyPropertyId !== null && review.legacyPropertyId !== '') {
        legacyPropertiesToSearch.push(review.legacyPropertyId);
      }
    });

    let reviewIds = legacyPropertiesToSearch.join();

    const { properties } = await useSearchPropertiesByIds(reviewIds);

    return properties;
  }

  async function searchReviews() {
    const { reviews, paginationDataResp, modalParamsContext } = await useGetReviews(searchParams);
    
    // Set review properties names
    let properties:any = await searchLegacyPropertiesByIds(reviews);
    
    reviews.map((review: any) => {        
      if (
        properties !==null 
        && properties[review.legacyPropertyId]?.name
    ) {
        review.legacyPropertyName = properties[review.legacyPropertyId].name;
      } else {
        review.legacyPropertyName = '';
      }
    });

    if (reviews) {  
      setReviews(reviews);
      setPaginationData(paginationDataResp);
      setIsLoading(false)
    } else if (modalParamsContext) {
      setModalParamsContext(modalParamsContext);
      setIsLoading(false)
    }
  }

  function onPageChange(currentPage: number) {
    setSearchParams({ ...searchParams, page: currentPage });
  }

  function onPageSizeChange(pageSize: number) {
    setSearchParams({
      ...searchParams,
      limit: pageSize,
      page: 1,
    });
  }

  function onSortBy(sort: string) {
    setSearchParams({
      ...searchParams,
      sort: sort,
    });
  }

  function setFilters(filter: any) {
    setSearchParams({ ...searchParams, filter, page: 1 });
  }

  function onDelete(id: number) {
    async function deleteData() {
      await useDeleteReview(id);
      searchReviews();
    }
    deleteData();
  }

  useEffect(() => {
    searchReviews();
  }, [
    searchParams.page,
    searchParams.filter,
    searchParams.limit,
    searchParams.sort,
  ]);

  return (
    <>
      <Section>
        <ReviewFilters setFilters={setFilters} />
        {isLoading ? (
          <div style={{ textAlign: 'center' }}>
            <Spinner />
          </div>
        ) : (
          <>
            <Flex flexDirection={"column"} gap="2rem">
              <h5>Resultados: {paginationData.count < 1 ? '0' : `${paginationData.countPerPage} de ${paginationData.count}`}</h5>
              <ReviewList
                reviews={reviews}
                onDelete={onDelete}
                onSortBy={onSortBy}
              />
                <Pagination
                  totalPages={paginationData.totalPages}
                  currentPage={searchParams.page}
                  onPageChange={onPageChange}
                  onPageSizeChange={onPageSizeChange}
                  pageSize={searchParams.limit}
                  totalData={paginationData.count}
                />
            </Flex>
          </>
        )}

      </Section>

    </>
  );
};
