import React, { useState, useEffect } from 'react';
import { Space, Table,Button } from 'antd';
import './Table.css';
import { ColumnsType } from 'antd/es/table';
import {ExportOutlined,DeleteOutlined } from '@ant-design/icons';
import { useMovie } from './../../../providers/movies';
import { IMovie} from '../../../providers/movies/context';
import AddNewMovie from './AddNewMovie';
import ViewModel from './ViewMovieRow';
import { useUser } from '../../../providers/users';
import WithoutTokenRedirect from '../../../HOC/WithoutTokenDirect';



const MovieTable = () => {

    const [searchedText, setSearchedText] = useState<string>('');
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const { fetchMovies,FetchedMovies ,deleteMovie }= useMovie();
    const {logOutUser}= useUser()

    useEffect(() =>{
        fetchMovies();
    },[]);

 
    const columns: ColumnsType<IMovie> = [
      {
        title: 'Title',
        sorter: (a: IMovie, b: IMovie) => a.starring.localeCompare(b.starring),
        dataIndex: 'title',
        key: 'title',
      },
      {
        key: 'starring',
        sorter: (a: IMovie, b: IMovie) => a.starring.localeCompare(b.starring),
        title: 'Starring',
        dataIndex: 'starring',
      },
      {
        key: 'duration',
        sorter: (a: IMovie, b: IMovie) => a.starring.localeCompare(b.starring),
        title: 'Duration',
        dataIndex: 'duration',
      },
      {
        key: 'categoryName',
        sorter: (a: IMovie, b: IMovie) => a.starring.localeCompare(b.starring),
        title: 'Category',
        dataIndex: 'categoryName',
        filteredValue: [searchedText],
        onFilter: (value, record) => {
          const stringValue = typeof value === 'string' ? value.toLowerCase() : "";
          return (
            String(record.title)
              .toLowerCase()
              .includes(stringValue) ||
            String(record.starring)
              .toLowerCase()
              .includes(stringValue) ||
            String(record.duration)
              .toLowerCase()
              .includes(stringValue) ||
            String(record.categoryName).toLowerCase().includes(stringValue)
          );
        }
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (_, record) => (
          <>
          <Space size='large'>
            <ViewModel
              id={record.id}
              title={record.title}
              duration={record.duration}
              starring={record.starring}
              categoryName={record.categoryName}
            />
  
              <Button type="primary" danger onClick={() => deleteMovieFunc(record)} className='deleteBtn'>
              <DeleteOutlined />
              </Button>
            </Space>
          </>
        ),width:100,
        
      },
    ];


  const deleteMovieFunc = (movie: IMovie) => {
    
    if(deleteMovie){
      deleteMovie(movie.id);
    }
    
  };



  return (

    <div>
        <div className="overview-container">
            <h1>ZMovies</h1>
            <button className="logout-button" onClick={logOutUser }><ExportOutlined /></button>
          </div>
      <div>
        <h1 className='Movieheadings'>Movie Collection</h1>
        <div className="search-div">
         <AddNewMovie/>
          <span>
          
            <input
              className="inputStyle"
              placeholder="Search"
              id="filter"
              
              onChange={(e) => setSearchedText(e.target.value)}
            />
          </span>
        </div>
      </div>

      <Table columns={columns} dataSource={FetchedMovies} 
      
      pagination={{
        current: page,
        pageSize: pageSize,
        onChange: (page, pageSize) => {
          setPage(page);
          setPageSize(pageSize)
        }
      }}
      className="ant-table" />
    </div>
  );
};

export default WithoutTokenRedirect(MovieTable);