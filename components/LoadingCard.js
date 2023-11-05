import React from "react";
import { atom, useRecoilState } from "recoil";
import { withRouter } from "next/router";
import { Card } from "antd";

//recoil atom saves loading status
const loadingState = atom({
  key: "uniqueLoadingStateKey", 
  default: true, // Set the loading status to true
});

function LoadingCard() {
  const [loading, setLoading] = useRecoilState(loadingState);

  return (
    <Card
      style={{
        width: "100%",
        marginTop: 16,
      }}
      loading={loading}
    ></Card>
  );
}

export default withRouter(LoadingCard);