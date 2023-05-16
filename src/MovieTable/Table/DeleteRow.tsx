// import React, { FC } from 'react';
// import { Button, Popconfirm ,notification} from 'antd';

// type Props = {
//   id: number;
//   setData:React.Dispatch<React.SetStateAction<any[]>>;
// };
// const Delete: FC<Props> = ({ id, setData }) => {
//   const handleDelete = () => {
//     // Delete movie from database
//     if (!id) {
//       notification.error({
//         message: "Delete Error",
//         description: "Failed to delete movie: ID is empty",
//       });
//       return;
//     }
//     fetch(`https://localhost:44311/api/services/app/Movie/DeleteAsnyc/id=${id}`, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to delete movie");
//         }
//         // Update the state of the movies
//         setData((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
//         notification.success({
//           message: "Delete Success",
//           description: "Movie deleted successfully",
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//         notification.error({
//           message: "Delete Error",
//           description: "Failed to delete movie: " + error.message,
//         });
//       });
    
//   };
//   const confirm = () => {
//     handleDelete();
//     // message.success('Click on Yes');
//   };
//   const cancel = () => {
//     // message.error('Click on No');
//   };
//   return (
//     <Popconfirm
//       title="Delete the task"
//       description="Are you sure to delete this task?"
//       onConfirm={confirm}
//       onCancel={cancel}
//       okText="Yes"
//       cancelText="No"
//     >
//       <Button danger style={{ color: "white", backgroundColor: "red" }}>Delete</Button>
//     </Popconfirm>
//   );
// };
// export default Delete;