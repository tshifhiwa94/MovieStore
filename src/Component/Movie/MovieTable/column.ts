// import { IMovie } from './../../../MovieTable/Table/MovieTable';
// import { ColumnsType } from 'antd/es/table';
// import 

//  const columns: ColumnsType<IMovie> = [
//     {
//       title: 'Title',
//       sorter: (a: IMovie, b: IMovie) => a.starring.localeCompare(b.starring),
//       dataIndex: 'title',
//       key: 'title',
//     },
//     {
//       key: 'starring',
//       sorter: (a: IMovie, b: IMovie) => a.starring.localeCompare(b.starring),
//       title: 'Starring',
//       dataIndex: 'starring',
//     },
//     {
//       key: 'duration',
//       sorter: (a: IMovie, b: IMovie) => a.starring.localeCompare(b.starring),
//       title: 'Duration',
//       dataIndex: 'duration',
//     },
//     {
//       key: 'categoryName',
//       sorter: (a: IMovie, b: IMovie) => a.starring.localeCompare(b.starring),
//       title: 'Category',
//       dataIndex: 'categoryName',
//       filteredValue: [searchedText],
//       onFilter: (value, record) => {
//         const stringValue = typeof value === 'string' ? value.toLowerCase() : "";
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
//       }
//     },
//     {
//       title: 'Action',
//       dataIndex: 'action',
//       key: 'action',
//       render: (_, record) => (
//         <>
//         <Space size='large'>
//           <ViewModel
//             id={record.id}
//             title={record.title}
//             duration={record.duration}
//             starring={record.starring}
//             categoryName={record.categoryName}
//           />

//             <Button type="primary" danger onClick={() => deleteMovieFunc(record)} className='deleteBtn'>
//             <DeleteOutlined />
//             </Button>
//           </Space>
//         </>
//       ),width:100,
      
//     },
//   ];