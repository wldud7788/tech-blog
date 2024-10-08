import { signOutAction } from "@/app/actions";
import Link from "next/link";
import { Button } from "../ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      <Link href={"/mypage"}>{user.email?.split("@")[0]} 님</Link>
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"} className="text-black">
          로그아웃
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"} className="text-black">
        <Link href="/sign-in">로그인</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/sign-up">회원가입</Link>
      </Button>
    </div>
  );
}
