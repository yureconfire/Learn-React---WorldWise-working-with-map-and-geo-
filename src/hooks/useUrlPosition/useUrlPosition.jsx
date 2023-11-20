import { useSearchParams } from "react-router-dom";

function useUrlPosition() {
  const [seacrhParams] = useSearchParams();
  const lat = seacrhParams.get("lat");
  const lng = seacrhParams.get("lng");
  return [lat, lng];
}

export default useUrlPosition;
