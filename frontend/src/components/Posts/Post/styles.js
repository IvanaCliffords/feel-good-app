import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    media: {
        height: 0,
        paddingTop: '70%',
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'none',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '17px',
        height: '100%',
        position: 'relative',
        boxShadow: 'none'
    },
    overlay: {
        position: 'absolute',
        top: '30px',
        left: '20px',
        color: 'white',
        fontFamily: '"Roboto Flex", sans-serif;',

    },
    overlay2: {
        position: 'absolute',
        top: '30px',
        right: '20px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    tags: {
        color: '#9999fb',
        fontFamily: '"Roboto Flex", sans-serif;',

    },

    title: {
        padding: '0 20px',
        fontFamily: '"Roboto Flex", sans-serif;',
        fontWeight: '700'

    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',

    },
    cardMessage: {
        padding: '0 8px 8px 4px',
        fontFamily: '"Roboto Flex", sans-serif;',

    },
    actionButtonOne: {
        color: '#96e6a1',
        paddingRight: '5px',
        paddingLeft: '0'
    },
    actionButtonTwo: {
        color: '#ff96bd',

    }

})