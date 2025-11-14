import { X } from "lucide-react";

import { CloseButtonWrapper } from "./commonStyles";

export const CloseButton = ({ onClose }: { onClose: () => void }) => {
    return (
        <CloseButtonWrapper onClick={onClose}>
            <X size={20} />
        </CloseButtonWrapper>
    );
};
