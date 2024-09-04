import { FC } from "react";
import "./style.scss";
import { UserProps } from "./types";
import { CardInfo } from "./parts/cardInfo";

interface MemberCardProps extends UserProps {
  className?: string;
  [key: string]: any; // Для поддержки дополнительных пропсов
}

export const MemberCard: FC<MemberCardProps> = ({
  id,
  name,
  username,
  phone,
  website,
  className = "",
  ...props
}) => {
  return (
    <div className={`member-card ${className}`} {...props}>
      <p className="member-card-title">{name}</p>
      <CardInfo id={id} username={username} phone={phone} website={website} />
    </div>
  );
};
