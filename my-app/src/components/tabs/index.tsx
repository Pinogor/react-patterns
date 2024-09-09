import { FC } from 'react';
import { Button } from '../button';

interface TabsProps {
  onChange: (tab: boolean) => void;
  className?: string;
}

export const Tabs: FC<TabsProps> = ({ onChange, className = '', ...props }) => {
  return (
    <div className={`tabs-container ${className}`} {...props}>
      <Button onClick={() => onChange(false)}>form</Button>
      <Button onClick={() => onChange(true)}>users</Button>
    </div>
  );
};