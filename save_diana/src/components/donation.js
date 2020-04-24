import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function Donation() {

    return(
        <Paper elevation={0} style={{ textAlign: 'left', margin: '20px'}}>
            <Typography variant="body2" component="p" style={{ paddingBottom: '20px', borderBottom: "1px solid rgb(212, 212, 212)"}}>
                Diana Panich donated 56$ to ValueCulture
            </Typography>
        </Paper>
    )

}