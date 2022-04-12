import { useEffect, useState } from "react";
import style from "./UserAvatar.module.css";

interface UserAvatar {
  avatar : string,
  register : any
}

const UserAvatar: React.FC<UserAvatar>= ({avatar,register}) => {

  const [changeAvatar, setChangeAvatar] = useState<string>('')

  useEffect(()=>{
    setChangeAvatar(avatar)
  },[avatar])

  return (
    <>
      <label htmlFor="avatar" className={style.avatarLabel}>
        <div className={style.avatarWrapper}>
          <img src={changeAvatar} alt="" className={style.userAvatar} />
        </div>
      </label>
      <input
        type="file"
        id="avatar"
        style={{ display: "none", visibility: "hidden" }}
        {...register("avatar")}
      />
    </>
  );
};

export default UserAvatar;
