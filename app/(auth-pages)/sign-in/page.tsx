import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/ui/auth/form-message";
import { SubmitButton } from "@/components/ui/auth/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login({ searchParams }: { searchParams: Message }) {
  return (
    <form className="flex-1 flex flex-col min-w-64">
      <h1 className="text-2xl font-medium">로그인</h1>
      <p className="text-sm text-foreground">
        계정이 없으신가요?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-up">
          회원가입
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">이메일</Label>
        <Input name="email" placeholder="이메일을 입력해주세요" required />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">비밀번호</Label>
          <Link
            className="text-xs text-foreground underline"
            href="/forgot-password"
          >
            비밀번호를 잊으셨나요?
          </Link>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          required
        />
        <SubmitButton pendingText="Signing In..." formAction={signInAction}>
          로그인
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
