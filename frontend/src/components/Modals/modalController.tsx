export const modalController = {
    handleOverlayClick: (onClose?: () => void) => {
        return (e: React.PointerEvent<HTMLDivElement>) => {
            if (onClose && e.target === e.currentTarget) {
                onClose();
            }
        };
    }
};