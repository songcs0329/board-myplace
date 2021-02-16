import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { BoardListStyles, MasonryColumn, MasonryWrap, BoardWriteBtn } from './ListStyles';

const Presenter = ({Link}) => {
  return (
    <BoardListStyles>
      <BoardWriteBtn>
        <Link to={`/write`}>
          <FontAwesomeIcon icon={faPen} />
        </Link>
      </BoardWriteBtn>
      <MasonryWrap>
        <MasonryColumn>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptate suscipit reprehenderit soluta minus officiis veniam totam explicabo, earum minima, sint voluptatibus harum. Iusto est unde fugiat totam id doloribus.
        </MasonryColumn>
        <MasonryColumn>
          test02
        </MasonryColumn>
        <MasonryColumn>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, earum temporibus cupiditate adipisci magni aut assumenda voluptatibus id quidem iste praesentium animi. Officia, culpa distinctio dignissimos autem unde dolores nesciunt?
        </MasonryColumn>
        <MasonryColumn>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sed quia in. Sapiente, nulla dolorem. Placeat debitis repellendus beatae ipsa inventore adipisci omnis sapiente tenetur voluptate? Quod, molestias. Aspernatur, autem?
        </MasonryColumn>
        <MasonryColumn>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quos expedita sint odit molestias nisi incidunt libero minima dolore odio quia molestiae quo assumenda recusandae, doloribus ab, natus nam ducimus.
        </MasonryColumn>
        <MasonryColumn>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt sequi esse eos aperiam ratione magnam cumque error voluptatibus. Rem eos magni cupiditate cumque, debitis repellendus vel accusamus nam iste velit?
        </MasonryColumn>
      </MasonryWrap>
    </BoardListStyles>
  );
};

export default Presenter;