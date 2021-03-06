import Panel from '../../Components/TogglePanel/index'
import {connect} from "react-redux";
import {
  removeCartAction,
  isOpenAction,
  closePanelAction,
  decProductAction
} from "../../Actions/index";

const mapStateToProps = (state) => {
  return {
    PanelsVisibility: state.PanelsVisibility,
    Basket: state.Basket,
    Counter: state.Counter
  };
};

const mapDispatchToProps = {
  closePanel: closePanelAction,
  togglePanel: isOpenAction,
  removeCart: removeCartAction,
  decrement: decProductAction
};

const ControlledPanel = connect(mapStateToProps, mapDispatchToProps)(Panel);

export default ControlledPanel