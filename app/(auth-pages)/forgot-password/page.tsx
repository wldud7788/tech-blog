import { forgotPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/ui/auth/form-message";
import { SubmitButton } from "@/components/ui/auth/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function ForgotPassword({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <>
      <form className="flex-1 flex flex-col w-full gap-2 text-foreground [&>input]:mb-6 min-w-64 max-w-64 mx-auto">
        <div>
          <h1 className="text-2xl font-medium">비밀번호 재설정</h1>
          <p className="text-sm text-secondary-foreground">
            이미 계정이 있습니까?{" "}
            <Link className="text-primary underline" href="/sign-in">
              로그인
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">이메일</Label>
          <Input name="email" placeholder="이메일을 입력해주세요" required />
          <SubmitButton formAction={forgotPasswordAction}>
            비밀번호 재설정
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </>
  );
}
