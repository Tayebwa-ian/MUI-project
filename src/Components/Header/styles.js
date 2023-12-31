export const headerStyles = {
    wrapper: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#009be5',
        paddingRight: 4,
        paddingLeft: 4,
        paddingBottom: 2,
        paddingTop: 2,
    },
    topRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        '*': {
            marginRight: '5px',
        },
        marginLeft: 1,
    },
    middleRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '10px',
        marginLeft: '30px',
    },
    link: {
        fontWeight: 500,
        color: 'rgba(255, 255, 255, 0.7)',
        "&:hover": {
            color: '#fff',
            cursor: 'pointer',
        },
    },
    webButton: {
        marginRight: '10px',
    },
};