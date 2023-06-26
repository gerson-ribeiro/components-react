import { GenericItem } from "../../models/generic-item";
import { Title as TitleStyled } from "./styles";

const Title: React.FC<GenericItem> = (props) => <TitleStyled {...props} />;

export default Title;
