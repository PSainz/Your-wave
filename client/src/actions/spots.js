import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getSpots = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSpots();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createSpot = (spot) => async (dispatch) => {
  try {
    const { data } = await api.createSpot(spot);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);

//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const likePost = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.likePost(id);

//     dispatch({ type: LIKE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const deletePost = (id) => async (dispatch) => {
//   try {
//     await api.deletePost(id);

//     dispatch({ type: DELETE, payload: id });
//   } catch (error) {
//     console.log(error.message);
//   }
// };


// function CreateSpot(props) {
//   const initialState = {
//     spot_name: "",
//     country: "",
//     city: "",
//     wave_form: "",
//     wave_direction: "",
//     break_type: "",
//     rating: "",
//   };
//   const [spot, setFields, setSpotName] = useState(initialState);
//   const dispatch = useDispatch();

//   function handleChange(event) {
//     setFields({ ...spot, [event.target.name]: event.target.value });
//     // setSpotName({ ...spot, spot: event.target.value })
//   }

//   // function handleChange(event) {
//   //   setFields({ ...spot, spot: event.target.value });
//   // }

//   function handleSubmit(event) {
//     event.preventDefault();
//     if (
//       !spot.spot_name ||
//       !spot.country ||
//       !spot.city ||
//       !spot.wave_form ||
//       !spot.wave_direction ||
//       !spot.break_type ||
//       !spot.rating
//     )
//       return;
//     post("/create-spot", {
//       spot_name: spot.spot_name,
//       country: spot.country,
//       city: spot.city,
//       wave_form: spot.wave_form,
//       country: spot.country,
//       wave_direction: spot.wave_direction,
//       break_type: spot.break_type,
//       rating: spot.rating,
//     })
//       .then(function (response) {
//         dispatch(createSpot(response.data));
//       })
//       .then(function () {
//         props.history.push("/");
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

//   // function handleCancel() {
//   //   props.history.push("/");
//   // }

//   const classes = useStyles();
//   return (
//     <div>
//       <Navbar />
//       <Container fullWidth>
//         <form onSubmit={handleSubmit}>
//           <FormControl
//             fullWidth
//             value={spot.spot_name || ""}
//             onChange={handleChange}
//           >
//             <TextField
//               id="outlined-basic"
//               label="Spot-Name"
//               variant="outlined"
//             />
//             <TextField
//               id="outlined-basic"
//               label="Country"
//               variant="outlined"
//               value={spot.country}
//               onChange={handleChange}
//             />
//             <TextField
//               id="outlined-basic"
//               label="City"
//               variant="outlined"
//               value={spot.city}
//               onChange={handleChange}
//             />
//           </FormControl>
//           <FormControl fullWidth>
//             <InputLabel
//               id="demo-simple-select-label"
//               className={classes.container}
//             >
//               Wave form
//             </InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               value={""}
//               label="Wave form"
//               // onChange={handleChange}
//             >
//               <MenuItem>Hollow</MenuItem>
//               <MenuItem>Fat</MenuItem>
//               <MenuItem>Mellow</MenuItem>
//             </Select>
//           </FormControl>
//           <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label">
//               Wave direction
//             </InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               value={""}
//               label="Wave direction"
//               // onChange={handleChange}
//             >
//               <MenuItem>Left</MenuItem>
//               <MenuItem>Right</MenuItem>
//               <MenuItem>A-Frame</MenuItem>
//             </Select>
//           </FormControl>
//           <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label">Break type</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               value={""}
//               label="Break type"
//               // onChange={handleChange}
//             >
//               <MenuItem>Reef</MenuItem>
//               <MenuItem>Sand</MenuItem>
//               <MenuItem>Rock</MenuItem>
//             </Select>
//           </FormControl>
//           <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label">Rating</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               value={""}
//               label="Rating"
//               // onChange={handleChange}
//             >
//               <MenuItem value={""}>1</MenuItem>
//               <MenuItem value={""}>2</MenuItem>
//               <MenuItem value={""}>3</MenuItem>
//               <MenuItem value={""}>4</MenuItem>
//               <MenuItem value={""}>5</MenuItem>
//             </Select>
//           </FormControl>
//           <Button variant="contained" value="Submit" type="submit">
//             Submit
//           </Button>
//         </form>
//       </Container>
//     </div>
//   );
// }

// export default CreateSpot;
