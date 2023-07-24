import { GridColumnMenuContainer, GridFilterMenuItem, HideGridColMenuItem } from "@mui/x-data-grid";


const CustomColumnMenu = (props) => {
    const {hidemMenu, currentColumn, open} = props;
    return (
        <GridColumnMenuContainer
            hidemMenu={hidemMenu}
            currentColumn={currentColumn}
            open={open}
        >
            <GridFilterMenuItem onClick={hidemMenu} column={currentColumn} />
            <HideGridColMenuItem onClick={hidemMenu} column={currentColumn} />
        </GridColumnMenuContainer>
    )
}

export default CustomColumnMenu