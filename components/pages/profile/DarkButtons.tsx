import {FC} from "react";
import {Button, Theme} from "@mui/material";
import {makeStyles} from "@mui/styles";
import clsx from "clsx";
import {medias} from "../../../utility/medias";


const useStyles = makeStyles((theme:Theme) => ({
    buttons: {
        background: "#1C2124",
        width: medias(250, 500),
        padding: "8px 0",
        color: theme.palette.secondary.main,
        borderRadius: 1,
        '&:hover': {
            background: "#1a2023",
            color: theme.palette.secondary.main,
        }
    }
}));


interface Props{
    [key:string]:any
}

const DarkButtons:FC<Props> = ({children, ...props}: Props) => {
    const styles = useStyles();
    return (
        <Button className={clsx(styles.buttons, props.className)} {...props}>
            {children}
        </Button>
    )
}


export default DarkButtons;
