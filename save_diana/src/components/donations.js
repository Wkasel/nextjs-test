import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Donation from './donation'

export default function Donations() {

    return(
        <Card elevation={0} style={{ textAlign: 'left', minHeight: '530px' }}>
            <Typography variant="h5" component="h2" style={{ fontWeight: 'bold', marginTop: '40px', paddingBottom: '10px',paddingLeft: '15px'}}>
                Recent Donations
            </Typography>
            <Donation />
            <Donation />
            <Donation />
            <Donation />
            <Donation />
        </Card>
    )

}