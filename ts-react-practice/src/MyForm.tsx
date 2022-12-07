import React, { useState } from "react";

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
}; // 여기서 하는 일은 App.tsx에서 넘겨준 함수안에 있는 변수 타입을 지정해주는것

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const { name, description } = form; // form에 있는 {name, description을} 여기서 name, desctiption으로 변수로 만들었다
  // 그래서 아래 return문에서 input태그 안에있는 value={name}에 있는 name은 여기서 선언해준 name이다.
  // form에 name과 이름이 같을 뿐이지 다른 변수다!

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange}></input>
      <input name="description" value={description} onChange={onChange}></input>
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
