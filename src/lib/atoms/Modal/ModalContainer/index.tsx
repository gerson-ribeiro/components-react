import { GenericItem } from "../../../models/generic-item";
import { ModalContainer as ModalContainerStyled } from "../modal";

const ModalContainer: React.FC<GenericItem> = (props) => (
  <ModalContainerStyled {...props} />
);

export default ModalContainer;
