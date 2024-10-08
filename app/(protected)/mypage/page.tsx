import Link from "next/link";
import React from "react";

const Mypage = () => {
  return (
    <div>
      <h2>Mypage</h2>
      <Link href={"/reset-password"}>비밀번호 재설정</Link>
    </div>
  );
};

export default Mypage;
