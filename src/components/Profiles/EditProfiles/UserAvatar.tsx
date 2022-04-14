import { useEffect, useState } from "react";
import style from "./UserAvatar.module.css";

interface UserAvatar {
  avatar : string,
  register : any,
  setAvatar :any
}

const UserAvatar: React.FC<UserAvatar>= ({avatar,register,setAvatar}) => {


  const handleChangeAvatar = (e: any) => { 
    const newAvatar = URL.createObjectURL(e.target.files[0])
    setAvatar(newAvatar)

   }
  return (
    <>
      <label htmlFor="avatar" className={style.avatarLabel}>
        <div className={style.avatarWrapper}>
          <img src={avatar} alt="" className={style.userAvatar} />
        </div>
      </label>
      <input
        type="file"
        id="avatar"
        style={{ display: "none", visibility: "hidden" }}
        {...register("avatar")}
        onChange = {handleChangeAvatar}
      />
    </>
  );
};

export default UserAvatar;
