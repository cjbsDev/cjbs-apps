import { Chip } from "@mui/material"

const GreyChip = ({label}) => {
    return (
        <Chip label={label} variant={'outlined'} size='small'
        sx={{fontFamily: `${'CJ ONLYONE NEW body'}`}} />
    )
}

export default GreyChip