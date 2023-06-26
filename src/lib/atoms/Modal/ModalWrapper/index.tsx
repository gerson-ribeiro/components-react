import { GenericItem } from "../../../models/generic-item";
import { ModalWrapper as ModalWrapperStyled } from "../modal";

const ModalWrapper: React.FC<GenericItem> = (props) => (
  <ModalWrapperStyled {...props} />
);

export default ModalWrapper;
