import { GenericItem } from "../../models/generic-item";
import { Background as BackgroundStyled } from "./styles";

const Background: React.FC<GenericItem> = (props) => (
  <BackgroundStyled {...props} />
);

export default Background;
