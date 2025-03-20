"use client";
import SignupForm from "@/components/(account)/guest/new/SignupCompo";
import { useSignupForm } from "@/hooks/(account)/guest/new/useSignupForm";

export default function Signup() {
  // 커스텀 훅을 사용하여 상태와 로직을 분리
  const { form, error, handleChange, handleSubmit } = useSignupForm();
  
  // 컴포넌트는 이제 단순히 상태를 자식 컴포넌트에 전달하는 역할만 수행
  return (
    <SignupForm
      form={form}
      error={error}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}