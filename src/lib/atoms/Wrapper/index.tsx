import { GenericItem } from "../../models/generic-item";
import { Wrapper as WrapperStyled } from "./styles";

const Wrapper: React.FC<GenericItem> = (props) => <WrapperStyled {...props} />;

export default Wrapper;
