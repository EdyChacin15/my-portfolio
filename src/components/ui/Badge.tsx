import styles from './Badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'gray' | 'blue' | 'green' | 'yellow'; 
}

const Badge = ({ children, color = 'gray' }: BadgeProps) => {
  const colorClass = styles[color]; 

  return (
    <span className={`${styles.badge} ${colorClass}`}>
      {children}
    </span>
  );
};

export default Badge;