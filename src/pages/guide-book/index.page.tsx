import { useGetGuideBookData } from "@/hooks/useGetGuideBookData";

export const getServerSideProps = async () => {
  try {
    return {
      props: {},
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

function GuideBookPage() {
  const { fetchNextPage, hasNextPage, isLoading, data } = useGetGuideBookData();
  //   return <h1>여행 가이드북</h1>
  //   console.log(data);

  //   console.log(hasNextPage);

  return (
    <div>
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isLoading}
      >
        {isLoading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}

export default GuideBookPage;
