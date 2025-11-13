// Header.interface.ts
export interface HeaderInterface {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
