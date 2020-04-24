import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Button from '@material-ui/core/Button';


export default function Followers() {

    return(
        <Grid container spacing={6} style={{ textAlign: 'center', top: '20px', left: '0px' }}>
            <Grid item xs={4}>
                <Typography variant="h5" component="h2">
                    123
                </Typography>
                <Typography variant="body2" component="p">
                    friends
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Divider orientation="vertical"/>
            </Grid>
            <Grid item xs={4} style={{ paddingRight: '1em' }}>
                <Typography variant="h5" component="h2">
                    73
                </Typography>
                <Typography variant="body2" component="p">
                    Causes
                </Typography>
            </Grid>
            <Grid item xs={12} style={{ marginRight: '90px', float: 'right', paddingLeft: '30px' }}>
                <Button size="small" style={{borderWidth: 2, borderColor: 'black', borderRadius: 8, borderStyle:'solid', float: 'right'}}><PersonAddIcon fontSize="large"/></Button>
            </Grid>
        </Grid>
    )

}