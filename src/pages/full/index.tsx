import React, { ReactDOM } from "react";
import { Article } from "../../components/common/article";

export const FullPage: React.FC = () => {
  return (
    <>
      <div style={{ fontSize: 40, fontWeight: "bold" }}>최신 신조어는?</div>
      <p style={{ fontSize: 20, marginTop: 20 }}>
        최신 신조어는 이런게 있습니다! <br />
        <br />
        1. 스불재: 스스로 불러온 재앙. <br />
        <br />
        2. 당모치: 당연히 모든 치긴은 옳다. <br />
        <br />
        3. 제곧내: 제목이 곧 내용
      </p>
      <p
        style={{
          fontSize: 20,
          position: "absolute",
          right: "10%",
          bottom: "20%",
        }}
      >
        감사합니다!
      </p>
    </>
  );
};
