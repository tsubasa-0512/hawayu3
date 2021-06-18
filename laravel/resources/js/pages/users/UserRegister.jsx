import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import styled from "styled-components";

//ハワユ利用登録
function UserRegister()  {
  const [uservalues, setUserValues] = useState({
    email: "",
    password:"",
    code:""
  });

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  function handleChange (e)  {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setUserValues({ ...uservalues, [name]: value });
  }

    return (
        <SForm onSubmit={handleSubmit(onSubmit)}>
        <Sh1>ハワユ利用登録</Sh1>
        <Ptext>メールアドレス</Ptext>
        <input type="email" 
          // name="email" 
          onChange={handleChange} 
          {...register("email",{ required: true,minLength:5 })} 
          // value={values.email}
          />
          {errors.email?.type === 'required' && "メールアドレスを登録して下さい"}
          
          <Ptext>パスワード</Ptext>
          <input type="password" 
          // name="password" 
          onChange={handleChange} 
          // value={values.password}
          {...register("password",{required:true,minLength:4,maxLength:20})} 
         />
          {errors.password?.type === 'required' && "パスワードを登録して下さい"}
          {errors.password?.type === 'minLength' && "4文字以上で入力して下さい"}
          {errors.password?.type === 'maxLength' && "20文字以下で入力して下さい"}

          <Ptext>コード</Ptext>
          <input type="text" 
          // name="code" 
          onChange={handleChange} 
          // value={values.code}
          {...register("code")} 
          />

          {/* <SButton onClick={this.handleSubmit}> */}
            {/* 登録 */}
          {/* </SButton> */}
          <input type="submit" />
        </SForm>
    )
}


const SForm = styled.form`
    display:flex;
    flex-direction:column;
    width:300px;
    height:100%;
    margin:auto;
    padding-top:15px;
`

const Ptext = styled.p`
    background-color:#abedd8;
`
const Sh1 = styled.h1 `
    margin:0;
    font-size:20px;
`
const SButton = styled.button`
    padding:6px 24px:
    border:none;
    border-radius:9999px;
    width:100px;
    background-color:skyblue;
    &:hover{
      cursor:pointer;
      opacity:0.8;
    }
`

export default UserRegister
