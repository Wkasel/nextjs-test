import { Card } from '@material-ui/core';
import PostItem from './postItem'
import Typography from '@material-ui/core/Typography';


export default function Posts() {

    return(
        <Card elevation={0} style={{ textAlign: 'left' }}>
            <Typography variant="h5" component="h2" style={{ borderBottom: "2px solid rgb(212, 212, 212)", marginTop: '30px', paddingLeft: '25px', paddingBottom: '25px', fontWeight: 'bold'}}>
                Posts
            </Typography>
            <PostItem />
            <PostItem />
            <PostItem />
        </Card>
    )
}