
// import React,{useState,useEffect} from 'react';
// import { Space,Table, Modal, Input, Button, Form } from 'antd';
// import { EditOutlined, DeleteOutlined, FolderViewOutlined } from '@ant-design/icons';
// import AddMovie, { ITableData } from '../AddMovie/AddMovie';
// import './MovieTable.css'
// import { ColumnsType } from 'antd/es/table';
// import Delete from './DeleteRow';
// import ViewModel from './ViewMovie';


// export interface IMovie {
//   id?:number,
//   title: string;
//   starring: string;
//   duration: string;
//   categoryName: string;
// }




// const MovieTable:React.FC = () => {
//   const [dataSource, setDataSource] = useState<IMovie[]>([]);
//   const [searchedText, setSearchedText] = useState<string>('');
//   const [data, setData] = useState<string[]>([]);

//   // const [data, setData] = useState([]);
//   const [form] = Form.useForm();
//   // const [isModalVisible, setIsModalVisible] = useState(false);
//   // const [selectedRecord, setSelectedRecord] = useState(null);
//   const [loading, setLoading] = useState(false);


//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://localhost:44311/api/services/app/Movie/GetAllAsnyc', {
//         method: 'GET',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch movies');
//       }

//       const data = await response.json();
//       console.log(data);
//       setDataSource(data.result);
//       console.log('response data', data?.result);
//     } catch (error) {
//       console.error(error);
//       // display error message to user
//     }
//   };


//   const columns :ColumnsType<IMovie>= [
//     {
//       title: 'Title',
//       dataIndex: 'title',
//       key: 'title',
//       filteredValue: [searchedText],
//       onFilter: (value, record) => {
//         const stringValue=typeof value==='string' ?value.toLowerCase():"";
//         return (
//           String(record.title)
//             .toLowerCase()
//             .includes(stringValue) ||
//           String(record.starring)
//             .toLowerCase()
//             .includes(stringValue) ||
//           String(record.duration)
//             .toLowerCase()
//             .includes(stringValue) ||
//           String(record.categoryName).toLowerCase().includes(stringValue)
//         );
//       },
//     },
//     {
//       key: '2',
//       title: 'Starring',
//       dataIndex: 'starring',
//       //sorter: (a: IMovie, b: IMovie) => a.title.localeCompare(b.starring),
//     },
//     {
//       key: '3',
//       title: 'Duration',
//       dataIndex: 'duration',
//       //sorter: (a: IMovie, b: IMovie) => a.title.localeCompare(b.duration),
//     },
//     {
//       key: '4',
//       title: 'Category',
//       dataIndex: 'categoryName',
//       //sorter: (a: IMovie, b: IMovie) => a.title.localeCompare(b.categoryName),

//     }
//     ,{
//       title: 'Action',
//       key: 'action',
//       render: (_, record) => (
//         <Space size='middle'>
//           <ViewModel
//             id={record.id}
//             title={record.title}
//             duration={record.duration}
//             starring={record.starring}
//             category={record.categoryName}
//           />
//           <Delete id={record.id} setData={setData} />
//         </Space>
//       ),
//       width: 200,
//     },
//   ];




//   // const handleOk = async () => {
//   //   const values = await form.validateFields();
//   //   const updatedRecord = { ...selectedRecord, ...values };
//   //   await fetch(`/api/my-data/${selectedRecord.id}`, {
//   //     method: 'PUT',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     body: JSON.stringify(updatedRecord),
//   //   });
//   //   setIsModalVisible(false);
//   //   fetchData();
//   // };



//   // const onDeleteMovie = (record) => {
//   //     Modal.confirm({
//   //       title: 'Are you sure you want to delete this movie record?',
//   //       okText: 'Yes',
//   //       okType: 'danger',
//   //       onOk: async () => {
//   //         try {
//   //           // Delete the movie record from the database
//   //           const response = await fetch(`https://localhost:44311/api/services/app/Movie/Delete?id=${record.id}`, {
//   //             method: 'DELETE',
//   //           });

//   //           if (!response.ok) {
//   //             throw new Error('Failed to delete movie record.');
//   //           }

//   //           // Remove the movie record from the data source
//   //           setDataSource(prevDataSource => {
//   //             return prevDataSource.filter(movie => movie.id !== record.id);
//   //           });
//   //         } catch (error) {
//   //           console.error('Error deleting movie record:', error);
//   //         }
//   //       },
//   //     });
//   //   };


//   // const onEditMovie = async (record) => {
//   //   setIsEditing(true);
//   //   setEditingMovie({ ...record });

//   //   try {
//   //     const response = await fetch(`https://localhost:44311/api/movies/${record.id}`, {
//   //       method: 'PUT',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //         Authorization: `Bearer ${localStorage.getItem('token')}`,
//   //       },
//   //       body: JSON.stringify(editingMovie),
//   //     });

//   //     if (response.ok) {
//   //       // Movie updated successfully
//   //       const updatedMovie = await response.json();
//   //       console.log(updatedMovie)
//   //       // setMovies(prevMovies => {
//   //       //   const index = prevMovies.findIndex(movie => movie.id === updatedMovie.id);
//   //       //   const updatedMovies = [...prevMovies];
//   //       //   updatedMovies[index] = updatedMovie;
//   //       //   return updatedMovies;
//   //       // });
//   //       setIsEditing(false);
//   //     } else {
//   //       // Failed to update movie
//   //       throw new Error('Failed to update movie');
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //     // Handle error
//   //   }
//   // };

//   return (
//     <div>
//       <div>
//         <h1>My Movie Collection</h1>
//         <AddMovie />
//       <div className='search-div'>
//         <span>
//           <input
//           className='inputStyle'
//             placeholder="Search"
//             id="filter"
//             onChange={(e) => setSearchedText(e.target.value)}
//           />
//         </span>
//         </div>
//     </div>

//       <Table columns={columns} dataSource={dataSource} className='ant-table-content'/>


//     </div>
//   )

// }

// export default MovieTable


