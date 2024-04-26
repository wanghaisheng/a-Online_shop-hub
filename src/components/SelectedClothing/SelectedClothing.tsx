import QueryFetchedJewelry from "../../QueryFetched/QueryFetchedJewelry";

type QueryProps = {
  jewelry?: boolean;
};


function SelectedClothing({ jewelry }: QueryProps) {
  // if (jewelry) {
  //     <QueryFetchedJewelry />
  // } else {
  //     null;
  // }

  return <div>{jewelry ? <QueryFetchedJewelry /> : null}</div>;
}

export default SelectedClothing;