import React, { useState, useRef } from 'react';

import {
    Paper, Grid, Box, Fab, Typography, DialogTitle,
    Dialog, TextField, Button, DialogContent, DialogContentText, DialogActions
} from "@mui/material";
import Draggable from 'react-draggable';
import { styled } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';
import { Add as Plus, Remove as Minus, Settings, PanTool as Hand } from "@mui/icons-material"
import { width } from '@mui/system';
// import Minus from "@mui/icons-material/Remove"


const StyleDiv = styled(Box)(({ theme }) => ({
    marginTop: '100px',
    marginLeft: '100px',
    minHeight: `calc(100vh - 140px);`,
    borderRadius: '25px 0',
    // padding: 15,
    width: `calc(100vw - 200px)`,
    maxHeight: `calc(100vh - 200px);`,
    height: `calc(100vh - 200px);`,
    backgroundColor: grey[500],
    minWidth: 200,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    paddingBottom: '10px',
    // justifyContent: 'center'

}));


const Item = styled(Paper)(({ theme, open }) => ({
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: '25px 0',
    maxWidth: 400,
    minWidth: 100,
    margin: `${theme.spacing(1)} ${theme.spacing(2)}`,
    [theme.breakpoints.down('sm')]: {

        margin: theme.spacing(1),
        minHeight: open ? 200 : 50,
    },
    transition: theme.transitions.create('box-shadow', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    '&:hover .child': {
        borderRadius: '25px 0 0 0',
        borderColor: theme.palette.alert.main,
        backgroundColor: theme.palette.alert.main,
    },
    // boxShadow: 25,
    // zIndex: 5,
    minHeight: 200,
    // Height: open ? 200 : 50,
    // maxHeight: '100%',
    backgroundColor: grey[400],
    color: theme.palette.text.secondary,
}));

const Title = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    transition: theme.transitions.create(['border-radius', 'background-color'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    '&:hover': {
        borderRadius: '25px 0 0 0',
        borderColor: theme.palette.alert.dark,
        backgroundColor: theme.palette.alert.dark,
    },
    // borderRadius:30,
    // marginTop:1,
    fontSize: 15,
    fontStyle: 'bold',
    borderRadius: '23px 0',
    borderColor: theme.palette.alert.dark,
    backgroundColor: theme.palette.alert.dark,
    color: theme.palette.text.primary,
}));

const ContainerTitle = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {

        marginBottom: theme.spacing(1),
    },
    // borderRadius:30,
    // marginTop:1,
    borderRadius: '26px 0',
    borderColor: theme.palette.alert.dark,
    backgroundColor: theme.palette.alert.dark,
    color: theme.palette.text.primary,
    fontSize: 30,
}));

const MyBtn = styled(Fab)(({ theme }) => ({
    color: theme.palette.primary.dark,
    backgroundColor: "#ffffff",
    marginLeft: theme.spacing(2),
    // height: 25,
    // width: 25,
    '&:hover': {
        backgroundColor: theme.palette.success.main,
    },
    '&:hover .child': {
        color: "#ffffff",
    }

}));
const MyBtnBad = styled(Fab)(({ theme }) => ({
    color: theme.palette.primary.dark,
    backgroundColor: "#ffffff",
    marginLeft: theme.spacing(2),
    // height: 25,
    // width: 25,
    '&:hover': {
        backgroundColor: theme.palette.alert.main,
    },
    '&:hover .child': {
        color: "#ffffff",
    }

}));
const MyAdd = styled(Plus)(({ theme }) => ({
    color: theme.palette.alert.dark,
    // backgroundColor: "#ffffff",
    // height: 20,
    // width: 20,
    // '&:hover': {
    //     backgroundColor: theme.palette.primary.light,
    // }
    '&:hover': {
        color: '#FFFFFF',
    }

}));
const MyMinus = styled(Minus)(({ theme }) => ({
    color: theme.palette.alert.dark,
    // backgroundColor: "#ffffff",
    // height: 20,
    // width: 20,
    '&:hover': {
        color: '#FFFFFF',
    }

}));

const MyDialog = styled(Dialog)(({ theme }) => ({

    // width: 1000,
    // height: 500,

}))
const MyDialogText = styled(DialogContentText)(({ theme }) => ({

    marginTop: 5,
    marginBottom: 5,
    color: "#ffffff",
    backgroundColor: red,
    textAlign: 'center'
    // width: 1000,
    // height: 500,

}))
const MyTextField = styled(TextField)(({ theme }) => ({

    // marginTop: 5,
    // marginBottom: 5,
    // color: "#ffffff",
    // backgroundColor: red,
    // textAlign: 'center'
    // width: 1000,
    // height: 500,

    '.MuiFormLabel:active': {
        borderColor: theme.palette.alert.dark
    }

}));
const MyButton = styled(Button)(({ theme }) => ({

    color: "#ffffff",
    backgroundColor: theme.palette.success.dark

}));

const MyButton1 = styled(Button)(({ theme }) => ({

    color: "#ffffff",
    backgroundColor: theme.palette.alert.dark

}));


const PlaceHolder = styled('div')(({ theme }) => ({

    maxWidth: 400,
    minWidth: 100,
    backgroundColor: grey[700]
}));


export default function Body(props) {

    const nodeRef = useRef(null);
    // const itemsEls = useRef(new Array())
    let refArray = [];
    const [num, setNum] = useState(0);
    const [index, setIndex] = useState(null);
    const [addDisabled, setAddDisabled] = useState(false);
    const [subtractDisabled, setSubtractDisabled] = useState(true);
    const [lists, setList] = useState([]);
    const [open, setOpen] = useState(false);
    const [str, setStr] = useState('');
    // const [pos, setPos] = useState({ x: 0, y: 0 });
    // const [posStart, setPosStart] = useState({ clientX: 0, y: 0 });
    let add = () => {
        let localNum = num;
        localNum = localNum === 12 ? 12 : num + 1
        setList([...lists, { num: localNum, str: '', open: false, pos: { x: 0, y: 0 }, posStart: { x: 0, y: 0 } }])
        setNum(localNum);
        setAddDisabled(localNum === 12 ? true : false);
        setSubtractDisabled(localNum === 0 ? true : false);


    }

    let subtract = () => {

        let l = lists
        l.pop();
        let localNum = num;
        localNum = localNum === 0 ? 0 : num - 1
        setNum(localNum);
        setList([...l]);
        setAddDisabled(localNum === 12 ? true : false);
        setSubtractDisabled(localNum === 0 ? true : false);
    }

    // let form = () => {

    //     console.log("lists", lists);
    //     let li = lists.map((item) => {
    //         return (
    //             <Grid style={{ maxWidth: 400 }} item md={4} sm={6} xs={12} key={item.num}>
    //                 <Item onClick={() => addTextToCard(item.num)}>


    //                     <Title className="child">
    //                         Title {item.num}
    //                     </Title>

    //                     Item {" " + item.str}
    //                 </Item>
    //             </Grid>)
    //     });


    //     return li
    // }

    let addTextToCard = (n) => {
        setIndex(n);
        setOpen(true);
    };

    let submitText = () => {
        let lis = lists.map(item => {
            if (item.num === index) {
                item.str = str;
            }
            return item;
        });
        setOpen(false);
        setStr('');
        setIndex(null);
    }

    let handleClose = () => {
        setOpen(false);
        setIndex(null);
        setStr('');
    }

    let handleStart = function (e, item, data) {
        console.log("refArray", refArray[item.num - 1].style);

        refArray[item.num - 1].style.zIndex = 5





        item.pos.y = data.y;
        item.pos.x = data.x;
        item.posStart.y = data.y;
        item.posStart.x = data.x;

        let l = lists.map((it) => {
            if (it.num !== item.num) {
                return it;
            } else {
                return item;
            }
        })

        setList(l);



    };
    let handleDrag = (e, item, data) => {
        item.pos.y = e.pageY
        item.pos.x = e.pageX

        let l = lists.map((it) => {

            if (it.num !== item.num) {
                return it;
            } else {
                return item;
            }
        })

        setList(l);
    };
    let handleStop = (e, item, data) => {

        // console.log("refArray", refArray[item.num - 1].style);

        refArray[item.num - 1].style.zIndex = ""
        item.pos.y = item.posStart.y;
        item.pos.x = item.posStart.x;

        let l = lists.map((it) => {
            if (it.num !== item.num) {
                return it;
            } else {
                return item;
            }
        })

        setList(l);
    };

    let entered = (id) => {
        let l = lists;

        l = l.map(item => {
            if (item.num === id) {
                console.log("item.num", item.num);
                item.open = true;
            }
            return item;
        });
        setList(l);
    }
    let left = (id) => {
        let l = lists;
        l = l.map(item => {
            if (item.num === id) {
                item.open = false;
            }
            return item;
        });
        setList(l);
    }


    return (
        <StyleDiv >

            <ContainerTitle>
                <Grid
                    container
                    spacing={1}
                    justifyContent={'center'}
                    alignContent={'center'}
                >
                    <Typography variant="h4" >Pick one</Typography>

                    <MyBtn size='small' disabled={addDisabled} onClick={add} ><MyAdd className="child" /></MyBtn>
                    <MyBtnBad size='small' disabled={subtractDisabled} onClick={subtract} ><MyMinus className="child" /></MyBtnBad>
                </Grid>

            </ContainerTitle>

            <Grid item sx={{
                overflow: { sm: 'auto', xs: 'auto', md: 'auto', lg: 'auto', xl: 'hidden' }
                ,
            }}
                style={{ height: "calc( 100% - 100px)", overflowX: 'hidden' }} container columns={12} flexDirection={'row'} justifyContent={'center'} >
                {/* <Grid container spacing={3} columns={12} > */}




                {/* {form()} */}

                {
                    lists.map((item, index) => {

                        if (item.fake) {
                            return (
                                <PlaceHolder />
                            )

                        } else {
                            return (
                                <Draggable
                                    nodeRef={nodeRef}
                                    disabled={lists.length <= 1}
                                    position={item.pos}
                                    onStart={(e, data) => handleStart(e, item, data)}
                                    // onDrag={(e) => handleDrag(e, item)}
                                    onStop={(e, data) => handleStop(e, item, data)}
                                    // disabled={this.state.isDialogOpen}
                                    key={item.num + "drag"} handle="#imhandle">
                                    <Grid style={{ maxWidth: 400, zIndex: 1 }} item md={4} sm={6} xs={12} key={item.num} ref={a => { refArray[index] = a; }}
                                    // onMouseOver={() => console.log("over me", item.num)}
                                    >
                                        {/* <Item onClick={() => addTextToCard(item.num)}> */}
                                        <Item ref={nodeRef} open={item.open} onMouseEnter={() => entered(item.num)} onMouseLeave={() => left(item.num)}>


                                            <Title className="child">
                                                <Grid container spacing={2}>
                                                    <Grid item>
                                                        <Hand id="imhandle" />
                                                    </Grid>
                                                    <Grid item xs={6} sm={5} md={8} ld={9}>

                                                        Title {item.num}
                                                    </Grid>
                                                    <Grid item>

                                                        <Settings onClick={() => addTextToCard(item.num)} />
                                                    </Grid>
                                                </Grid>

                                            </Title>

                                            Item {" " + item.str}
                                        </Item>
                                    </Grid>
                                </Draggable>);
                        }
                    })


                }


            </Grid>

            <MyDialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <DialogTitle color='alert'>
                    Add this string to your item.
                </DialogTitle>
                <DialogContent>
                    <MyDialogText>
                        Add this string to your item.
                    </MyDialogText>

                    <MyTextField
                        id="string"
                        label="String"
                        fullWidth
                        value={str}
                        focused
                        color='alert'
                        onChange={(e) => setStr(e.target.value)}

                    />

                    <DialogActions>
                        <MyButton1 variant="contained" onClick={handleClose}>
                            Close
                        </MyButton1>
                        <MyButton variant="contained" onClick={submitText}>
                            Submit
                        </MyButton>
                    </DialogActions>
                </DialogContent>


            </MyDialog>



        </StyleDiv>
    )




};
