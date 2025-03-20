import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';

interface SignupFormState {
  user_id: string;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export const useSignupForm = () => {
  const [form, setForm] = useState<SignupFormState>({
    user_id: "",
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  // 입력 필드 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // 불변성을 유지하는 방식으로 상태 업데이트
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 유효성 검사
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    if (form.user_id.length < 3 || form.user_id.length > 10) {
      setError("User ID must be between 3 and 10 characters");
      return;
    }
    
    setError("");

    try {
      const response = await axios.post("http://localhost:8000/api/customer/create", {
        user_id: form.user_id,
        email: form.email,
        password: form.password,
        name: form.name,
      });

      alert("회원가입이 성공적으로 완료되었습니다!");
      router.push('/login');
    } catch (err: any) {
      setError("Signup failed. Please try again.");
      console.error("Signup error:", err.response?.data || err.message);
      alert("회원가입에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  return {
    form,
    error,
    handleChange,
    handleSubmit
  };
}; 