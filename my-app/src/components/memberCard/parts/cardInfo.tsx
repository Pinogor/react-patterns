import { FC, useEffect } from "react";
import "../style.scss";

import { UserProps } from "../types";

export const CardInfo: FC<UserProps> = ({ phone, username, website }) => {
  return (
    <div className="info">
      <p className="list-item">Username: {username}</p>
      <p className="list-item">Phone: {phone}</p>
      <p className="list-item">Website: {website}</p>
    </div>
  );
};
